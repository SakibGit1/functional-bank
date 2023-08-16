document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawInput = getInputFld('withdraw-fl');
    const preWithdrawFld = getTextFld('withdraw-f');
    const newWithdrawBalance = preWithdrawFld + newWithdrawInput;
    setTextFld('withdraw-f', newWithdrawBalance);
    const preBalance = getTextFld('balance-total');
    const newBalance = preBalance - newWithdrawInput;
    setTextFld('balance-total', newBalance);
})