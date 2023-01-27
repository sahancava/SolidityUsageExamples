// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;

contract Error {
    error MyError(string message);
    error EmptyError();

    function foo() public pure {
        revert MyError("My error message");
    }

    function bar() public pure {
        revert EmptyError();
    }
}