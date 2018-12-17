console.log('js');

class Employee {
    constructor ( firstName, lastName, idNumber, jobTitle, annualSalary ) {
    this.first = firstName;
    this.last = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.AnnualSalary = annualSalary;
    } //end constructor
} // end employee Class
let employeeData = []; // store new employee data

$(document).ready(function () { //init jquery
    $( '#submitButton' ).on( 'click', updateEmployeeList ); //on click, run " "
    $('#submitButton').on('click', calcMonthlySalary);  // on click, run " 
    $('#deleteButton').on('click', deleteLastEmployee); //on click, run ""
    $('#deleteButton').on('click', findandRemove);

}); // end ready now function

function updateEmployeeList (){
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
    employeeData.push( addEmployee ); // push new Employee into employee data array

    //create variable for output/appending to HTML
   let newEmployee =( firstNameIn + ' ' + lastNameIn + ' ' + idNumberIn 
    + ' ' + jobTitleIn + ' ' + '$'+annualSalaryIn );
   
    //test: console.log( 'showing', newEmployee);

    //append new employee info to html 
    // $('#employeeList').append('<p>' + newEmployee + '</p>');
    $('#name-output').append('<p>' + firstNameIn + ' ' + lastNameIn + '</p>');
    $('#idNumber-output').append('<p>' + idNumberIn + '</p>');
    $('#job-title-output').append('<p>' + jobTitleIn + '</p>');
    $('#annual-salary-output').append('<p>' + '$' + annualSalaryIn + '</p>');





   $('#firstNameIn').val( '');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

} //end updateEmployeeList
   
function calcMonthlySalary() {

    let totalSalary = 0;
        for (employee of employeeData) { //run for of to gather individual salary data
            console.log( employee);
            totalSalary += employee.AnnualSalary/12; //gather total monthly salary data
             //verify for loop is working as expected
           console.log('total monthly salary:',totalSalary.toFixed(2));
            if (totalSalary <= 20000) { //if monthly salary expense is less than 20000, text black
              $('#monthly-expenses-output').css('color', 'black');
            // else, monthly salary expense is more than 20000, show text red
          } else {
              $('#monthly-expenses-output').css('color', 'red');
          }
        
            $('#monthly-expenses-output').empty(); //clear out prior data
            //append salary to Dom
    $('#monthly-expenses-output').append('<h4>' + 'Monthly Salary Expenses:'+ ' ' +'$'+(totalSalary).toFixed(2) + '</h4>');
    }
}

function deleteLastEmployee(){
    console.log('in delete');
    $("p:last-child").remove(); // removes most resent employee text string
    
}


function findandRemove () {
employeeData.pop(); //removes most recent added employee to array
    if ( employeeData.length <=0 ) {
       employeeData = [];
       totalSalary=0
       calcMonthlySalary(totalSalary);
        $('#monthly-expenses-output').html('<h4>' + 'Monthly Salary Expenses:' 
        + ' ' + '$' + (totalSalary).toFixed(2) + '</h4>');
        // alert("*Warning* Refresh Screen to start over and continue");
    } else {
    
calcMonthlySalary(); //run calcmonthlysalary to update data
    }




}

   


    
   

    
  