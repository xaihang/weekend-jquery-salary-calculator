$(document).ready(onReady);

// STATE
let employees = [{firstName: 'Jen', lastName: 'Barber', idNumber: 4521, title: 'Team Lead', annualSalary: 80000},
    {firstName: 'Maurice', lastName: 'Moss', idNumber: 8724, title: 'Support Team', annualSalary: 58000},
    {firstName: 'Roy', lastName: 'Smith', idNumber: 9623, title: 'Quality Assurance', annualSalary: 48000}];

function onReady() {
    render();
    // handle displaying the new employee's input on DOM
    $('#addEmployeeForm').on('submit', onAddEmployee)
    // handle removing employee from DOM
    $(document).on('click', '.deleteBtn', onDeleteEmployee);

    $('#totalMonthlySalary').val(onCalculateTotalMonthlySalary());


};

// 
function render() {
    // empty() remove all the previous data and only show the current data
    $('#employee-table').empty();

 // update employee's inputs:   
    for (let employee of employees) {
        $('#employee-table').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
    `)
    console.log('for each employee..', employee);
    }



};

// add employee's inputs to the database:
function onAddEmployee(event) {
    event.preventDefault(); 

    let newEmployee = {
        firstName: $('#firstNameInput').val(), 
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idNumberInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    employees.push(newEmployee);
    render(); 
};

// delete employee when delete btn is clicked
function onDeleteEmployee() {
    let currentTableRow= $(this).parent().parent();
    let indexOfEmployee = currentTableRow.index();
    employees.splice(indexOfEmployee, 1);

    console.log('employee after removal', employees);

    render(); 
};

function onCalculateTotalMonthlySalary() {
    render(); 

    let totalAnnualSalary = 0;
    for (let employee of employees) {
        totalAnnualSalary += employee.annualSalary;

        console.log('for each employee ANNUAL $$$..', employee);
    }

    let totalMonthlySalary = totalAnnualSalary / 12; 
    return totalMonthlySalary; 
};