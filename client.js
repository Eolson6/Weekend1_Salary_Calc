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

//creat array to store salary data
let monthlyExpenseData = [];

//init jquery
$(document).ready(function(){

    $( '#submitButton' ).on( 'click', updateEmployeeList, ); 
    $('#submitButton').on('click', calcMonthlySalary); 
    $("p").click(function(){
        $(this).remove();
    });

$('.input-forms').css('float');

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
    let monthlySal = annualSalaryIn /12; 
    let monthlySalary = monthlySal.toFixed(2);
    

    //test to make sure variables and functions work
    console.log('employee annualSalaryIn:', annualSalaryIn);
    console.log('employee monthly salary:', monthlySalary);
    
    //create new variable for employee information string
    let addEmployee = new Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn, parseInt(monthlySalary));
    monthlyExpenseData.push( addEmployee );

   let newEmployee =( firstNameIn + ' ' + lastNameIn + ' ' + idNumberIn 
    + ' ' + jobTitleIn + ' ' + '$'+parseInt(annualSalaryIn ));
   
    //test: console.log( 'showing', newEmployee);

    //append employeelist to html 
    $('#employeeList').append('<p>' + newEmployee + '</p>');

    //push employee monthly data to monthly expense array
   // monthlyExpenseData.push( monthlySalary);
   $('#firstNameIn').empty('First Name');
    $('#lastNameIn').empty();
    $('#idNumberIn').val();
    $('#jobTitleIn').val();
    $('#annualSalaryIn').val();
    
    //verify pushing correct value console.log('individual monthly salary:', parseInt([monthlyExpenseData]));
    //parseInt([monthlyExpenseData]);

} //end updateEmployeeList
   
function calcMonthlySalary() {
    //clear out prior data
    
    //create for loop to go through array to add monthly salaries to 
    //total out total monthly salaries
    let totalSalary = 0;
        for (employee of monthlyExpenseData) {
            console.log( employee);
            
            
        //     //turn string into a number
            totalSalary += parseInt((employee.AnnualSalary/12));
        //     //verify for loop is working as expected
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

        // }
        
        //append salary to Dom
            $('#monthly-expenses-output').empty();
    $('#monthly-expenses-output').append('<h4>' + 'Monthly Salary Expenses:' +Number(totalSalary).toFixed(2) + '</h4>');
    }
}



    

    
        



    
   

    
  

