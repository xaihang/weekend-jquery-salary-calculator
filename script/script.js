$(document).ready(onReady);

// STATE
let employees = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        idNumber: 4521,
        jobTitle: 'Team Lead',
        annualSalary: 80000
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        idNumber: 8724,
        jobTitle: 'Support Team',
        annualSalary: 58000
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        idNumber: 9623,
        jobTitle: 'Quality Assurance',
        annualSalary: 48000
    }
];

function onReady() {
    console.log('document is ready!');
}
