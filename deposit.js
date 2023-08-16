document.getElementById('deposit-btn').addEventListener('click', function(){
    const newdepoInput = getInputFld('deposit-field');
    const preDepoFld = getTextFld('deposit-total');
    const TotalDepo = preDepoFld + newdepoInput;
    setTextFld('deposit-total', TotalDepo);
    const preBalance = getTextFld('balance-total');
    const newBalance = preBalance + newdepoInput;
    setTextFld('balance-total', newBalance);
})