$(document).ready(onReady);

// STATE
let employees = [{firstName: 'Jen', lastName: 'Barber', idNumber: 4521, title: 'Team Lead', annualSalary: 80000},
    {firstName: 'Maurice', lastName: 'Moss', idNumber: 8724, title: 'Support Team', annualSalary: 58000},
    {firstName: 'Roy', lastName: 'Smith', idNumber: 9623, title: 'Quality Assurance', annualSalary: 48000}];

function onReady() {
    render();
    // handle displaying the new employee's input on DOM
    $('#addEmployeeForm').on('submit', onAddEmployee);

    // handle removing employee from DOM
    $(document).on('click', '.deleteBtn', onDeleteEmployee);

    //handle displaying monthly total cost for all employees
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        useGrouping: true
      });
      let totalMonthlySalary = onCalculateTotalMonthlySalary();
      $('#totalMonthlySalary').text('Monthly Total: ' + formatter.format(totalMonthlySalary));

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
    console.log('in render for each employee...', employee);
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
        // annualSalary: $('#annualSalaryInput').val()
        annualSalary: parseFloat($('#annualSalaryInput').val())
    }
    employees.push(newEmployee);

    let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
    updateTotalMonthlySalary(totalMonthlySalary);

    console.log('onAddEmployee - new Employee:......', newEmployee);
    console.log('in onAddEmployee:', employees);

    // empty out the input field for the next employee's input 
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

    render(); 
};


// delete employee when delete btn is clicked
function onDeleteEmployee() {
    let currentTableRow= $(this).parent().parent();
    let indexOfEmployee = currentTableRow.index();
    employees.splice(indexOfEmployee, 1);

    let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
    updateTotalMonthlySalary(totalMonthlySalary);
    
    console.log('employee after removal', indexOfEmployee);
    render(); 
};


// calculate employees monthly salary total:
function onCalculateTotalMonthlySalary() {
    let totalAnnualSalary = 0;
    for (let employee of employees) {
        totalAnnualSalary += Number(employee.annualSalary);
    }

    let totalMonthlySalary = (totalAnnualSalary) / (12); 

    console.log('in onCalculateTotalMonthlySalary........', totalMonthlySalary);

    return totalMonthlySalary; 
};

function updateTotalMonthlySalary(totalMonthlySalary) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        useGrouping: true });
    $('#totalMonthlySalary').text('Monthly Total: ' + formatter.format(totalMonthlySalary));
};