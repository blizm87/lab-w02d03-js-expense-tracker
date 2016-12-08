console.log('hello')

var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');
//we can name variables with dollar signs
//to communicate that its a DOM node
var $total = document.querySelector('.exp-total');
var expTotal = document.querySelector('.exp-total');
var total = 0;

var handleClick = function(evt){
  //prevents form from making an http request.
  evt.preventDefault();
  var expense = getValues();
  if (expense.name == '' || expense.amount == NaN){
    return false;
  }
  updateTotal(expense.amount);
  var row = renderRow(expense.name,expense.amount);
  tbody.appendChild(row);
  clearInputs();
}

var updateTotal = function(amount) {
  total += amount;
  expTotal.textContent = total;
}

btn.addEventListener('click', handleClick);
var input = document.querySelectorAll('input')[0];
var input2 = document.querySelectorAll('input')[1];


var renderRow = function(name, amount) {
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = name;
  tr.appendChild(td);
  td = document.createElement('td');
  td.textContent = amount;
  tr.appendChild(td);
  return tr;
}

var getValues = function() {
  var val = parseFloat(expAmount.value) || 0;

  return {
    name: expName.value,
    amount: val
  }
}

var clearInputs = function(){
  expAmount.value = '';
  expName.value = '';
}

var row = renderRow('coffee', '2.00');
tbody.appendChild(row);
row = renderRow('muffin','2.00');
tbody.appendChild(row);
