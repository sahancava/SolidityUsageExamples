//SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.18;


abstract contract SuperAbstract {

    event True();

    string internal _valueOne;
    string internal _valueTwo;

    function changeVariable() public virtual {
        _valueOne = "Example";
    }

    function readVariable(int selection) public view virtual returns (string memory) {
        require(selection == 1 || selection == 2, "Selection can only by either 1 or 2.");
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