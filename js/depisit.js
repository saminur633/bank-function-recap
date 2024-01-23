document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('find deposite click');
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    console.log(newDepositeAmount)
    const depositeAmountTotal = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeAmountTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
   
    const currentDepositetotal = previousDepositeTotal + newDepositeAmount;
    depositeAmountTotal.innerText = currentDepositetotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = currentBalanceTotal;
    
    depositeField.value = '';
})