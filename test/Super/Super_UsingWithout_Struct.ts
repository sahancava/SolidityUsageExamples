import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Contract } from 'ethers';

describe('SuperUsage', function () {
    let hardhatContract: Contract;
    let _valueOne: string;
    let _valueTwo: string;

    this.beforeAll(async () => {
        const Contract = await ethers.getContractFactory('contracts/SuperUsage/Super_UsingWithout_Struct.sol:Super');
        hardhatContract = await Contract.deploy();
    })

    describe('########## ---> Before triggering ', function () {
        it('_valueTwo variable should be empty', async function () {
            expect(await hardhatContract.readVariable(1)).to.equal('');
        })
        it('_valueOne variable should be empty', async function () {
            expect(await hardhatContract.readVariable(2)).to.equal('');
        })
        it('Should change the value of the variables', async function () {
            var result = await hardhatContract.changeVariable();
            expect((await result.wait()).events[0].event).to.equal('True');
        })
    })
    describe('########## ---> Read Variables after execution of changeVariable()', function () {
        before(async () => {
            _valueOne = await hardhatContract.readVariable(1);
            _valueTwo = await hardhatContract.readVariable(2);
        })
        it('_valueOne variable should be `Example`', async function () {
            expect(await hardhatContract.readVariable(1)).to.equal(_valueOne);
        })
        it('_valueTwo variable should be `Example2`', async function () {
            expect(await hardhatContract.readVariable(2)).to.equal(_valueTwo);
        })
    })
})