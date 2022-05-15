console.log('Heyo')

// --------------------------------
// Global variables
let employees = []


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

    // Create an object to store one employee's information
    let employee = {
        nameFirst: validateInput('#name-first', 'string'),
        nameLast: validateInput('#name-last', 'string'),
        id: validateInput('#id-number', 'integer'),
        jobTitle: validateInput('#job-title', 'string'),
        annualSalary: validateInput('#annual-salary', 'float'),
    }
    console.log(employee, 'employee')

    // Add to the global `employees` array
    employees.push(employee)

    console.log(employees, '????/')
}


// Function that pulls in the specific element and
// validates it based on its expected type of data.
function validateInput(field, fieldType) {

    // Get the specified element from the DOM
    let inputItem = $(field).val()

    // Check the type of value the input should be converted
    // to and treated as.
    switch (fieldType) {
        case 'float':
            console.log('Check as a number')
            inputItem = validateFloat(field, inputItem)
            break
        case 'integer':
            console.log('Check as a integer')
            inputItem = validateInteger(field, inputItem)
            break
        // String values can be skipped
        default:
            break
    }

    return inputItem
}


// Function that checks if the inputItem is an integer
function validateInteger(field, inputItem) {

    // Check if `inputItem` is NOT an integer
    if (! // Set a `NOT` operator, meaning the value is
          // __NOT__ an integer
        (
            // These operations check if the `inputItem` is an integer.
            // REF: https://stackoverflow.com/a/14794066
            !isNaN(inputItem) && 
            parseInt(Number(inputItem)) == inputItem && 
            !isNaN(parseInt(inputItem, 10))
        )
    ) {
        console.log('not an int')
        
        // Remove the input and add a new CSS class to show
        // the error visually
        $(field)
            .addClass('input-error')
            .val('')

        // Return a blank value
        return ''
    }

    // Otherwise, ensure the error CSS field is removed (if it exists)
    $(field)
        .removeClass('input-error')
    
    // Return the integer value
    return inputItem
}


// Function that checks if the inputItem is an integer
function validateFloat(field, inputItem) {

    // In case anyone entered the `$` or a comma, remove them.
    inputItem = inputItem.replace('$', '').replace(',', '')

    // Check if `inputItem` __IS__ a valid float
    if (
        (inputItem !== undefined) &&
        (!isNaN(inputItem))
    ) {

        // A valid float-number has been found.
        // Remove any error classes if they exist
        $(field)
            .removeClass('input-error')

        // Return the float value
        return inputItem
    }

    // Otherwise, the input was not a float.
    // Add an error flag to the class.
    $(field)
        .addClass('input-error')
        .val('')

    // Return a blank value
    return ''
}