console.log('js');

//creat array to store salary data
let monthlyExpenseData = [];

//init jquery
$(document).ready(function(){

    $( '#submitButton' ).on( 'click', updateEmployeeList, ); 
    $('#submitButton').on('click', calcMonthlySalary); 

}); // end ready now function
    
function updateEmployeeList (){
    //clear out data
    $('#EmployeeList').empty();
    
    //create variables for later use
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = parseInt($('#annualSalaryIn').val());
    let monthlySalary = ( annualSalaryIn/12 );

    //test to make sure variables and functions work
    console.log('employee annualSalaryIn:', annualSalaryIn);
    console.log('employee monthly salary:', monthlySalary);
    
    //create new variable for employee information string
    let newEmployee = ( firstNameIn + ' ' + lastNameIn + ' ' + idNumberIn 
    + ' ' + jobTitleIn + ' ' + parseInt(annualSalaryIn ));
   
    //test: console.log( 'showing', newEmployee);

    //append employeelist to html 
    $('#employeeList').append('<h4>' + newEmployee + '</h4>');

    //push employee monthly data to monthly expense array
    monthlyExpenseData.push( monthlySalary);
    
    //verify pushing correct value console.log('individual monthly salary:', parseInt([monthlyExpenseData]));
    //parseInt([monthlyExpenseData]);

} //end updateEmployeeList
   
function calcMonthlySalary() {
    //clear out prior data
    $('#monthly-expenses-output').empty();
    //create for loop to go through array to add monthly salaries to 
    //total out total monthly salaries
    let totalSalary = 0;
        for (let i = 0; i < monthlyExpenseData.length; i++) {
            //turn string into a number
            totalSalary += parseInt(monthlyExpenseData[i]);
            //verify for loop is working as expected
          console.log('total monthly salary:',totalSalary);
          //if totalSalary is less than 20000, text black
          if (totalSalary <= 20000) {
              $('#monthly-expenses-output').css('color', 'black');
            // else, totalSalary is more than 20000, text red
          } else {
              $('#monthly-expenses-output').css('color', 'red');
          }
        
        //    let monthlyExpense = totalSalary + monthlyExpenseData[i];
        //    console.log('total monthly expenses:', monthlyExpense);
           
            // let monthlyExpense = totalSalary + monthlyExpense;
            // console.log(monthlyExpense);

        }
        
        //append salary to Dom
    $('#monthly-expenses-output').append('<h4>' + 'Monthly Salary Expenses:' + totalSalary + '</h4>');
    }




    

    
        



    
   

    
  

