import TablePage from "../pages/tablePage";
import data from "..//fixtures/testData.json";

const tablePage = new TablePage();
const minValue = parseInt(data.EnrollmentsValue.minEnrollmentsValue);

    beforeEach(() => {
        cy.visit('/');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Test case 1: Language filter → Java', () =>{
        tablePage.clickOn(tablePage.javaLanguage);
        tablePage.languageColumn().should('not.contain.text', data.lenguage.excludedLanguage);
        });

    it('Test case 2: Level filter → Beginner only', () =>{
        tablePage.clickOn(tablePage.intermediateLeveCheck);
        tablePage.clickOn(tablePage.advancedrLeveCheck);
        tablePage.CourseLevel().should('contain.text', data.courseLevels.beginner);
    })

    it('Test case 3: Min enrollments → 10,000+', () => {
        tablePage.clickOn(tablePage.minEnrollmentsDropdown);
        tablePage.clickOn(tablePage.minEnrollmentsSelect);
        tablePage.getEnrollmentsCellElements().each(($enrollmentCell) => {
            const enrollmentValue = parseInt($enrollmentCell.text());
            expect(enrollmentValue).to.be.greaterThan(minValue); 
        });
});

    it('Test case 4: Combined filters → Python + Beginner + 10,000+', () => {
        tablePage.clickOn(tablePage.pythonLanguage);
        tablePage.clickOn(tablePage.advancedrLeveCheck);
        tablePage.clickOn(tablePage.intermediateLeveCheck)
        tablePage.clickOn(tablePage.minEnrollmentsDropdown);
        tablePage.clickOn(tablePage.minEnrollmentsSelect);
        tablePage.languageColumn().should('contain.text',data.language.python)
        tablePage.getEnrollmentsCellElements().each(($enrollmentCell) => {
            const enrollmentValue = parseInt($enrollmentCell.text());
            expect(enrollmentValue).to.be.greaterThan(minValue); 
        });
    })

    it('Test case 5: No results state', () => {
        tablePage.clickOn(tablePage.anyLanguage);
        tablePage.clickOn(tablePage.beginnerLeveCheck);
        tablePage.clickOn(tablePage.intermediateLeveCheck);
        tablePage.clickOn(tablePage.minEnrollmentsDropdown);
        tablePage.clickOn(tablePage.minEnrollmentsSelect);
        tablePage.noMatchingCourses().should('be.visible');
    })

    it('Test case 6: Reset button visibility and behavior', () => {
        tablePage.clickOn(tablePage.anyLanguage);
        tablePage.clickOn(tablePage.beginnerLeveCheck);
        tablePage.resetButton().should('be.visible');
        tablePage.clickOn(tablePage.resetButton);
    })

    it.only('Test case 7: Sort by Enrollments (ascending, numeric)', () => {
        tablePage.sortByDropdown();
        tablePage.enrollmentsCol().should('be.visible');
        
    });