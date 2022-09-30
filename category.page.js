const Page = require('./page')


 class CategoryPage extends Page{
    

    open() {
        super.open('https://www.cromwell.co.uk/shop/abrasives/cutting/c/090901');
    }


    async dashboard() {return await browser.$('//*[@id="__next"]')}
    async clickPagination() {return await browser.$('//*[@id="mui-99022"]')}
    async selectPaginations() {return await browser.$('//*[@id="menu-"]/div[3]/ul/li[2]')}
    async confirmPagination() {return await browser.$('//*[@id="__next"]/div[2]/div[2]/div/div/div/div[1]/div[3]/div/div[2]/div[2]/div[2]/div[2]/div/div')}
    async selectOutOfStock() {return await browser.$('//*[@id="__next"]/div[2]/div[2]/div/div/div/div[1]/div[3]/div/div[2]/div[1]/ul/div[1]')}
    async outOfStockPage() {return await browser.$('//*[@id="__next"]/div[2]/div[2]/div/div/div/div[1]/div[3]/div/div[2]/div[2]/div[1]/div/span')}
    async selTenPagination() {return await browser.$('//*[@id="mui-85932"]')}
    async selectSortBy() {return await browser.$('//*[@id="sort"]')}
    async selectLowToHigh() {return await browser.$('//*[@id="menu-"]/div[3]/ul/li[4]')}
    async lowToHighPage() {return await browser.$('//*[@id="sort"]')} 
    

    async iscategoryPageDisplayed(){

        var categorydetail = await this.categdetail();
        await categorydetail.scrollIntoView(4000);
        var isVisibleOnUI = await categorydetail.isDisplayed();
        return isVisibleOnUI;
    }


    async clickPageDropdown(){

        var clickPagedropEle = await this.clickPagination();
        await clickPagedropEle.click();

    }
     

    async selectPagination(){

        var selpaginationEle = await this.selectPaginations();
        await selpaginationEle.click();
    }

    async isPaginationDisplayed(){

        var paginationsdetail = await this.confirmPagination();
        var isVisibleOnUI = await paginationsdetail.isDisplayed();
        return isVisibleOnUI;
    }
 
    async clickOutOfStock(){

       var clickStockEle = await this.selectOutOfStock();
       await clickStockEle.click();
    }

    async isOutOfStockDisplayed(){

       var stockDetail = await this.outOfStockPage();
       var isVisibleOnUI = await stockDetail.isDisplayed();
       return isVisibleOnUI;

    }

    async selectTenPagination(){

       var selTenPaginationEle = await this.selTenPagination();
       await selTenPaginationEle.click();
   
    }

    async clickSortBy(){

       var selectSortByEle = await this.selectSortBy();
       await selectSortByEle.click();
    }

    async selectLowToHigh(){

       var selectLowToHighEle = await this.selectLowToHigh();
       await selectLowToHighEle.click();
    }

    async isLowToHighDisplayed(){

       var lowToHigh = await this.lowToHighPage();
       var isVisibleOnUI = await lowToHigh.isDisplayed();
       return isVisibleOnUI;
   
    }
}
 module.exports = new CategoryPage();

