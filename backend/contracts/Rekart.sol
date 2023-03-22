// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Rekart {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    struct Item {
        uint256 id;
        string name;
        string category;
        string image;
        string carbonfootprint;
        uint256 cost;
        uint256 stock;
    }

    struct Order {
        uint256 time;
        Item item;
    }

    mapping(uint256 => Item) public items;
    mapping(address => uint256) public orderCount;
    mapping(address => mapping(uint256 => Order)) public orders;

    event List(string name, uint256 cost, uint256 quantity);
    event Buy(address buyer, uint256 orderId, uint256 itemId);

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    // List products
    function list(
        uint256 _id,
        string memory _name,
        string memory _category,
        string memory _image,
        string memory _carbonfootprint,
        uint256 _cost,
        uint256 _stock
    ) public onlyOwner {
        Item memory item = Item(
            _id,
            _name,
            _category,
            _image,
            _carbonfootprint,
            _cost,
            _stock
        );

        items[_id] = item;

        emit List(_name, _cost, _stock);
    }

    function buy(uint256 _id) public payable {
        Item memory item = items[_id];

        require(msg.value >= item.cost);

        require(item.stock > 0);

        Order memory order = Order(block.timestamp, item);

        orderCount[msg.sender]++;
        orders[msg.sender][orderCount[msg.sender]] = order;

        items[_id].stock = item.stock - 1;

        emit Buy(msg.sender, orderCount[msg.sender], item.id);
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }
}
