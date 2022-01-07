const type = document.querySelector('#type')
const inputStoreName = document.querySelector('#storeName')
const inputDate = document.querySelector('#date')
const inputAmount = document.querySelector('#amount')
const dataContainer = document.querySelector('#data-container')
const button = document.querySelector('#button')

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
            <td>${inputStoreName.value}</td>
            <td>${inputDate.value}</td>
            <td>${inputAmount.value}</td>
            <td><button class="close">x</button></td>`;
        dataContainer.appendChild(tableRow)
        saveType(dataType);
        saveStoreName(inputStoreName.value);
        saveAmount(inputAmount.value);
        saveDate(inputDate.value);
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
function saveStoreName(storeName) {
    // check // do I already have things in there?
    let storeNames;
    if (localStorage.getItem("storeName") === null) {
        storeNames = [];
    } else {
        storeNames= JSON.parse(localStorage.getItem("storeName"));
    }
    storeNames.push(storeName);
    localStorage.setItem("storeName", JSON.stringify(storeNames));
}
function saveAmount(amount) {
    // check // do I already have things in there?
    let amounts;
    if (localStorage.getItem("amount") === null) {
        amounts = [];
    } else {
        amounts= JSON.parse(localStorage.getItem("amount"));
    }
    amounts.push(amount);
    localStorage.setItem("amount", JSON.stringify(amounts));
}
function saveDate(date) {
    // check // do I already have things in there?
    let dates;
    if (localStorage.getItem("date") === null) {
        dates = [];
    } else {
        dates= JSON.parse(localStorage.getItem("date"));
    }
    dates.push(date);
    localStorage.setItem("date", JSON.stringify(dates));
}

function getTodos(){
    let todos;
    let storeNames;
    let amounts;
    let dates;
    if (
        localStorage.getItem("type") === null ||
        localStorage.getItem("storeName") === null ||
        localStorage.getItem("amount") === null ||
        localStorage.getItem("date") === null
    ) {
        todos = [];
        storeNames = [];
        amounts = [];
        dates = [];
    } else {
        todos = JSON.parse(localStorage.getItem("type"));
        storeNames = JSON.parse(localStorage.getItem("storeName"));
        amounts = JSON.parse(localStorage.getItem("amount"));
        dates = JSON.parse(localStorage.getItem("date"));
    }
    todos.forEach(function(todo){
        var tableRow = document.createElement("tr");
        tableRow.classList.add('row')
        tableRow.innerHTML = `        <td>${todo}</td>
                <td>${storeNames}</td>
                <td>${dates}</td>
                <td>${amounts}</td>
                <td><button class="close">x</button></td>`;
        dataContainer.appendChild(tableRow);
    })
}
