document.getElementById("btn-add-money")
.addEventListener("click",function(event){
    event.preventDefault();
    const selectBank=document.getElementById("add-select-bank").value;
    const accountNumber=document.getElementById("add-money-account-number").value;
    const amount=getConvertedInputValue("add-money-enter-amount");
    const pin=getConvertedInputValue("add-money-pin-number");
    const mainBalance=getConvertedInnerText("main-balance")

    //*************************************************************** */
   if(selectBank !== "Bkash" && selectBank !== "Nagad" && selectBank !== "DBBL"){
    alert("please select Bank")
    return
   }
   else if(accountNumber.length!==11 || accountNumber[0]!=="0" || accountNumber[1]!=="1"){
    alert("please valid Account number")
    return
   }
   else if(pin!==1234){
    alert("Invalid pin")
    return
   }
   else if(amount<=0 || isNaN(amount)){
    alert("please positive amount")
    return;
   }
   else{
    const sum=mainBalance+amount;
    document.getElementById("main-balance").innerText=sum;
   }
   //**************************************************************** */
   const historyContainer=document.getElementById("history-container");
   const div=document.createElement("div")
   div.innerHTML=`
   <div class="flex justify-between items-center bg-white p-3 rounded-xl">
                <div class="flex justify-between items-center">
                   <div class="bg-[#F4F5F7] h-10 w-10 rounded-full flex justify-center items-center"> <img class="w-1/2" src="./assets/wallet1.png" alt=""></div>
                    <div class="ml-2">
                        <h1 class="font-semibold text-base text-[#666768]">Added ${amount} tk</h1>
                        <p class="font-normal text-[12px] text-[#666768]">from ${accountNumber}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
   `
   historyContainer.appendChild(div);
})