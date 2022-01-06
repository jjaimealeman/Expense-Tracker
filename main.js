const type = document.querySelector('#type')
const button = document.querySelector('#button')
const dataContainer = document.querySelector('#data-container')
const inputName = document.querySelector('#name')
const inputDate = document.querySelector('#date')
const inputAmount = document.querySelector('#amount')

document.addEventListener('DOMContentLoaded', getTodos)


button.addEventListener('click', function(){
    // const text = "hi"
    // dataContainer.innerHTML = text
if (inputAmount.value === "" || inputDate.value === "" ) {
  alert("must type in amount");
} else {
const dataType = type.options[type.selectedIndex].text;


var tableRow = document.createElement('tr')
tableRow.innerHTML = `        <td>${dataType}</td>
         <td>${inputName.value}</td>
          <td>${inputDate.value}</td>
          <td>${inputAmount.value}</td>
          <td><button class="close">x</button></td>`;

dataContainer.appendChild(tableRow)
saveType(dataType);
saveName(inputName.value);
// saveLocal(inputDate.value);
// saveLocal(inputAmount.value);



}

tableRow.addEventListener('click', function(e){
const item = e.target
if(item.classList.contains('close')){
    tableRow.remove()
}
})
})
function saveType(todo) {
  // check // do I already have things in there?
  let todos;
  if (localStorage.getItem("type") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("type"));
  }

  todos.push(todo);
  localStorage.setItem("type", JSON.stringify(todos));
}
function saveName(name) {
  // check // do I already have things in there?
  let names;
  if (localStorage.getItem("name") === null) {
    names = [];
  } else {
    names= JSON.parse(localStorage.getItem("name"));
  }

  names.push(name);
  localStorage.setItem("name", JSON.stringify(names));
}


function getTodos(){
    let todos;
    let names;
  if (
    localStorage.getItem("type") === null ||
    localStorage.getItem("name") === null
  ) {
    todos = [];
    names = [];
  } else {
    todos = JSON.parse(localStorage.getItem("type"));
    names = JSON.parse(localStorage.getItem("name"));
  }
todos.forEach(function(todo){

  var tableRow = document.createElement("tr");
  tableRow.classList.add('row')
  tableRow.innerHTML = `        <td>${todo}</td>
         <td>${inputName.value}</td>
          <td>${inputDate.value}</td>
          <td>${inputAmount.value}</td>
          <td><button class="close">x</button></td>`;

  dataContainer.appendChild(tableRow);


  })

}


