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
  grantRoles,
  propose,
  advanceBlocks,
  vote,
  VOTE,
  ProposalState,
  queueAndExecute,
} from '../helper';
import { printBlock } from '../utils';

// Governor Contract
const QUORUM_PERCENTAGE = 4;
// VOTING_PERIOD = 45818  # 1 week - more traditional.
// You might have different periods for different kinds of proposals
const VOTING_PERIOD = 100; // 15 blocks
const VOTING_DELAY = 1; // 1 block

// Timelock
const MIN_DELAY = 1; // 1 seconds

// Proposal
const PROPOSAL_DESCRIPTION = 'Proposal #1: Store 1 in the Box!';
const NEW_STORE_VALUE = 666;

let governanceToken: GovernanceToken;
let governanceTimeLock: GovernanceTimeLock;
let governorContract: GovernorContract;
let boxContract: Box;

let admin: SignerWithAddress;
let boxOwner: SignerWithAddress;
let voters: SignerWithAddress[];

task('deploy_and_run', 'Deploy and run DOA').setAction(
  async (taskArgs, hre) => {
    const { network, ethers } = hre;
    [admin, boxOwner] = await ethers.getSigners();
    [...voters] = await ethers.getSigners();

    const totalVoters = voters.length;
    console.log(`Total voters ${totalVoters}`);

    // deploy token GovernanceToken
    governanceToken = await deployGovernanceToken(ethers, admin);

    // delegate tokens to voters...
    console.log(`\ndelegating tokens to voters...`);
    let index = 0;
    while (index < totalVoters) {
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
    boxContract = await deployBox(ethers, boxOwner);
    await boxContract.transferOwnership(governanceTimeLock.address);

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

    // granting roles
    await grantRoles(ethers, admin, governanceTimeLock, governorContract);

    // Propose
    const proposalId = await propose(
      ethers,
      network,
      governorContract,
      boxContract,
      NEW_STORE_VALUE,
      PROPOSAL_DESCRIPTION,
    );

    // Let's vote!

    index = 0;

    // losing party...
    while (index < totalVoters / 2) {
      console.log(`\nVoter ${index}`);
      // voter 0
      await vote(
        network,
        ethers,
        governorContract,
        voters[index],
        proposalId,
        VOTE.AGAINST,
        "I'm not a perfect person, there is many I wish I didn't do",
      );
      index++;
    }

    // winning party...
    while (index < totalVoters) {
      console.log(`\nVoter ${index}`);
      // voter 0
      await vote(
        network,
        ethers,
        governorContract,
        voters[index],
        proposalId,
        VOTE.AGAINST,
        "I'm not a perfect person, there is many I wish I didn't do",
      );
      index++;
    }

    // Make voting period over

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

    // Once the voting period is over,
    // if quorum was reached (enough voting power participated)
    // and the majority voted in favor, the proposal is
    // considered successful and can proceed to be executed.
    // To execute we must first `queue` it to pass the timelock

    if (state === ProposalState.Succeeded) {
      await queueAndExecute(
        ethers,
        governorContract,
        boxContract,
        NEW_STORE_VALUE,
        PROPOSAL_DESCRIPTION,
      );
    }
  },
);

export default {};
