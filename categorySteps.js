import { Given, When, Then } from '@wdio/cucumber-framework';
import CategoryPage from '../pages/category.page';
const CategoryPage = require('../pages/category.page')
const { Given, When, Then } = require('cucumber')
const assert = require('assert');

Given("The user is on this category page", async()=>{
await browser.url("/")
const size = await browser.setWindowSize(1300, 840);
console.log(size)
await browser.pause(4000)

});

When("No further options are clicked", async() =>{
    await browser.pause(2000);
});

Then("Ten products should be displayed",async()=>{
    var isVisible = await CategoryPage.iscategoryPageDisplayed()
    assert.strictEqual(true, isVisible); 
    await browser.pause(2000)

});

Given("The user is on this category page", async()=>{
    
    await browser.pause(2000)
});

When("The user changes ‘Rows per page:’ to 25 (pagination)", async() =>{

    await CategoryPage.clickPageDropdown();
    await CategoryPage.selectPagination();
    await browser.pause(2000);
});

Then("25 products should be displayed",async()=>{
    var isVisible = await CategoryPage.isPaginationDisplayed()
    assert.strictEqual(true, isVisible); 
    await browser.pause(2000)

});

Given("The user is on this category page", async()=>{
    
    await browser.pause(2000)
});

When("The user changes ‘Rows per page:’ to 25 (pagination)", async() =>{

    await CategoryPage.clickPageDropdown();
    await CategoryPage.selectPagination();
    await browser.pause(2000);
});

And("User has clicked ‘Show Out of Stock’)", async() =>{

    await CategoryPage.clickOutOfStock();
    await browser.pause(2000);
});

Then("Check there is at least one product that show ‘OUT OF STOCK’ in the results",async()=>{
    var isVisible = await CategoryPage.isOutOfStockDisplayed()
    assert.strictEqual(true, isVisible); 
    await browser.pause(2000)

});

Given("The user is on this category page", async()=>{
    
    await browser.pause(2000)
});

When("The user selects ‘Sort By:’ - ‘Price Low to High", async() =>{

    await CategoryPage.clickPageDropdown();
    await CategoryPage.selectTenPagination();
    await CategoryPage.clickSortBy();
    await CategoryPage.selectLowToHigh();
    await browser.pause(2000);
});

Then("10 products should be displayed in order of price (low to high)",async()=>{

    var isVisible = await CategoryPage.isLowToHighDisplayed()
    assert.strictEqual(true, isVisible); 
    await browser.pause(2000)

});