var expenseCounter = function(num){

}

var createRow = function(name, num){

    if (name !== '' && num !== ''){
    var newTableRow = document.createElement('tr');
    mainTable.appendChild(newTableRow);
    var newTableData = document.createElement('td');
    newTableRow.appendChild(newTableData);
    var newTableData2 = document.createElement('td');
    newTableRow.appendChild(newTableData2);
    var newTableData3 = document.createElement('td');
    newTableRow.appendChild(newTableData3);
    var deleteButton = document.createElement('div');
    deleteButton.setAttribute('class','delete');
    newTableData3.appendChild(deleteButton);
    deleteButton.innerHTML = 'Delete';
    //created new table row of data entries
    newTableData.textContent = name;
    newTableData2.textContent = num;

    expenseCounter(num);

    }
    else {
      alert("Please input a an Expense name and an Expense amount.");
    }

}

var count;
var addButton = document.querySelector('button');
var mainTable = document.querySelector('table');
var addExpenseButton = document.querySelector('button');
var inputName = document.querySelectorAll('input')[0];
var inputAmount = document.querySelectorAll('input')[1];
var form = document.querySelector('#form');

//form.addEventListener('keyup', function(){
//  if(event.keyCode === 13){
//    if(inputName.value !== ''){
//      inputExpenseName(inputName.value);
//      inputName.value = '';
//    } else if (inputAmount.value !== ''){
//        inputAmount.value = '';
//          event.target.value = '';
//        }
//  }
//});

addButton.addEventListener('click', function(){
  createRow(inputName.value,inputAmount.value);


  inputName.value  = '';
  inputAmount.value = '';
})
