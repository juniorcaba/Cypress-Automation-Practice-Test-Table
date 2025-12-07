class TablePage{

    anyLanguage = () => cy.get('input[type=radio][value="Any"]');

    javaLanguage = () => cy.get('input[type=radio][value="Java"]');

    pythonLanguage = () => cy.get('input[type=radio][value="Pyhton"]');

    beginnerLeveCheck = () => cy.get('input[type=checkbox][value="Beginner"]');

    intermediateLeveCheck = () => cy.get('input[type=checkbox][value="Intermediate"]');

    advancedrLeveCheck = () => cy.get('input[type=checkbox][value="Advanced"]');
    
    javaCourse = () => cy.get('#courses_table [data-col="language"]');

    pythonCourse = () => cy.get('td[data-col="language"]:visible');

    languageColumn = () => cy.get('td[data-col="language"]:visible')

    enrollmentsCol = () => cy.get('td[data-col="enrollments"]:visible');

    CourseLevel = () => cy.get('td[data-col="level"]:visible');

    minEnrollmentsDropdown = () => cy.get('#enrollDropdown');

    minEnrollmentsSelect = () => cy.get('li[data-value="10000"]');

    enrollmentsColumn = () => cy.get('td[data-col="enrollments"]:visible');

    noMatchingCourses = () => cy.get('#noData');

    resetButton = () => cy.get('#resetFilters');

    sortByDropdown = () => cy.get('#sortBy').select('Enrollments');

verifyMinEnrollments (elementValue, minValue){
    return elementValue().each(($var) => {
        const enrollment = parseInt($var.text());
        expect(enrollment).to.be.greaterThan(minValue);
    });
}

clickOn(selector) {
    selector().click();
}

getLanguageCell(languageName) {
    languageName()
}

LanguageVisible = (element, language) => {
    return element()
        .should('contain.text', language);
}

LanguageNotVisible = (elementFunction, language) => {
    return elementFunction()
        .should('not.contain.text', language); 
}

visibleCourse = (course, level) => {
    return course()
        .should('contain.text', level)
}

visibleElement = (selector) => {
    return selector()
        .should('be.visible')
}

matchingCourses = (course) => {
    return course()
        .should('be.visible')
}

}

export default TablePage;