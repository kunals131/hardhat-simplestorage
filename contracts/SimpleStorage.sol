// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; //Latest is 0.8.12


contract SimpleStorage {
    //data types : boolean, string,uint, int, address, bytes  
    // bool hasFavouriteNumber = true;
    // uint favouriteNumber = 5;
    // string favouriteNumberInText = "Five";
    // int256 favouriteInt = -5;
    // // address myAddress = 0x--------
    // bytes32 favouriteBytes = "Cat";
    //This get initialized to 0! and its set to private by default we'll make it public
    uint256  favouriteNumber; //stored in storage by default 

//mappings by default all string keys have value 0
    mapping(string=>uint256) public nameToFavouriteNumber;


    function store(uint256 _favouriteNumber) public {
        favouriteNumber = _favouriteNumber;
    }

    //view functions doent require any gas fee
    //view functions dont allow moidification of data

    function retrieve() public view returns(uint256) {
        return favouriteNumber;
    }

    //There is another type called pure, they dont even allow reading the data also doesnt require gas fee
    //they dont allow customization they are indenedent function dont change anything dnt read anything

    function add() public pure returns(uint256) {
        return(1+1);
    }

    // People public person = People({favouriteNumber : 2, name : "Kunal"});

    //array 

    //iniitalizing an array Dynamic array is size is not given
    People[] public people;

    //static array with size 3
    // People[3] public people;
    
    //0 : 2 Patrick

    // uint256[] public favouriteNUmbersList;

    
    //custom types structs
    struct People {
        uint256 favouriteNumber;
        string name;
    }

    //EVM stores data either in calldata,memory or storage;
    //There are more but current focus is on these three.
    function addPerson(string memory _name,uint256 _favouriteNumber) public {
        people.push(People({favouriteNumber : _favouriteNumber, name : _name}));
        nameToFavouriteNumber[_name] = _favouriteNumber;
    }

    //Mappings : 


}

// 0xd9145CCE52D386f254917e481eB44e9943F39138