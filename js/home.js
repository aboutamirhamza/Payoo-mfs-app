
function hideAllModals() {
    document.querySelectorAll('[id$="-modal"]').forEach(modal => {
        modal.style.display = 'none';
    });
}

function showModal(modalId, modalName) {
    document.getElementById(modalId).addEventListener('click', function () {
    hideAllModals();
    document.getElementById(modalName).style.display = 'block';
});
}

showModal('add-money','add-money-modal');
showModal('cash-out','cash-out-modal');
showModal('transfer-money','transfer-modal');
showModal('get-bonus','get-bonus-modal');
showModal('pay-bill','pay-bill-modal');
showModal('transactions','transaction-modal');

// ------------------- END OF MODAL -------------------

// ------------------- ADD MONEY MODAL -------------------
const addMoney = document.getElementById('add-money-btn');
addMoney.addEventListener('click', function(e){
    e.preventDefault();
    const accountNumberStatic = 12345678910;
    const accountPinStatic = 12345;
    const bankName = document.getElementById('bank').value;


    const accountNumberField = document.getElementById('account-number');
    const accountPinField = document.getElementById('pin-number');
    const amountAddField = document.getElementById('add-amount');

    const accountNumber = parseInt(accountNumberField.value);
    const accountPin = parseInt(accountPinField.value);
    if(accountNumber === accountNumberStatic && accountPin === accountPinStatic){
        const amountAdd = parseInt(amountAddField.value);
        const myBalance = parseInt(document.getElementById('my-balance').innerText);

        const totalBalance = amountAdd + myBalance;
        document.getElementById('my-balance').innerText = totalBalance;

        accountNumberField.value = "";
        accountPinField.value = "";
        amountAddField.value = "";
        bankName.value = "";
        alert("Money Added to " + bankName + " now my total balance is " + totalBalance);
    }else{
        alert("Invalid Account Number or Pin");
    }
})

// ------------------- END OF ADD MONEY MODAL -------------------

// -------------------- CASH OUT MODAL --------------------
const cashOutMoney = document.getElementById('cashout-btn');
cashOutMoney.addEventListener('click', function(e){
    e.preventDefault();
    const accountNumberStatic = 12345678910;
    const accountPinStatic = 12345;

    const agentNumberField = document.getElementById('agent-number');
    const amountCashoutField = document.getElementById('amount-cashout');
    const pinNumberField = document.getElementById('pin-number-cashout');

    const agentNumber = parseInt(agentNumberField.value);
    const agentAccountPin = parseInt(pinNumberField.value);


    if(agentNumber === accountNumberStatic && agentAccountPin === accountPinStatic){
        const amountCashout = parseInt(amountCashoutField.value);
        const myBalance = parseInt(document.getElementById('my-balance').innerText);

        if (amountCashout > myBalance) {
            alert("No Balance, right now your balance is " + myBalance);
        } else {
            const totalBalanceCashOut = myBalance - amountCashout;
            document.getElementById('my-balance').innerText = totalBalanceCashOut;

            alert("Cashout Successful! now my balance is " + totalBalanceCashOut);
        }

        agentNumberField.value = "";
        pinNumberField.value = "";
        amountCashoutField.value = "";
        
    } else {
        alert("Invalid Account Number or Pin");
    }
})
// ------------------- END OF CASH OUT MODAL -------------------

// ------------------- TRANSFER MONEY MODAL -------------------
const transferMoney = document.getElementById('transfer-btn');
transferMoney.addEventListener('click', function(e){
    e.preventDefault();
    const accountNumberStatic = 12345678910;
    const accountPinStatic = 12345;

    const transferNumberField = document.getElementById('user-account-number');
    const transferField = document.getElementById('transfer-amount');
    const transferpinNumberField = document.getElementById('transfer-pin-number');

    const transferNumber = parseInt(transferNumberField.value);
    const transferAccountPin = parseInt(transferpinNumberField.value);


    if(transferNumber === accountNumberStatic && transferAccountPin === accountPinStatic){
        const amountTransfer = parseInt(transferField.value);
        const myBalance = parseInt(document.getElementById('my-balance').innerText);

        if (amountTransfer > myBalance) {
            alert("Balance not transfer becaouse Not enough Balance you have, right now your balance is " + myBalance);
        } else {
            const totalBalanceCashOut = myBalance - amountTransfer;
            document.getElementById('my-balance').innerText = totalBalanceCashOut;

            alert("Transfer Amount Successful! now my balance is " + totalBalanceCashOut);
        }

        transferNumberField.value = "";
        transferpinNumberField.value = "";
        transferField.value = "";
        
    } else {
        alert("Invalid Account Number or Pin");
    }
})
// ------------------- END OF TRANSFER MONEY MODAL -------------------

// ------------------- GET BONUS MODAL -------------------
const getBonus = document.getElementById('get-bonus-btn');

getBonus.addEventListener('click', function(e){
    e.preventDefault();

    // const couponCodeName = "amir";
    const couponCodeField = document.getElementById('coupon-code');
    const couponCode = couponCodeField.value.trim();

    if(couponCode === "amir" || couponCode === "hamza" || couponCode === "shuvo" || couponCode === "khan" || couponCode === "Amir" || couponCode === "Hamza" || couponCode === "Shuvo" || couponCode === "Khan" || couponCode === "amir hamza shuvo khan" || couponCode === "Amir Hamza Shuvo Khan"){
        const myBalance = parseInt(document.getElementById('my-balance').innerText);
        const totalBalance = myBalance + 5000;
        document.getElementById('my-balance').innerText = totalBalance;
        alert("Coupon applied successfully! you have got 5000 taka bonus! now your total balance is " + totalBalance);
        couponCodeField.value = "";
    }else{
        alert("Invalid Coupon Code");
    }
});

// ------------------- END OF GET BONUS MODAL -------------------

// ------------------- PAY BILL MODAL -------------------
const payBill = document.getElementById('pay-bill-btn');
payBill.addEventListener('click', function(e){
    e.preventDefault();
    const accountNumberStatic = 12345678910;
    const accountPinStatic = 12345;
    const billSelect = document.getElementById('bill-select').value;

    const billNumberField = document.getElementById('bill-account-number');
    const billAddField = document.getElementById('bill-amount-pay');
    const billPinField = document.getElementById('amount-pin');

    const billNumber = parseInt(billNumberField.value);
    const billPin = parseInt(billPinField.value);
    const billAdd = parseInt(billAddField.value);

    if(billNumber === accountNumberStatic && billPin === accountPinStatic){
        const myBalance = parseInt(document.getElementById('my-balance').innerText);

        if (billAdd > myBalance) {
            alert("No Balance, right now your balance is " + myBalance);
        } else {
            const totalBalancebill = myBalance - billAdd;
            document.getElementById('my-balance').innerText = totalBalancebill;

            alert("Bill Payment Successful! " + billSelect + " now my new balance is " + totalBalancebill);
        }

        billNumberField.value = "";
        billPinField.value = "";
        billAddField.value = "";
        
    } else {
        alert("Invalid Account Number or Pin");
    }
});
// ------------------- END OF PAY BILL MODAL -------------------

// -------------------- Logout --------------------
const logout = document.getElementById('logout');
logout.addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "index.html";
})
// -------------------- END OF Logout --------------------