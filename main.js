console.log('hello')

var tbody = document.querySelector('tbody');
var btn = document.querySelector('button');
var expName = document.querySelector('input[name="exp-name"]');
var expAmount = document.querySelector('input[name="exp-amount"]');

var handleClick = function(evt){
  //prevents form from making an http request.
  evt.preventDefault();
  var expense = getValues();
  var row = renderRow(expense.name,expense.amount);
  tbody.appendChild(row);
  clearInputs();
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
  var val = parseFloat(expAmount.value);

  return {
    name: expName.value,
    value: val
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
