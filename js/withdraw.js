document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert("please set a valid amount");
        return;
    }

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    
    
    const previousWithdrawString = withdrawTotalAmount.innerText;
    
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
    
    
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(newWithdrawAmount> previousBalanceTotal){
        alert("Bank a Tk nai");
        return;
    }
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalanceTotal;
    const currentWithdrawtotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawtotal;

    
})