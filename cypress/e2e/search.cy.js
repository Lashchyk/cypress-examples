import homePage from "../pageobjects/home-page";

describe('Search for product functionality', () => {

    beforeEach(() => {
        homePage.openHomePage()
    })

    it('Search For an Existing Product', () => {
        homePage.searchForProduct('Summer dress')
        homePage.getProduct()
    })

    it('Search For Not Existing Product', () => {
        homePage.searchForProduct('Cocktail dress')
        homePage.getProductEmpty()
    })
})