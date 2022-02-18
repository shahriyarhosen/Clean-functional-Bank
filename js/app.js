function getInputValue(inputId) {
     const inputFild = document.getElementById(inputId);
     const inputValue = parseFloat(inputFild.value);
     inputFild.value = ""
     return inputValue
}

function getInnerTextValue(fildId) {
    const fildText = document.getElementById(fildId);
    const fildValue = parseFloat(fildText.innerText);
    return fildValue
}

function updateTotal(fildId, amount) {
    const previousTotal = getInnerTextValue(fildId);
    const newTotal = previousTotal + amount;
    document.getElementById(fildId).innerText = newTotal
    return newTotal
}

function updateBalance(amount, isAdded) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance 
    if (isAdded == true) {
        newBalance = previousBalance + amount
    }
    else {
        newBalance = previousBalance - amount
    }
    document.getElementById('balance-total').innerText = newBalance
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    const amount = getInputValue('diposit-input');
    if (amount > 0) {
        updateTotal('diposit-total', amount)
        updateBalance(amount, true)
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    if (amount > 0) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false)
    }
})