import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';

describe('GasChecker', function () {
    let hardhatContract: Contract;
    
    this.beforeAll(async () => {
        const Contract = await ethers.getContractFactory('contracts/GasChecker/GasChecker.sol:GasChecker');
        hardhatContract = await Contract.deploy();
    })

    describe('########## ---> After triggering ', function () {
        it('Should revert due to \'revert\'', async function () {
            expect(await hardhatContract.changeVariable()).to.be.not.revertedWithCustomError(hardhatContract, 'CustomError_Value_Should_Be__TRUE');
        })
    })

    describe('########## ---> Before triggering ', function () {
        it('Should revert due to \'require\'', async function () {
            await expect(hardhatContract.changeVariable_2()).to.be.not.revertedWith('CustomError_Value_Should_Be__TRUE');
        })
    })
})