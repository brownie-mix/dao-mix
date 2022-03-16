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
} from '../helper';
import { printBlock } from '../utils';

// Governor Contract
const QUORUM_PERCENTAGE = 4;
// VOTING_PERIOD = 45818  # 1 week - more traditional.
// You might have different periods for different kinds of proposals
const VOTING_PERIOD = 5; // 5 blocks
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
let voter: SignerWithAddress;
let users: SignerWithAddress[];

task('deploy_and_run', 'Deploy and run DOA').setAction(
  async (taskArgs, hre) => {
    const { network, ethers } = hre;
    const signers = await ethers.getSigners();
    [admin, boxOwner, proposer, voter] = signers;

    // deploy GovernanceToken
    governanceToken = await deployGovernanceToken(ethers, admin);

    governanceTimeLock = await deployGovernanceTimeLock(
      ethers,
      admin,
      MIN_DELAY,
    );

    box = await deployBox(ethers, boxOwner);

    await box.transferOwnership(governanceTimeLock.address);

    governorContract = await deployGovernorContract(
      ethers,
      admin,
      governanceToken.address,
      governanceTimeLock.address,
      QUORUM_PERCENTAGE,
      VOTING_PERIOD,
      VOTING_DELAY,
    );

    const proposalId = await propose(
      ethers,
      network,
      governorContract,
      box,
      NEW_STORE_VALUE,
      PROPOSAL_DESCRIPTION,
    );

    await vote(network, ethers, governorContract, admin, proposalId, 1);
  },
);

export default {};
