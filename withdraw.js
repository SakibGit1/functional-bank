
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawInput = getInputFld('withdraw-fl');

    if (isNaN(newWithdrawInput)) {
        alert("Please enter a valid number.");
        return;
    }
       const preBalance = getTextFld('balance-total');
    if (newWithdrawInput > preBalance) {
        alert("Not enough money.");
        return;
    }
    const preWithdrawFld = getTextFld('withdraw-f');
    const newWithdrawBalance = preWithdrawFld + newWithdrawInput;
    setTextFld('withdraw-f', newWithdrawBalance);
    // const preBalance = getTextFld('balance-total');

    const newBalance = preBalance - newWithdrawInput;
    setTextFld('balance-total', newBalance);
})