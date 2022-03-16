import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {
  GovernanceToken,
  Box,
  GovernanceTimeLock,
  GovernorContract,
} from '../../typechain';
import {
  deployGovernanceToken,
  deployBox,
  deployGovernanceTimeLock,
  deployGovernorContract,
  propose,
  advanceBlocks,
  vote,
  VOTE,
  ProposalState,
} from '../helper';
import { printBlock } from '../utils';

// Governor Contract
const QUORUM_PERCENTAGE = 50;
// VOTING_PERIOD = 45818  # 1 week - more traditional.
// You might have different periods for different kinds of proposals
const VOTING_PERIOD = 100; // 15 blocks
const VOTING_DELAY = 1; // 1 block

// Timelock
const MIN_DELAY = 1; // 1 seconds

// Proposal
const PROPOSAL_DESCRIPTION = 'Proposal #1: Store 1 in the Box!';
const NEW_STORE_VALUE = 5;

let governanceToken: GovernanceToken;
let governanceTimeLock: GovernanceTimeLock;
let governorContract: GovernorContract;
let box: Box;

let admin: SignerWithAddress;
let proposer: SignerWithAddress;
let boxOwner: SignerWithAddress;
let voters: SignerWithAddress[];

task('deploy_and_run', 'Deploy and run DOA').setAction(
  async (taskArgs, hre) => {
    const { network, ethers } = hre;
    const signers = await ethers.getSigners();
    [admin, boxOwner, proposer, ...voters] = signers;

    // deploy GovernanceToken
    governanceToken = await deployGovernanceToken(ethers, admin);

    // delegate tokens to voters...
    console.log(`\ndelegating tokens to voters...`);

    let index = 0;
    while (index < 15) {
      console.log(`\tVoter ${index}`);
      await governanceToken.connect(admin).delegate(voters[index].address);
      printBlock(await ethers.provider.getBlock('latest'));
      index++;
    }

    const ownerBal = ethers.utils.formatUnits(
      await governanceToken.balanceOf(admin.address),
    );
    console.log(`\tOwner balance: ${ownerBal}`);

    governanceTimeLock = await deployGovernanceTimeLock(
      ethers,
      admin,
      MIN_DELAY,
    );

    // deploy Box and transfer it ownership to timelock
    box = await deployBox(ethers, boxOwner);
    await box.transferOwnership(governanceTimeLock.address);

    // deploy Governor
    governorContract = await deployGovernorContract(
      ethers,
      admin,
      governanceToken.address,
      governanceTimeLock.address,
      QUORUM_PERCENTAGE,
      VOTING_PERIOD,
      VOTING_DELAY,
    );

    // Propose
    const proposalId = await propose(
      ethers,
      network,
      governorContract,
      box,
      NEW_STORE_VALUE,
      PROPOSAL_DESCRIPTION,
    );

    // Let's vote!

    await vote(
      network,
      ethers,
      governorContract,
      proposer,
      proposalId,
      VOTE.FOR,
      "I'm not a perfect person, there is many I wish I didn't do",
    );

    index = 0;
    while (index < 5) {
      console.log(`\nVoter ${index}`);
      // voter 0
      await vote(
        network,
        ethers,
        governorContract,
        voters[index],
        proposalId,
        VOTE.FOR,
        "I'm not a perfect person, there is many I wish I didn't do",
      );
      index++;
    }

    // Once the voting period is over,
    // if quorum was reached (enough voting power participated)
    // and the majority voted in favor, the proposal is
    // considered successful and can proceed to be executed.
    // To execute we must first `queue` it to pass the timelock
    //

    console.log(`\nEnding voting period...`);
    const proposalDeadline = await governorContract.proposalDeadline(
      proposalId,
    );
    console.log(
      `\tProposalDeadline at block: ${ethers.BigNumber.from(
        proposalDeadline,
      ).toString()}`,
    );
    await advanceBlocks(network, VOTING_PERIOD);
    printBlock(await ethers.provider.getBlock('latest'));
    const state = await governorContract.state(proposalId);
    console.log(`\tProposal state: ${ProposalState[state]}`);

    // const state = await governorContract.state(proposalId);
    // console.log(state);
    // printBlock(await ethers.provider.getBlock('latest'));
  },
);

export default {};
