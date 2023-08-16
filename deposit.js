document.getElementById('deposit-btn').addEventListener('click', function(){
    const newdepoInput = getInputFld('deposit-field');

    if (isNaN(newdepoInput)) {
        alert("Please enter a valid number.");
        return;
    }
    const preDepoFld = getTextFld('deposit-total');
    const TotalDepo = preDepoFld + newdepoInput;
    setTextFld('deposit-total', TotalDepo);
    const preBalance = getTextFld('balance-total');
    const newBalance = preBalance + newdepoInput;
    setTextFld('balance-total', newBalance);
})