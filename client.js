console.log('js');

//creat array to store salary data
let monthlyExpenseData = [];

$(document).ready(function(){

    $( '#submitButton' ).on( 'click', updateEmployeeList, ); 
    $('#submitButton').on('click', calcMonthlySalary); 

}); // end ready now function
    
function updateEmployeeList (){
    //clear out daty
    $('#EmployeeList').empty();
    
    //create variables for later use
    let firstNameIn = $('#firstNameIn').val();
    let lastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = parseInt($('#annualSalaryIn').val());
    let monthlySalary = ( annualSalaryIn/12 );

     console.log('employee monthly salary:', monthlySalary);
    console.log('employee annualSalaryIn:', annualSalaryIn);
    

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
    }
   
function calcMonthlySalary() {
    $('#monthly-expenses-output').empty();
    //create for loop to go through array to add monthly salaries to 
    //total out total monthly salaries
    let totalSalary = 0;
        for (let i = 0; i < monthlyExpenseData.length; i++) {
         
            totalSalary += parseInt(monthlyExpenseData[i]);
          console.log('total monthly salary:',totalSalary);
          
          if (totalSalary <= 15000) {
              $('#monthly-expenses-output').css('color', 'black');
          } else {
              $('#monthly-expenses-output').css('color', 'red');
          }
        
        //    let monthlyExpense = totalSalary + monthlyExpenseData[i];
        //    console.log('total monthly expenses:', monthlyExpense);
           
            // let monthlyExpense = totalSalary + monthlyExpense;
            // console.log(monthlyExpense);

        }
        
    $('#monthly-expenses-output').append('<h4>' + 'Monthly Salary Expenses:' + totalSalary + '</h4>');
    }

// function calcMonthlySalary (annualSalaryIn){
//     let monthlySalary = parseInt(annualSalaryIn / 12);
//     console.log('monthly salary', monthlySalary);
//     return monthlySalary;
    
// }



    // console.log(updateMonthlyExpenses);

    // // function updateMonthlyExpenses(monthlySalary) {
    // //     let monthlyExpense;
    // //     monthlyExpense = monthlySalary + monthlyExpense;
    // //     console.log(monthlyExpense);
    // //     return monthlyExpense;
    // // }



    

    
        



    
   

    
  

