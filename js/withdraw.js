document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    // validation
    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid amound')
        return;
    }
    if (typeof newWithdrawAmount !== "number") {
        alert('please provide valid amount');
        return;
    }
    if (newWithdrawAmount <= 0) {
        alert('please provide valid amount');
        return;
    }

    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("you don't have enough money for withdraw");
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawtotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = newBalanceTotal;

})