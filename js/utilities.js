//**********************Input Value Converted the number********************** */
function getConvertedInputValue(id){
    const value=document.getElementById(id).value;
    const convertedValue=parseFloat(value);
    return convertedValue;
}

//***********************Element InnerText Converted the number*************** */
function getConvertedInnerText(id){
    const value=document.getElementById(id).innerText;
    const convertedValue=parseFloat(value);
    return convertedValue;
}

//***************************Update the Element InnerText********************* */
function setElementInnerText(id,value){
    document.getElementById(id).innerText=value;
}

//*****************Toggle ************************** */
function handleToggle(id,value){
    
document.getElementById("latest-payment").style.display="none"
document.getElementById("input-add-money").style.display="none"
document.getElementById("input-cashout").style.display="none"
document.getElementById("input-pay-bill").style.display="none"
document.getElementById("input-get-bonus").style.display="none"
document.getElementById("input-send-money").style.display="none"
document.getElementById("transacton-history").style.display="none"
document.getElementById(id).style.display=value
}