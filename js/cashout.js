//******************************Just DOM applies********************************** */

// document.getElementById("btn-cashout")
// .addEventListener("click",function(event){
//     event.preventDefault()
//     const agentNumber=document.getElementById("agent-number").value;
//     const cashoutAmount=document.getElementById("cashout-amount").value;
//     const transferCashoutAmount=parseFloat(cashoutAmount);
//     const cashoutPin=document.getElementById("cashout-pin").value;
//     const transferCashoutPin=parseInt(cashoutPin);
//     const cashoutMainBalance =document.getElementById("main-balance").innerText;
//     const transferCashoutmainBalance=parseFloat(cashoutMainBalance);
//     if(agentNumber.length!==11){
//         alert("please valid agent number")
//     }
//     else if(transferCashoutAmount<100){
//       alert("  please minimum cashout amount 100 tk")
//     }
//     else if(transferCashoutPin!==1234){
//         alert("please valid pin ")
//     }
//     else{
//         if(transferCashoutmainBalance<=0 ==true){
//             document.getElementById("main-balance").innerText=0;
            
//         }
//         else{
//             const substraction =transferCashoutmainBalance-transferCashoutAmount;
//         document.getElementById("main-balance").innerText=substraction;
//         }
//     }

// })


//*************************************Utilities functon applies***************************************** */

// document.getElementById("btn-cashout")
// .addEventListener("click",function(event){
//     event.preventDefault()
//     const agentNumber=document.getElementById("agent-number").value;
//     const amount=getInputValueById('cashout-amount');
    
//     const cashoutPin=document.getElementById("cashout-pin").value;
//     const transferCashoutPin=parseInt(cashoutPin);
//     const mainBalance=getInnerTextById("main-balance")
//     if(agentNumber.length!==11){
//         alert("please valid agent number")
//     }
//     else if(amount<100){
//       alert("  please minimum cashout amount 100 tk")
//     }
//     else if(transferCashoutPin!==1234){
//         alert("please valid pin ")
//     }
//     else{
//         if(mainBalance<=0 ==true){
//             document.getElementById("main-balance").innerText=0;
            
//         }
//         else{
//             const substraction =mainBalance-amount;
//         document.getElementById("main-balance").innerText=substraction;
//         }
//     }
// console.log(typeof amount, typeof mainBalance)
// console.log(amount,mainBalance)
// })
//************************************************************************************** */
document.getElementById("btn-cashout")
.addEventListener("click",function(event){
    event.preventDefault()
    const agentNumber=document.getElementById("agent-number").value;
    const amount=getInputValueById('cashout-amount');
    
    const cashoutPin=document.getElementById("cashout-pin").value;
    const transferCashoutPin=parseInt(cashoutPin);
    const mainBalance=getInnerTextById("main-balance")
    // console.log(mainBalance)
    if(agentNumber.length!==11){
        alert("please valid agent number")
    }
    else if(amount<100){
      alert("  please minimum cashout amount 100 tk")
    }
    else if(transferCashoutPin!==1234){
        alert("please valid pin ")
    }
    else{
        if(mainBalance<=0 ==true){
            document.getElementById("main-balance").innerText=0;
            
        }
        else{

            const substraction =mainBalance-amount;
            // const substraction =parseInt(mainBalance)-amount;
            // console.log(substraction,amount)
        document.getElementById("main-balance").innerText=substraction;
        }
    }

})
