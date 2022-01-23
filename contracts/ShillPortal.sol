// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract ShillPortal {
  uint256 totalShills;
  mapping(address => Shill) shillDict;

  struct Shill {
	  address sender;
    string name;
	  string coin;
	}

  function addShill(string memory _name, string memory _coin) public {
    shillDict[msg.sender] = Shill(msg.sender, _name, _coin);
    totalShills += 1;
    console.log("%s (%s) shilled %s", msg.sender, _name, _coin);
  }

  function getShill(address targetWallet) public view returns(Shill memory) {
    return shillDict[targetWallet];
  }

  constructor() {
    console.log("This contract allows you to shill your favorite (shit)coin");
  }

  // function shill() public {
  //   totalShills += 1;
  //   console.log("%s has shilled a coin", msg.sender);
  // }

  function getTotalShills() public view returns (uint256) {
    console.log("We have %d total coins shilled!", totalShills);
    return totalShills;
  }
}
