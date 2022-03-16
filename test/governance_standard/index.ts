import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers, network } from 'hardhat';
import { constants } from 'ethers';
import {
  Box,
  GovernanceTimeLock,
  GovernanceToken,
  GovernorContract,
} from '../../typechain';

// Governor Contract
const QUORUM_PERCENTAGE = 4;
// VOTING_PERIOD = 45818  # 1 week - more traditional.
// You might have different periods for different kinds of proposals
const VOTING_PERIOD = 5; // 5 blocks
const VOTING_DELAY = 1; // 1 block

// Timelock
// MIN_DELAY = 3600  // 1 hour - more traditional
const MIN_DELAY = 1; // 1 seconds

// Proposal
const PROPOSAL_DESCRIPTION = 'Proposal #1: Store 1 in the Box!';
const NEW_STORE_VALUE = 5;

describe('dao-mix', function () {
  let governorContract: GovernorContract;
  let governanceToken: GovernanceToken;
  let governanceTimeLock: GovernanceTimeLock;
  let boxContract: Box;

  let admin: SignerWithAddress;
  let proposer: SignerWithAddress;
  let boxOwner: SignerWithAddress;
  let users: SignerWithAddress[];

  async function deployGovernanceToken() {
    const GovernanceTokenFactory = await ethers.getContractFactory(
      'GovernanceToken',
    );
    return await GovernanceTokenFactory.connect(admin).deploy();
  }

  async function deployGovernanceTimeLock() {
    const GovernanceTimeLockFactory = await ethers.getContractFactory(
      'GovernanceTimeLock',
    );
    return await GovernanceTimeLockFactory.connect(admin).deploy(
      MIN_DELAY,
      [],
      [],
    );
  }

  async function deployGovernor(
    _tokenAddress: string,
    _timeLockAddress: string,
    _quorumPercentage: number,
    _votingPeriod: number,
    _votingDelay: number,
  ) {
    const GovernorContractFactory = await ethers.getContractFactory(
      'GovernorContract',
    );
    return await GovernorContractFactory.connect(admin).deploy(
      _tokenAddress,
      _timeLockAddress,
      _quorumPercentage,
      _votingPeriod,
      _votingDelay,
    );
  }

  async function deployBox() {
    // account = get_account()
    // box = Box.deploy({"from": account})
    // tx = box.transferOwnership(GovernanceTimeLock[-1], {"from": account})
    // tx.wait(1)

    const BoxFactory = await ethers.getContractFactory('Box');
    return await BoxFactory.connect(boxOwner).deploy();
  }

  async function advanceBlocks(blocks: number) {
    console.log(`Advancing blocks: ${blocks} ...`);
    for (let i = 0; i <= blocks; i++) {
      network.provider.send('evm_mine');
    }
  }

  async function propose(store_value: number) {
    const transferCalldata = boxContract.interface.encodeFunctionData('store', [
      store_value,
    ]);

    const proposeTx = await governorContract.propose(
      [boxContract.address],
      [0],
      [transferCalldata],
      PROPOSAL_DESCRIPTION,
    );

    const tx = await proposeTx.wait();
    console.log(tx);

    // Wait 1 block before opening for voting
    await advanceBlocks(1);
  }

  before(async () => {
    users = await ethers.getSigners();
    [admin, boxOwner, proposer] = users;
    // GovernanceToken
    governanceToken = await deployGovernanceToken();

    // GovernanceTimeLock
    governanceTimeLock = await deployGovernanceTimeLock();

    // GovernorContract
    governorContract = await deployGovernor(
      governanceToken.address,
      governanceTimeLock.address,
      QUORUM_PERCENTAGE,
      VOTING_PERIOD,
      VOTING_DELAY,
    );
    boxContract = await deployBox();
    // Transfer ownership to GovernanceTimeLock
    await boxContract.transferOwnership(governanceTimeLock.address);

    console.log(`\tGovernanceToken address   : ${governanceToken.address}`);
    console.log(`\tGovernanceTimeLock address: ${governanceTimeLock.address}`);
    console.log(`\tGovernorContract address  : ${governorContract.address}`);
  });

  describe('Propose', () => {
    it('name', async () => {
      const proposeId = await propose(NEW_STORE_VALUE);
    });
    it('symbol', async () => {});
  });
});
