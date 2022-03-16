import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {
  Box,
  GovernanceTimeLock,
  GovernanceToken,
  GovernorContract,
} from '../typechain';
import { printBlock, printContract } from './utils';

const deployGovernanceToken = async (
  ethers: any,
  signer: SignerWithAddress,
): Promise<GovernanceToken> => {
  console.log('\ndeploying GovernanceToken...');
  const GovernanceTokenFactory = await ethers.getContractFactory(
    'GovernanceToken',
  );
  const contract = await GovernanceTokenFactory.connect(signer).deploy();
  console.log(`\tdeployed at ${contract.address}`);
  printBlock(await ethers.provider.getBlock('latest'));
  return contract;
};
export { deployGovernanceToken };

const deployGovernanceTimeLock = async (
  ethers: any,
  admin: SignerWithAddress,
  minDelay: number,
): Promise<GovernanceTimeLock> => {
  console.log(`\ndeploying GovernanceTimeLock...`);
  const GovernanceTimeLockFactory = await ethers.getContractFactory(
    'GovernanceTimeLock',
  );
  const contract = await GovernanceTimeLockFactory.connect(admin).deploy(
    minDelay,
    [],
    [],
  );

  console.log(`\tdeployed at ${contract.address}`);
  printBlock(await ethers.provider.getBlock('latest'));
  return contract;
};
export { deployGovernanceTimeLock };

const deployGovernorContract = async (
  ethers: any,
  admin: SignerWithAddress,
  _tokenAddress: string,
  _timeLockAddress: string,
  _quorumPercentage: number,
  _votingPeriod: number,
  _votingDelay: number,
): Promise<GovernorContract> => {
  console.log(`\ndeploying GovernorContract...`);
  const GovernorContractFactory = await ethers.getContractFactory(
    'GovernorContract',
  );
  const contract = await GovernorContractFactory.connect(admin).deploy(
    _tokenAddress,
    _timeLockAddress,
    _quorumPercentage,
    _votingPeriod,
    _votingDelay,
  );
  console.log(`\tdeployed at ${contract.address}`);
  printBlock(await ethers.provider.getBlock('latest'));
  return contract;
};
export { deployGovernorContract };

const deployBox = async (
  ethers: any,
  owner: SignerWithAddress,
): Promise<Box> => {
  console.log(`\ndeploying Box...`);
  const BoxFactory = await ethers.getContractFactory('Box');
  const contract = await BoxFactory.connect(owner).deploy();
  console.log(`\tdeployed at ${contract.address}`);
  printBlock(await ethers.provider.getBlock('latest'));
  return contract;
};
export { deployBox };

const propose = async (
  ethers: any,
  network: any,
  governorContract: GovernorContract,
  boxContract: Box,
  store_value: number,
  proposalDescription: string,
): Promise<string> => {
  const transferCalldata = boxContract.interface.encodeFunctionData('store', [
    store_value,
  ]);
  console.log(`\nproposing...`);

  printBlock(await ethers.provider.getBlock('latest'));
  const proposeTx = await governorContract.propose(
    [boxContract.address],
    [0],
    [transferCalldata],
    proposalDescription,
  );

  await advanceBlocks(network, 1);

  console.log(`\tWait another 2 blocks...`);
  const receipt = await proposeTx.wait(2);
  printBlock(await ethers.provider.getBlock('latest'));
  const proposalId = await getProposalIdFromProposalTransactionReceipt(
    ethers,
    receipt,
  );
  console.log(`\tProposal id ${proposalId}`);
  return proposalId;
};
export { propose };

const advanceBlocks = async (network: any, blocks: number) => {
  console.log(`\tadvancing ${blocks} blocks...`);
  for (let i = 0; i <= blocks; i++) {
    network.provider.send('evm_mine');
  }
};
export { advanceBlocks };

const getProposalIdFromProposalTransactionReceipt = async (
  ethers: any,
  receipt: any,
) => {
  for (let i = 0; i < receipt.events.length; i++) {
    let e = receipt.events[i];
    if (e.event == 'ProposalCreated')
      return ethers.BigNumber.from(e.args[0]).toString();
  }
  return null;
};

const vote = async (
  network: any,
  ethers: any,
  governorContract: GovernorContract,
  voter: SignerWithAddress,
  proposalId: string,
  vote: number,
) => {
  // 0 = Against, 1 = For, 2 = Abstain for this example
  console.log(`\nvoting yes on ${proposalId}...`);
  advanceBlocks(network, 1);

  const voteTx = await governorContract
    .connect(voter)
    .castVoteWithReason(
      ethers.BigNumber.from(proposalId),
      vote,
      'Reason cha cha',
    );

  console.log(`\tWait 1 block...`);
  const receipt = await voteTx.wait(1);
  console.log(receipt);
};
export { vote };
