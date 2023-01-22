$(document).ready(onReady);

let employees = [{firstName: 'Jen', lastName: 'Barber', idNumber: 4521, title: 'Team Lead', annualSalary: 80000},
    {firstName: 'Maurice', lastName: 'Moss', idNumber: 8724, title: 'Support Team', annualSalary: 58000},
    {firstName: 'Roy', lastName: 'Smith', idNumber: 9623, title: 'Quality Assurance', annualSalary: 48000}];

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    useGrouping: true
});

function onReady() {
    render();
    // handle displaying the new employee's input on DOM
    $('#addEmployeeForm').on('submit', onAddEmployee);

    // handle removing employee from DOM
    $(document).on('click', '.deleteBtn', onDeleteEmployee);

    //handle displaying monthly total cost for all employees
    let totalMonthlySalary = onCalculateTotalMonthlySalary();
    $('#totalMonthlySalary').text('Monthly Total: ' + formatter.format(totalMonthlySalary));
    console.log('in onReady function:.....$', totalMonthlySalary);
};

// ORIGINAL CODE 
// function render() {
//     // empty() remove all the previous data and only show the current data
//     $('#employee-table').empty();

//  // update employee's inputs:   
//     for (let employee of employees) {
//         let annualSalaryFormatted = formatter.format(employee.annualSalary);
//         $('#employee-table').append(`
//         <tr>
//             <td>${employee.firstName}</td>
//             <td>${employee.lastName}</td>
//             <td>${employee.idNumber}</td>
//             <td>${employee.title}</td>
//             <td>${annualSalaryFormatted}</td>
//             <td>
//                 <button class="deleteBtn">Delete</button>
//             </td>
//         </tr>
//     `)
//     console.log('in render for each employee...', employee);
//     }
// };

// ⚡️ refactoring with .data() method:
function render() {
    $('#employee-table').empty();
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let annualSalaryFormatted = formatter.format(employee.annualSalary);
        let row = $('<tr style="text-align:center">')
            .append(`<td>${employee.firstName}</td>`)
            .append(`<td>${employee.lastName}</td>`)
            .append(`<td>${employee.idNumber}</td>`)
            .append(`<td>${employee.title}</td>`)
            .append(`<td>${annualSalaryFormatted}</td>`)
            .append(`<td><button class="deleteBtn">Delete</button></td>`)
            .data('index', i);
        $('#employee-table').append(row);
        console.log('in render for each employee...', employee);
    } 
}
checkTotalSalary
// add employee's inputs to the database:
function onAddEmployee(event) {
    event.preventDefault(); 

    let newEmployee = {
        firstName: $('#firstNameInput').val(), 
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idNumberInput').val(),
        title: $('#titleInput').val(),
        annualSalary: parseFloat($('#annualSalaryInput').val())
    }
    employees.push(newEmployee);

    let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
    updateTotalMonthlySalary(totalMonthlySalary);
    checkTotalSalary(totalMonthlySalary);

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


// ORIGINAL code 
// function onDeleteEmployee() {
//     let currentTableRow= $(this).parent().parent();
//     let indexOfEmployee = currentTableRow.index();
//     employees.splice(indexOfEmployee, 1);

//     let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
//     updateTotalMonthlySalary(totalMonthlySalary);

//     checkTotalSalary(totalMonthlySalary);

//     console.log('employee after removal', indexOfEmployee);
//     render(); 
// };


// ⚡️ refactoring onDeleteEmployee() to include .data() method:
function onDeleteEmployee() {
    let currentTableRow = $(this).parent().parent();
    let indexOfEmployee = currentTableRow.data('index');
    employees.splice(indexOfEmployee, 1);

    let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
    updateTotalMonthlySalary(totalMonthlySalary);

    render();
}


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
    let totalSalaryFormatted = formatter.format(totalMonthlySalary);
    $('#totalMonthlySalary').text('Monthly Total: ' + totalSalaryFormatted);
    checkTotalSalary(totalMonthlySalary);
};

function checkTotalSalary(total) {
    if(total >= 20000) {
        $('.total-monthly-salary').addClass('over-budget');
    } else {
        $('.total-monthly-salary').removeClass('over-budget');
    }
};