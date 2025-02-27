function getInputValueById (id){
    const value =document.getElementById(id).value;
    const convertedValue=parseFloat(value);
    return convertedValue;
}

//************************************************ */
function getInnerTextById (id){
    const value=document.getElementById(id).innerText;
    const convertedValue=parseFloat(value);
   
    return convertedValue;
    
}


//***************************************************** */
//kono element er inner text set korar jonno
function setInnerTextByIdAndValue(id,value){
    const result=document.getElementById(id).innteText=value;
    return result;
}
