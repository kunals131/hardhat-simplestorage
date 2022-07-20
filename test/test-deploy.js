const {ethers} = require('hardhat');
const {assert, expect} = require('chai');
describe("Simple Storage", function() {

  let simpleStorageFactory, simpleStorage


  beforeEach(async function() {
       simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
       simpleStorage = await simpleStorageFactory.deploy();
  })

  it("Should start with a favourite number of 0", async function() {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  })
  //it.only will run only that test;
  it("Should update when we call store", async function() {
    const exptectedValue = "7"
    const transactionResposne =await simpleStorage.store(exptectedValue);
    await transactionResposne.wait(1);

    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), exptectedValue);
  })
})


















/**
 * Testing example
 * describe("Simple Storage", function() {
 *    beforeEach()
 *    it()
 *    it()
 *    it()
 *      describe("Something", function() {
 *          beforeEach()
 *          it()
 *          it()
 * })
 * })
 * 
 * 
 */