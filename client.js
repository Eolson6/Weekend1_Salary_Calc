console.log('js');

//create blue print to take in employee data
class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.first = firstName;
        this.last = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.AnnualSalary = annualSalary;
    } //end constructor
} // end employee Class
let employeeData = []; // store new employee data

$(document).ready(function () { //init jquery
    $('#submitButton').on('click', updateEmployeeList); //on submit click, run " "
    $('#submitButton').on('click', calcMonthlySalary);  // on submit click, run " 
    $('#deleteButton').on('click', deleteLastEmployee); //on delete click, run ""
    $('#deleteButton').on('click', findandRemove); //on delete click run " ""

}); // end ready now function

function updateEmployeeList() {
    $('#EmployeeList').val();  //clear out data

    //create variables from input fields
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = ($('#annualSalaryIn').val());

    //test to verify function works as expected
    console.log('employee annualSalaryIn:', annualSalaryIn);

    //create new employee object from class constructor 
    let addEmployee = new Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    // push new Employee into employee data array
    employeeData.push(addEmployee);

    //create variable for output/appending to HTML
    //did not use once I created a table but did not delete in case it was needed in the future
    let newEmployee = (firstNameIn + ' ' + lastNameIn + ' ' + idNumberIn
        + ' ' + jobTitleIn + ' ' + '$' + annualSalaryIn);

    //test: console.log( 'showing', newEmployee);

    //append new employee info to html 
    // $('#employeeList').append('<p>' + newEmployee + '</p>');
    $('#name-output').append('<p>' + firstNameIn + ' ' + lastNameIn + '</p>');
    $('#idNumber-output').append('<p>' + idNumberIn + '</p>');
    $('#job-title-output').append('<p>' + jobTitleIn + '</p>');
    $('#annual-salary-output').append('<p>' + '$' + annualSalaryIn + '</p>');

    //return input fields to original placeholder text
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

} //end updateEmployeeList

function calcMonthlySalary() {

    let totalSalary = 0;
    for (employee of employeeData) { //run for of to gather individual salary data
        console.log(employee);
        totalSalary += employee.AnnualSalary / 12; //gather total monthly salary data
        //verify for loop is working as expected
        console.log('total monthly salary:', totalSalary.toFixed(2));
        if (totalSalary <= 20000) { //if monthly salary expense is less than 20000, text black
            $('#monthly-expenses-output').css('color', 'black');
            // else, monthly salary expense is more than 20000, show text red
        } else {
            $('#monthly-expenses-output').css('color', 'red');
        }
        $('#monthly-expenses-output').empty(); //clear out prior data
        //append salary to Dom
        $('#monthly-expenses-output').append('<h4>' + 'Monthly Salary Expenses:' + ' ' + '$' + (totalSalary).toFixed(2) + '</h4>');
    }
}

function deleteLastEmployee() {
    console.log('in delete');
    $("p:last-child").remove(); // removes most recent employee text string

}


function findandRemove() {
    employeeData.pop(); //removes most recent added employee to array
    //noticed data for last employee wasn't being cleared out after text string was cleared out
    //created forloop to clear out data if the delete button is clicked with only one employee left
    if (employeeData.length <= 0) { //if array has 1 or less employees in it, then
        employeeData = []; //clear out array if there is only 1 employee left that is being deleted
        totalSalary = 0 //zero out total salaries
        calcMonthlySalary(totalSalary); //push into calcmonthlysalary function 
        $('#monthly-expenses-output').html('<h4>' + 'Monthly Salary Expenses:'
            + ' ' + '$' + (totalSalary).toFixed(2) + '</h4>'); //append html to reflect new salary 
        // 
    } else {

        calcMonthlySalary(); //run calcmonthlysalary to update data
    }




}








