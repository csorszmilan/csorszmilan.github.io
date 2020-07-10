function sendOrderData() {
    let burgerPrice = parseInt(document.querySelector('input[name=burger]:checked').value);
    let extraPrice = parseInt(document.querySelector('input[name=extra]:checked').value );
    let saucePrice = parseInt(document.querySelector('#sauce').value);
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);

    const email = toString(document.querySelector('input[name=email]').value)
    const adress = toString(document.querySelector('input[name=adress]').value)

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber; 

    let amount = amountNumber * (burgerPrice + extraPrice + saucePrice);
    let showAmount = document.querySelector("span.show-amount");

    isValidPersonalData(name, email,adress)
    isValidQuatity(amountNumber)
    getTotal(extraPrice, saucePrice, burgerPrice, amountNumber)

    showAmount.innerHTML = amount;
    
    }

function isValidPersonalData(email,adress){

    

    if (!email || !(email.indexOf('@') >0) || !(email.indexOf('.') > 0 )){
    alert('Érvénytelen email cím !');
    return false;
    }
    if (adress.length < 10){
    alert('Kérjük a pontos címet add meg !');
    return false;
    }
    return true;
    }


function isValidQuatity(amountNumber){

    if ( amountNumber > 10) {
    alert("Maximum 10 terméket vásárolhat !")
    } 
    else if ( amountNumber < 1) {
    alert("Minimum 1 terméket kell vásárolnia a rendelés leadáshoz ! ")
    return false
    }
    return true
    }

function getTotal(extraPrice, saucePrice, burgerPrice, amountNumber){
    let totalPrice = amountNumber * (burgerPrice + extraPrice + saucePrice);
    if (totalPrice < 5000){
        totalPrice += 500;
    }
    return totalPrice
    }

   

