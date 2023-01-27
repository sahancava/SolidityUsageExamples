//SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.17;

abstract contract SuperAbstract {

    struct Values {
        string _valueOne;
        string _valueTwo;
    }

    Values internal values;

    function _changeVariable() public virtual {
        values._valueOne = "Example";
    }

    function readVariable() public view virtual returns (string memory _valueOne, string memory _valueTwo) {
        return (values._valueOne, values._valueTwo);
    }
}

contract Super is SuperAbstract {

    function _changeVariable() public override {
        values._valueTwo = "Example2";
        super._changeVariable();
    }
}