function sendOrderData() {

    const email = toString(document.querySelector('input[name=email]').value)
    const adress = toString(document.querySelector('input[name=adress]').value)
    
    
    let burgerPrice = parseInt(document.querySelector('input[name=burger]:checked').value);
    let extraPrice = parseInt(document.querySelector('input[name=extra]:checked').value );
    let saucePrice = parseInt(document.querySelector('#sauce').value);
   
    let amountInput = document.querySelector("input[name='amount-input']");
    let quintityNumber = parseInt(amountInput.value);
    let amount = quintityNumber * (burgerPrice + extraPrice + saucePrice);
    let showAmount = document.querySelector("span.show-amount");
   

    quintityNumber = isNaN(quintityNumber) ? 0 : quintityNumber; 

    isValidQuatity(quintityNumber);

    showAmount.innerHTML = amount;
    
    }
    


function isValidQuatity(quintityNumber){

    if ( quintityNumber > 10) {
    alert("Maximum 10 terméket vásárolhat !")
    } 
    else if ( quintityNumber < 1) {
    alert("Minimum 1 terméket kell vásárolnia a rendelés leadáshoz ! ")
    return false
    }
    return true
    }



   

