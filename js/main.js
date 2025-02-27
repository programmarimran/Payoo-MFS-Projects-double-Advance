document.getElementById("latest-payment").style.display="block"
document.getElementById("input-add-money").style.display="none"
document.getElementById("input-cashout").style.display="none"
document.getElementById("input-pay-bill").style.display="none"
document.getElementById("input-get-bonus").style.display="none"
document.getElementById("input-send-money").style.display="none"
document.getElementById("transacton-history").style.display="none"

//******************************Sing Out********************************************** */
document.getElementById("logout").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href="./login.html"
})
//**********************************Click add money************************************************* */
document.getElementById("main-add-money").addEventListener("click",function(event){
    event.preventDefault()
    handleToggle("input-add-money","block")
})
//**************************************Cloick transfer history********************************************* */
document.getElementById("main-transaction-history").addEventListener("click",function(event){
    event.preventDefault()
    handleToggle("transacton-history","block")
})
//****************************************Click pay bill******************************************* */
document.getElementById("main-pay-bill").addEventListener("click",function(event){
    event.preventDefault()
    handleToggle("input-pay-bill","block")
})
//********************************************Click get bonus*************************************** */
document.getElementById("main-get-bonus").addEventListener("click",function(event){
    event.preventDefault()
    handleToggle("input-get-bonus","block")
})
//************************************************click transfer money*********************************** */
document.getElementById("main-send-money").addEventListener("click",function(event){
    event.preventDefault()
    handleToggle("input-send-money","block")
})
//*********************************************Click cashout************************************** */
document.getElementById("main-cashout").addEventListener("click",function(event){
    event.preventDefault()
    handleToggle("input-cashout","block")
})
