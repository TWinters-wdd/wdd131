function displayError(msg) {
	// display error message
	document.querySelector('.errors').textContent = msg
}

function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}

function submitHandler(event) {
	event.preventDefault();
    let errorMsg = '';
	displayError('');

    let cardNumber = document.querySelector('#creditCardNumber');
    const cardNum = cardNumber.value.trim();
    let securityCode = document.querySelector('#securityCode');
    const secCode = securityCode.value.trim();
        // Check if it's numeric and valid in one go
    
            if (!/^\d{16}$/.test(cardNum)) {
                errorMsg += 'Card number must be 16 digits\n';
            } else if (!isCardNumberValid(cardNum)) {
                errorMsg += 'Card number is not valid\n';
            }
    
        //check date
        const expYearInput = document.querySelector('#year').value.trim();
        const expMonthInput = document.querySelector('#month').value.trim();
        const expYear = Number(expYearInput);
        const expMonth = Number(expMonthInput);
        const currentDate = new Date();

        if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
        ) {
            errorMsg += 'Card is expired\n';
        }

        //check if expiration has correct number of digits
        if (!/^\d{2}$/.test(expMonthInput) || !/^\d{2}$/.test(expYearInput)) {
            errorMsg += 'Expiration date must follow the format MM YY\n';
        }

        //check if CVC has correct number of digits
        if (!/^\d{3}$/.test(secCode)) {
            errorMsg += 'CVC/CVV must contain 3 numerical digits.\n';
        }

    if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return;
    }
    // Success: show a confirmation message
    const formContainer = document.getElementById('cardForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2><h2>Your order will arrive in 3 days </h2>';
}
  
document.querySelector('#cardForm').addEventListener('submit', submitHandler)