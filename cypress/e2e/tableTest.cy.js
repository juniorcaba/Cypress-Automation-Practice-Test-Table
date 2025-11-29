import TablePage from "../pages/tablePage";
import data from "..//fixtures/testData.json";

const tablePage = new TablePage();

    beforeEach(() => {
        cy.visit('/');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Test case 1: Language filter → Java', () =>{
        tablePage.javaLanguage().click();
        tablePage.pythonCourse().should('not.be.visible');
        });

    it('Test case 2: Level filter → Beginner only', () =>{
        tablePage.intermediateLeveCheck().click();
        tablePage.advancedrLeveCheck().click();
        tablePage.beginnerCourse();
    })

    it.only('Test case 3: Min enrollments → 10,000+', () => {
        tablePage.minEnrollmentsDropdown().click();
        tablePage.minEnrollmentsSelect().click();
        tablePage.visibleEnrollments();
    })