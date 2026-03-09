document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("reset").addEventListener("click", resetData);

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("input", calculate);
    input.addEventListener("input", saveData);

});

loadData();


function calculate() {

    let income = Number(document.getElementById("income").value);
    let expenses = Number(document.getElementById("expenses").value);
    let debts = Number(document.getElementById("debts").value);
    let assets = Number(document.getElementById("assets").value);

    let balance = income - expenses;
    let networth = assets - debts;

    document.getElementById("balance").innerText = "£" + balance;
    document.getElementById("networth").innerText = "£" + networth;

}


function saveData() {

    localStorage.setItem("income", document.getElementById("income").value);
    localStorage.setItem("expenses", document.getElementById("expenses").value);
    localStorage.setItem("debts", document.getElementById("debts").value);
    localStorage.setItem("assets", document.getElementById("assets").value);

}


function loadData() {

    document.getElementById("income").value = localStorage.getItem("income") || "";
    document.getElementById("expenses").value = localStorage.getItem("expenses") || "";
    document.getElementById("debts").value = localStorage.getItem("debts") || "";
    document.getElementById("assets").value = localStorage.getItem("assets") || "";

    calculate();

}


function resetData() {

    localStorage.clear();

    document.getElementById("income").value = "";
    document.getElementById("expenses").value = "";
    document.getElementById("debts").value = "";
    document.getElementById("assets").value = "";

    calculate();

}