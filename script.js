function updateNumber(inputId) {
    const ampuntInput = document.getElementById(inputId);
    const amountInputText = ampuntInput.value;
    const amountNumber = parseFloat(amountInputText);

    // for clear
    // ampuntInput.value = '';

    return amountNumber;

};


document.getElementById('calculate').addEventListener('click', function () {

    const foodExpense = updateNumber('food-cost');
    const rentExpense = updateNumber('rent-cost');
    const clothExpense = updateNumber('cloth-cost');


    let totalExpenseNumber = foodExpense + rentExpense + clothExpense;

    // display total Expense
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalExpenseNumber;

    // display extra blance
    let totalIncome = updateNumber('total-income');
    let extraAmount = totalIncome - totalExpenseNumber;
    // alert one
    if (totalIncome < 0) {
        alert("put the possitive number");
    }
    if (foodExpense < 0) {
        alert("put the possitive number");
    }
    if (clothExpense < 0) {
        alert("put the possitive number");
    }

    // alert two
    if (totalExpenseNumber > totalIncome) {
        alert('You are running out of money');
    } else {

    }


    // display extra balance

    const extraBalance = document.getElementById('extra-blance');
    extraBalance.innerText = extraAmount;

})
// calculate saving amount
document.getElementById('save').addEventListener('click', function () {

    // const saveInput = document.getElementById('save-value');
    // const saveInputText = saveInput.value;
    // const saveAmount = parseFloat(saveInputText);
    let totalIncome = updateNumber('total-income');

    const SavePersent = updateNumber('save-value');

    const totalSaving = (totalIncome * SavePersent) / 100;

    if (SavePersent < 0) {
        alert("put the possitive number");
    }



    // remaing blance
    const foodExpense = updateNumber('food-cost');
    const rentExpense = updateNumber('rent-cost');
    const clothExpense = updateNumber('cloth-cost');


    let totalExpenseNumber = foodExpense + rentExpense + clothExpense;


    let extraAmount = totalIncome - totalExpenseNumber;
    const remaingBlance = extraAmount - totalSaving;

    document.getElementById('save-amount').innerText = totalSaving;
    document.getElementById('remain-blance').innerText = remaingBlance;




});