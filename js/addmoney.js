document.getElementById("btn-add-money")
.addEventListener("click",function(event){
    // event.preventDefault();
    const selectBank=document.getElementById("add-select-bank").value;
    const accountNumber=document.getElementById("add-money-account-number").value;
    const amount=getConvertedInputValue("add-money-enter-amount");
    const pin=getConvertedInputValue("add-money-pin-number");
    const mainBalance=getConvertedInnerText("main-balance")
   if(selectBank!=="Bkash" && selectBank!=="Nagad" && selectBank!=="DBBL"){
    alert("please select Bank")
   }
   else if(accountNumber.length!==11 || accountNumber[0]!=="0" || accountNumber[1]!=="1"){
    alert("please valid Account number")
   }
   else if(pin!==1234){
    alert("Invalid pin")
   }
   else if(amount<0){
    alert("please positive amount")
    return;
   }
   
})