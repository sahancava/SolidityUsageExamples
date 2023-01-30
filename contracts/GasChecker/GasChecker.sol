//SPDX-License-Identifier: Unlicensed
pragma solidity 0.8.17;

contract GasChecker {

    bool public _value = false;

    bool public _value2 = false;

    error CustomError_Value_Should_Be__TRUE();

    function changeVariable() public {
        if(_value) revert CustomError_Value_Should_Be__TRUE();
        _value2 = !_value2;
    }

    function changeVariable_2() public {
        require(1 == 1, 'CustomError_Value_Should_Be__TRUE');
        _value2 = !_value2;
    }
}