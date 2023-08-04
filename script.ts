const myForm = document.querySelector("#myForm") as HTMLFormElement;
const inputType = document.querySelector("#input-type") as HTMLSelectElement;
const inputName = document.querySelector("#input-name") as HTMLInputElement;
const inputAmount = document.querySelector("#input-amount") as HTMLInputElement;
const inputDate = document.querySelector("#input-date") as HTMLInputElement;
const inputDetails = document.querySelector("#input-details") as HTMLInputElement;
const expenseList = document.querySelector(".expense-list") as HTMLUListElement;
const incomeList = document.querySelector(".income-list") as HTMLUListElement;

interface Tracker{
    name:string,
    amount:number,
    date:string,
    details:string,
}

const listsEx:Tracker[]=[];
const listsIn:Tracker[]=[];

function displayExpenses(){
    expenseList.innerHTML="";
    listsEx.forEach((data) =>{
        const liEx = document.createElement("li");
        liEx.innerHTML = `${data.name} - Rp. ${data.amount} at ${data.date}  ${data.details}`;
        expenseList.appendChild(liEx);
    })
}

function displayIncomes(){
    incomeList.innerHTML="";
    listsIn.forEach((data) =>{
        const liIn = document.createElement("li");
        liIn.innerHTML = `${data.name} - Rp. ${data.amount} at ${data.date}  ${data.details}`;
        incomeList.appendChild(liIn);
    })
}

myForm.addEventListener("submit", () =>{
    const typeValue = inputType.value;
    const nameValue = inputName.value;
    const amountValue = Number(inputAmount.value);
    const dateValue = inputDate.value;
    const detailsValue = inputDetails.value;

    if(nameValue && amountValue && dateValue){
        const newTracker: Tracker = {
            name:nameValue,
            amount:amountValue,
            date:dateValue,
            details:detailsValue,
        }
        
        if(typeValue == "expense"){
            listsEx.push(newTracker);
            displayExpenses();
            const headEx = document.querySelector("#heading-expense") as HTMLHeadingElement;
            headEx.style.display = "block";
        }
        else{
            listsIn.push(newTracker);
            displayIncomes();
            const headIn = document.querySelector("#heading-income") as HTMLHeadingElement;
            headIn.style.display = "block";
        }
        
        inputType.value="expense";
        inputName.value="";
        inputAmount.value="";
        inputDate.value="";
        inputDetails.value="";
    }
    else if(nameValue == ""){
        alert("Input the name!")
    }
    else if(amountValue == 0){
        alert("Input the amount!")
    }
    else if(dateValue == ""){
        alert("Input the date!")
    }
})
