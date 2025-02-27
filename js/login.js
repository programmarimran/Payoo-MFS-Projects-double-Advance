document.getElementById("btn-login")
.addEventListener("click",function(event){
    event.preventDefault()
    const userNumber=document.getElementById("user-number").value;
    const userPassword=getConvertedInputValue("user-pass");
    if(userNumber.length!==11 || userNumber[0]!=='0' || userNumber[1]!=='1'){
        alert("please valid Number")
    }
    else if(userPassword!==1234){
        alert("please valid password")
    }
    else{
        window.location.href="./main.html"
    }
})