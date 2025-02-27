









const acountNumber =document.getElementById('user-number').defaultValue = "01234569874";

const accountPassword =document.getElementById('user-pass').defaultValue = "1234";
document.getElementById('btn-login')
.addEventListener('click',function(event){
    event.preventDefault()
const acountNumber =document.getElementById('user-number').value
const accountPassword =document.getElementById('user-pass').value;

// console.log(acountNumber.length)
// console.log(accountPassword.length)
// console.log(typeof acountNumber[0])
console.log(typeof accountPassword,accountPassword)


if(acountNumber.length!==11){
    alert('please 11 digit number')
}
else if(acountNumber[0]!=='0'){
    alert('please mobile first number 0')
}

else if(accountPassword.length!==4 || accountPassword!=='1234'){
    alert('please 4 digit password and correct password')
}
else{
    window.location.href="./main.html"
    // window.location.href='http://127.0.0.1:5500/js/main.html'
}


    
})