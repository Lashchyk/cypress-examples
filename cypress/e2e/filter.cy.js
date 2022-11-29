import homePage from "../pageobjects/home-page";

describe('Filter through products functionality', () => {

    beforeEach(() => {
        homePage.openHomePage()
    })

    it('Filter For Category: Evening dress with Size: S and Color: Pink', () => {
        homePage.selectMenu('Dresses')
        homePage.selectCategory('Evening Dresses')
        homePage.selectSize('S')
        homePage.selectColor('Pink')
        homePage.getProductFilter().should('not.be.empty')
    })
})