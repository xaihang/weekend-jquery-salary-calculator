
# Salary Calculator

## Description

The application allows the user to input employee information including first name, last name, ID number, job title, and annual salary. When an employee is added by submitting the form, their information is displayed in a table format on the webpage. Each employee also has a "delete" button available for use. As employees are added or removed, the application calculates the total monthly cost of all employee's annual salary and displays it beneath the table. If this total exceeds $20,000.00, the background color of the total monthly cost will change to red. 

**TABLE OF CONTENT:**
1. [Tools](#tools) 
1. [Challenge and solutions](#challenges-and-solutions)
1. [CSS and Styling](#css-and-styling) 
1. [Links](#links)
1. [Wireframe](#wireframe) 

## Tools 
* HTML
* CSS 
* JavaScript
* jQuery 

## Challenges and solutions
* Formatting the annual salary from number value to currency by using the Intl.NumberFormat() method
* Refactoring the render() and onDeleteEmployee() to include .data() method - which is use to attach and store data on elements in a webpage, which can be accessed and manipulated later on.
* To check if the monthly total salary is $20,000.00 or more and change the background color to 'red' if true. A function was created to handle this one task called 'checkTotalSalary' with if/else statements; depending on the valid situation it will add or remove the 'red' background - applied with the addClass() and removeClass() methods. Additional a  class selector 'over-budget' was dynamically added in the css stylesheet and bridge it into the JavaScript file to serve this purpose. 

## CSS and styling
* Button: hoover - when hoovered over the buttons it will change color. Additional shadow for backdrop. 
* Background color for general overall, change font color and size
* Table row, when adding employee to the row, every other one will change color 


-----------
## Links
> Deployed link: [click here!](https://xaihang.github.io/weekend-jquery-salary-calculator/)

> My notes can be found [here](https://github.com/xaihang/weekend-jquery-salary-calculator/blob/main/note.txt).

> Instructions can be found [here](https://github.com/xaihang/weekend-jquery-salary-calculator/blob/main/INSTRUCTIONS.md).

### Wireframe 
![todo list app demo image](./salary-calculator-demo.png)

> *"Every day is a learning day."*

