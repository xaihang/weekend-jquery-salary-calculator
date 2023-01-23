
# Salary Calculator

## Description

The application gathers information from employees, such as their names, ID numbers, job titles, and annual salaries. When an employee is added to the database, their information is displayed in a table on the browser. If an employee is removed, a "delete" button is available for each employee. The total monthly salary for all employees is also displayed on the browser, and if it exceeds $20,000, the background color of the total monthly cost will turn red. 


## Tools and methods used in this application:
* HTML
* JavaScript
* jQuery 

## Challenges and solutions
* Formatting the annual salary from number value to currency by using the Intl.NumberFormat() method
* Refactoring the render() and onDeleteEmployee() to include .data() method - which is use to attach and store data on elements in a webpage, which can be accessed and manipulated later on.


## CSS styling
* Button: hoover - when hoovered over the buttons it will change color. Additional shadow for backdrop. 
* Background color for general overall, change font color
* Table row, when adding employee to the row, every other one will change color 


-----------
## Deployed link: [click here!](https://xaihang.github.io/weekend-jquery-salary-calculator/)


### Wireframe 
![todo list app demo image](./salary-calculator-demo.png)


My notes can be found [here](https://github.com/xaihang/weekend-jquery-salary-calculator/blob/main/note.txt).

Instructions can be found [here](https://github.com/xaihang/weekend-jquery-salary-calculator/blob/main/INSTRUCTIONS.md).