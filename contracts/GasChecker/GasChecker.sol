//SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.17;

contract GasChecker {

    bool public _value = true;

    error CustomError(string);

    function changeVariable() public view returns (bool result) {
        if(!_value) revert CustomError("Value is not true!");
        return true;
    }

    function changeVariable_2() public view returns (bool result) {
        require(_value, "Value is not true!");
        return true;
    }
}