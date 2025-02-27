document.getElementById("btn-cashout")
.addEventListener("click",function(event){
    const agentNumber=document.getElementById("agent-number").value;
    const cashoutAmount=getConvertedInputValue("cashout-amount");
    const cashoutPin=getConvertedInputValue("cashout-pin");
    if(agentNumber.length!==11){
        alert("please valid agent number")
    }
})