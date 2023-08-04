"use strict";
const myForm = document.querySelector("#myForm");
const inputType = document.querySelector("#input-type");
const inputName = document.querySelector("#input-name");
const inputAmount = document.querySelector("#input-amount");
const inputDate = document.querySelector("#input-date");
const inputDetails = document.querySelector("#input-details");
const expenseList = document.querySelector(".expense-list");
const incomeList = document.querySelector(".income-list");
const listsEx = [];
const listsIn = [];
function displayExpenses() {
    expenseList.innerHTML = "";
    listsEx.forEach((data) => {
        const liEx = document.createElement("li");
        liEx.innerHTML = `${data.name} - Rp. ${data.amount} at ${data.date}  ${data.details}`;
        expenseList.appendChild(liEx);
    });
}
function displayIncomes() {
    incomeList.innerHTML = "";
    listsIn.forEach((data) => {
        const liIn = document.createElement("li");
        liIn.innerHTML = `${data.name} - Rp. ${data.amount} at ${data.date}  ${data.details}`;
        incomeList.appendChild(liIn);
    });
}
myForm.addEventListener("submit", () => {
    const typeValue = inputType.value;
    const nameValue = inputName.value;
    const amountValue = Number(inputAmount.value);
    const dateValue = inputDate.value;
    const detailsValue = inputDetails.value;
    if (nameValue && amountValue && dateValue) {
        const newTracker = {
            name: nameValue,
            amount: amountValue,
            date: dateValue,
            details: detailsValue,
        };
        if (typeValue == "expense") {
            listsEx.push(newTracker);
            displayExpenses();
            const headEx = document.querySelector("#heading-expense");
            headEx.style.display = "block";
        }
        else {
            listsIn.push(newTracker);
            displayIncomes();
            const headIn = document.querySelector("#heading-income");
            headIn.style.display = "block";
        }
        inputType.value = "expense";
        inputName.value = "";
        inputAmount.value = "";
        inputDate.value = "";
        inputDetails.value = "";
    }
    else if (nameValue == "") {
        alert("Input the name!");
    }
    else if (amountValue == 0) {
        alert("Input the amount!");
    }
    else if (dateValue == "") {
        alert("Input the date!");
    }
});
