const printBlock = (block: any) => {
  let percentageGasUsed = (block.gasUsed / block.gasLimit) * 100;
  console.log(
    `\tBlock: ${block.number} Gas used:${
      block.gasUsed
    } (${percentageGasUsed.toFixed(2)}%)`,
  );
};
export { printBlock };

const printContract = (contract: any) => {
  console.log(contract);
};
export { printContract };
