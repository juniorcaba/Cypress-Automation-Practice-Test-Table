class TablePage{

    anyLanguage = () => cy.get('input[type=radio][value="Any"]');

    javaLanguage = () => cy.get('input[type=radio][value="Java"]');

    pythonLanguage = () => cy.get('input[type=radio][value="Python"]');

    beginnerLeveCheck = () => cy.get('input[type=checkbox][value="Beginner"]');

    intermediateLeveCheck = () => cy.get('input[type=checkbox][value="Intermediate"]');

    advancedrLeveCheck = () => cy.get('input[type=checkbox][value="Advanced"]');
    
    javaCourse = () => cy.get('#courses_table [data-col="language"]').contains('Java')

    pythonCourse = () => cy.get('td[data-col="language"]:visible').should('contain.text', 'Python');

    enrollmentsCol = () => cy.get('td[data-col="enrollments"]:visible');

    beginnerCourse = () => cy.get('td[data-col="level"]:visible').should('contain.text', 'Beginner');

    minEnrollmentsDropdown = () => cy.get('#enrollDropdown');

    minEnrollmentsSelect = () => cy.get('li[data-value="10000"]');

    visibleEnrollments = () => {
    const enrollments = 10000;
    cy.get('td[data-col="enrollments"]:visible')
        .invoke('text')
        .then(parseInt)
        .should('be.greaterThan', enrollments);
    }

    noMatchingCourses = () => + cy.get('#noData').should('be.visible');

    resetButton = () => cy.get('#resetFilters');

    sortByDropdown = () => cy.get('#sortBy').select('Enrollments');

}

export default TablePage;