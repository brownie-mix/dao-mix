import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {
    Box,
    GovernanceTimeLock,
    GovernanceToken,
    GovernorContract,
} from '../typechain';
import { printBlock } from './utils';

export enum ProposalState {
    Pending = 0,
    Active = 1,
    Canceled = 2,
    Defeated = 3,
    Succeeded = 4,
    Queued = 5,
    Expired = 6,
    Executed = 7,
}

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
    const totalSupply = await contract.totalSupply();
    console.log(`\tTotal supply : ${ethers.utils.formatUnits(totalSupply)}`);
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

const grantAndRevokeRoles = async (
    ethers: any,
    timeLockOwner: SignerWithAddress,
    timeLockContract: GovernanceTimeLock,
    governorContract: GovernorContract,
) => {
    console.log(`\ngranting proposal, executor roles...`);
    printBlock(await ethers.provider.getBlock('latest'));

    // Now, we set the roles...
    // Do in Multicall fashion...yeeha!
    const RoleMultiCall = await ethers.getContractFactory('RoleMultiCall');
    const roleMultiCall = await RoleMultiCall.connect(timeLockOwner).deploy();

    const targets = [timeLockContract.address, timeLockContract.address];

    const encodedFunctions = [
        await timeLockContract.getDataGrantProposerRole(
            governorContract.address,
        ),
        await timeLockContract.getDataGrantExecutorRole(
            governorContract.address,
        ),
    ];

    const multiCallResult = await roleMultiCall.multiCall(
        targets,
        encodedFunctions,
    );
    console.log(`\tRoleMultiCall result: ${multiCallResult}`);

    // Now, we set the roles...
    // Multicall would be great here ;)
    // const proposalRole = await timeLockContract.PROPOSER_ROLE();
    // const executorRole = await timeLockContract.EXECUTOR_ROLE();
    // const timeLockAdminRole = await timeLockContract.TIMELOCK_ADMIN_ROLE();

    // await timeLockContract
    //   .connect(timeLockOwner)
    //   .grantRole(proposalRole, governorContract.address);
    // await timeLockContract
    //   .connect(timeLockOwner)
    //   .grantRole(executorRole, `0x0000000000000000000000000000000000000000`);

    // const tx = await timeLockContract
    //   .connect(timeLockOwner)
    //   .revokeRole(timeLockAdminRole, timeLockOwner.address);
    // await tx.wait(1);

    printBlock(await ethers.provider.getBlock('latest'));
};
export { grantAndRevokeRoles };

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
    const storeValue = await contract.retrieve();
    console.log(`\tInitial store value ${storeValue}`);
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
    const state = await governorContract.state(proposalId);
    console.log(`\tProposal state: ${ProposalState[state]}`);
    printBlock(await ethers.provider.getBlock('latest'));
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

const printVoteCast = async (receipt: any) => {
    for (let i = 0; i < receipt.events.length; i++) {
        let e = receipt.events[i];
        if (e.event === 'VoteCast') {
            console.log(
                `\tEvent VoteCast Voter: ${e.args.voter} Support: ${e.args.support} Weight: ${e.args.weight} Reason: ${e.args.reason}`,
            );
        }
    }
};

export enum VOTE {
    AGAINST = 0,
    FOR = 1,
    ABSTAIN = 2,
}

// cast a vote
const vote = async (
    network: any,
    ethers: any,
    governorContract: GovernorContract,
    voter: SignerWithAddress,
    proposalId: string,
    vote: VOTE,
    reason: string,
) => {
    // 0 = Against, 1 = For, 2 = Abstain for this example
    console.log(`\ncast vote ${VOTE[vote]} on ${proposalId}...`);
    advanceBlocks(network, 1);
    printBlock(await ethers.provider.getBlock('latest'));

    const voteTx = await governorContract
        .connect(voter)
        .castVoteWithReason(ethers.BigNumber.from(proposalId), vote, reason);

    console.log(`\tWait 1 block...`);
    const receipt = await voteTx.wait(1);
    printVoteCast(receipt);
    printBlock(await ethers.provider.getBlock('latest'));
};
export { vote };

const queueAndExecute = async (
    ethers: any,
    governorContract: GovernorContract,
    boxContract: Box,
    store_value: number,
    proposalDesc: string,
) => {
    console.log(`\nqueing...`);
    printBlock(await ethers.provider.getBlock('latest'));

    const transferCalldata = boxContract.interface.encodeFunctionData('store', [
        store_value,
    ]);
    const descriptionHash = ethers.utils.id(proposalDesc);
    const queueTx = await governorContract.queue(
        [boxContract.address],
        [0],
        [transferCalldata],
        descriptionHash,
    );
    await queueTx.wait(1);
    printBlock(await ethers.provider.getBlock('latest'));

    console.log(`\nexecuting...`);
    const exeTx = await governorContract.execute(
        [boxContract.address],
        [0],
        [transferCalldata],
        descriptionHash,
    );
    await exeTx.wait(1);
    printBlock(await ethers.provider.getBlock('latest'));

    const newValue = await boxContract.retrieve();
    console.log(`\tUpdated/new store value ${newValue}`);
};
export { queueAndExecute };
