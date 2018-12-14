console.log('js');

$(document).ready(function(){

    $( '#submitButton' ).on( 'click', updateEmployeeList );

    let firstNameIn = $('#firstNameIn').val();
    let LastNameIn = $('#lastNameIn').val();
    let idNumberIn = $('#idNumberIn').val();
    let jobTitleIn = $('#jobTitleIn').val();
    let annualSalaryIn = $('#annualSalaryIn').val();
    
    function updateEmployeeList (){
        let firstNameIn = $('#firstNameIn').val();
        let lastNameIn = $('#lastNameIn').val();
        let idNumberIn = $('#idNumberIn').val();
        let jobTitleIn = $('#jobTitleIn').val();
        let annualSalaryIn = $('#annualSalaryIn').val();

        let newEmployee = ( firstNameIn + ' ' + lastNameIn + ' ' + idNumberIn 
        + ' ' + jobTitleIn + ' ' + annualSalaryIn );


        console.log( 'showing', newEmployee);

    $('#employeeList').append('<h4>' + newEmployee + '</h4>');

    return annualSalaryIn;

    

    }

    let monthlycost = annualSalaryIn
    function (monthlyExpense) {

    }
    

    
  
   

})