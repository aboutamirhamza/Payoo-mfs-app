const login = document.getElementById("login-btn");



login.addEventListener("click",function(e){
    e.preventDefault();
    const accountNumberStatic = 12345678910;
    const accountPinStatic = 12345;
    const accountNumber = parseInt(document.getElementById("account-number").value);
    const accountPin = parseInt(document.getElementById("pin-number").value);
    console.log(accountNumber,accountPin);

    if(accountNumber === accountNumberStatic && accountPin === accountPinStatic){
        window.location.href = "./home.html";
    }else{
        alert("Invalid Account Number or Pin");
    }
})