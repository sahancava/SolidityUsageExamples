//SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.17;


abstract contract SuperAbstract {

    event True();

    string internal _valueOne;
    string internal _valueTwo;

    function changeVariable() public virtual {
        _valueOne = "Example";
    }

    function readVariable(int selection) public view virtual returns (string memory) {
        return selection == 1 ? _valueOne : _valueTwo;
    }
}

contract Super is SuperAbstract {

    function changeVariable() public override {
        _valueTwo = "Example2";
        super.changeVariable();
        emit True();
    }
}