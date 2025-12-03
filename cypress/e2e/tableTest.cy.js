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
        tablePage.clickOn(tablePage.javaLanguage);
        tablePage.LanguageNotVisible(tablePage.languageColumn, 'Python');
        });

    it('Test case 2: Level filter → Beginner only', () =>{
        tablePage.clickOn(tablePage.intermediateLeveCheck);
        tablePage.clickOn(tablePage.advancedrLeveCheck);
        tablePage.visibleCourse(tablePage.CourseLevel, 'Beginner');
    })

    it('Test case 3: Min enrollments → 10,000+', () => {
        tablePage.clickOn(tablePage.minEnrollmentsDropdown);
        tablePage.clickOn(tablePage.minEnrollmentsSelect);
        tablePage.verifyMinEnrollments(tablePage.enrollmentsColumn, 10000);
    })

    it('Test case 4: Combined filters → Python + Beginner + 10,000+', () => {
        tablePage.clickOn(tablePage.pythonLanguage);
        tablePage.clickOn(tablePage.advancedrLeveCheck);
        tablePage.clickOn(tablePage.intermediateLeveCheck)
        tablePage.clickOn(tablePage.minEnrollmentsDropdown);
        tablePage.clickOn(tablePage.minEnrollmentsSelect);
        tablePage.LanguageVisible(tablePage.languageColumn, 'Python');
        tablePage.verifyMinEnrollments(tablePage.enrollmentsColumn, 10000);
    })

    it.only('Test case 5: No results state', () => {
        tablePage.clickOn(tablePage.anyLanguage);
        tablePage.clickOn(tablePage.beginnerLeveCheck);
        tablePage.clickOn(tablePage.intermediateLeveCheck);
        tablePage.clickOn(tablePage.minEnrollmentsDropdown);
        tablePage.clickOn(tablePage.minEnrollmentsSelect);
        tablePage.matchingCourses(tablePage.noMatchingCourses)
    })

    it('Test case 6: Reset button visibility and behavior', () => {
        tablePage.anyLanguage().click();
        tablePage.beginnerLeveCheck().click();
        tablePage.resetButton().should('be.visible');
        tablePage.resetButton().click();
    })

    it('Test case 7: Sort by Enrollments (ascending, numeric)', () => {
        tablePage.sortByDropdown();
        tablePage.enrollmentsCol().should('be.visible');
        
    });