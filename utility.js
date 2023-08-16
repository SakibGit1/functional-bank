function getInputFld (inputId){
    const inputFld = document.getElementById(inputId);
    const inputFldValue = inputFld.value ;
    const inputFldValueFlt = parseFloat (inputFldValue);
    inputFld.value = '';
    return inputFldValueFlt;
}
function getTextFld (textId){
    const textFld = document.getElementById(textId);
    const textFldValue = textFld.innerText;
    const textFldValueFlt = parseFloat(textFldValue);
    return textFldValueFlt;
}
function setTextFld (textId, newValue){
    const setValue = document.getElementById(textId);
    setValue.innerText = newValue;
}