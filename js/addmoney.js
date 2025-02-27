document.getElementById("btn-add-money")
.addEventListener("click",function(event){
    event.preventDefault()
    const selectBank=document.getElementById("add-select-bank").value;
    const accountNumber=document.getElementById("add-money-account-number").value;
    const amount=document.getElementById("add-money-enter-amount").value;
    const transferAmount=parseFloat(amount)
    const pin=document.getElementById("add-money-pin-number").value;
    const transferPin=parseInt(pin);
    const mainBalance=document.getElementById("main-balance").innerText;
    const transferMainBalance=parseFloat(mainBalance);
    if( selectBank!=="Bkash" &&
        selectBank!=="Nagad" &&
        selectBank!=="DBBL" ){
        alert("please select the valid bank input")
    }
    else if(accountNumber.length!==11 || accountNumber[0]!=="2"){
        alert("please valid account number")
    }
    else if(amount==""){
        alert("please input your amount")
    }
    else if(transferAmount<50){
        alert("please minimum amount 50 tk")
    }
    else if(transferPin!==1234){
        alert("please valid pin")
    }
    else{
        const sum =transferMainBalance+transferAmount;
        document.getElementById("main-balance").innerText=sum;
    }
    
})  
document.getElementById("logout")
.addEventListener("click",function(event){
    event.preventDefault(
        window.location.href="./login.html"
    )
})

