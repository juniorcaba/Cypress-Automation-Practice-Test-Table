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

    it('Test case 3: Min enrollments → 10,000+', () => {
        tablePage.minEnrollmentsDropdown().click();
        tablePage.minEnrollmentsSelect().click();
        tablePage.visibleEnrollments();
    })

    it('Test case 4: Combined filters → Python + Beginner + 10,000+', () => {
        tablePage.pythonLanguage().click();
        tablePage.advancedrLeveCheck().click();
        tablePage.intermediateLeveCheck().click();
        tablePage.minEnrollmentsDropdown().click();
        tablePage.minEnrollmentsSelect().click();
        tablePage.pythonCourse();
        tablePage.visibleEnrollments();
    })

    it('Test case 5: No results state', () => {
        tablePage.anyLanguage().click();
        tablePage.beginnerLeveCheck().click();
        tablePage.intermediateLeveCheck().click();
        tablePage.minEnrollmentsDropdown().click();
        tablePage.minEnrollmentsSelect().click();
        tablePage.noMatchingCourses();
    })

    it('Test case 6: Reset button visibility and behavior', () => {
        tablePage.anyLanguage().click();
        tablePage.beginnerLeveCheck().click();
        tablePage.resetButton().should('be.visible');
        tablePage.resetButton().click();
    })

    it.only('Test case 7: Sort by Enrollments (ascending, numeric)', () => {
        tablePage.sortByDropdown();
        tablePage.enrollmentsCol().should('be.visible');
        
    });