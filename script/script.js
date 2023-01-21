$(document).ready(onReady);

// form:
//          #addEmployeeForm
    // inputs:
    //          #firstNameInput  
    //          #lastNameInput 
    //          #idNumberInput 
    //          #jobTitleInput 
    //          #annualSalaryInput 
    //          #submit    

// table body <tbody>
//          #employee-table


// STATE
let employees = [{firstName: 'Jen', lastName: 'Barber', idNumber: 4521, jobTitle: 'Team Lead', annualSalary: 80000},
    {firstName: 'Maurice', lastName: 'Moss', idNumber: 8724, jobTitle: 'Support Team', annualSalary: 58000},
    {firstName: 'Roy', lastName: 'Smith', idNumber: 9623, jobTitle: 'Quality Assurance', annualSalary: 48000}];

function onReady() {
    render();
    // handle displaying the new employee's input on DOM
    $('#submit').click(submitEmployee);
    // handle removing employee from DOM
    $(document).click('.deleteBtn', onDeleteEmployee);

}

function render() {
 
 // update the employee's inputs:   
    for (let employee of employees) {
        console.log('for each employee...', employee.firstName);
        $('#cat-table').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
    `)
    }
}

// add employee's inputs to the database:
function submitEmployee(event) {
    event.preventDefault(); 

    let newEmployee = {
        firstName: $('#firstNameInput').val(), 
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idNumberInput').val(),
        jobTitleInput: $('#jobTitleInput').val(),
        annualSalaryInput: $('#annualSalaryInput').val()
    }
console.log('new employee:', newEmployee);
    employees.push(newEmployee);
    render(); 
}

function onDeleteEmployee() {
    let currentTableRow= $(this).parent().parent();
    let indexOfEmployee = currentTableRow.index();
    console.log('indexOfEmployee', indexOfEmployee);
}