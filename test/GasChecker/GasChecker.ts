import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';

describe('GasChecker', function () {
    let hardhatContract: Contract;

    this.beforeAll(async () => {
        const Contract = await ethers.getContractFactory('contracts/GasChecker/GasChecker.sol:GasChecker');
        hardhatContract = await Contract.deploy();
    })

    describe('########## ---> Before triggering ', function () {
        it('_valueTwo variable should be empty', async function () {
            const result = await hardhatContract.changeVariable_2();
            expect(await hardhatContract.changeVariable_2()).to.equal(result);
        })
    })
    describe('########## ---> After triggering ', function () {

        it('_valueTwo variable should be empty', async function () {
            const result = await hardhatContract.changeVariable_2();
            expect(await hardhatContract.changeVariable()).to.equal(result);
        })
    })  
})