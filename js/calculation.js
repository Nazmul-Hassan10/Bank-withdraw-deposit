const depositSubmit = document.getElementById("btn-deposit").addEventListener('click', function(){
    
    const wantToDeposit = document.getElementById("want-deposit")
    let newDepositAmountString = wantToDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const hasDeposit = document.getElementById("deposit");

    const previousDepositAmountString = hasDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    hasDeposit.innerText = currentDepositAmount;

    
    const balanceTotalElement = document.getElementById("balance-total")
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalance = previousBalanceTotal + newDepositAmount
    balanceTotalElement.innerText = currentBalance


    wantToDeposit.value = "";
})

const withdrawSubmit = document.getElementById("btn-withdraw").addEventListener('click', function(){

    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    
    const previousWithdrawField = document.getElementById("withdraw");
    const previousWithdrawString = previousWithdrawField.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    const newWithdraw = newWithdrawAmount + previousWithdraw;
    previousWithdrawField.innerText = newWithdraw


    const balanceTotalElement = document.getElementById("balance-total")
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalance = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = currentBalance
    withdrawField.value = '';
})
