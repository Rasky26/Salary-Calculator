console.log('Heyo')

// --------------------------------
// Global variables
let employees


// --------------------------------
// Ensure the document is ready
$(readyNow)


// --------------------------------
// Main function that holds the handlers that
// impact the DOM
function readyNow() {

    // Button click handler - handles the input fields and
    // updates the DOM with new employees
    $(document).on('click', '#button-add-employee', submitHandler)
}


// --------------------------------
// Function that takes in the input values, validates
// the information, and updates the table and running
// total of salaries.
function submitHandler() {

    console.log('Made it to the `submitHandler`')
}