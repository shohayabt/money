// M0ST USEFULL VARIABLE HERE 
const calculateButton = document.getElementById('cal-button');
const saveButton = document.getElementById('save-button');

// ERROR MESSAGE FUNCTION
function emptyError(event) {
    if (event == '') {
        let errorMessage = '';
        return errorMessage;
    } else {
        event = parseFloat(event);
        return event
    }
}
//FUNCTION OF  CALCULATING EXPENSES
function expenses() {
    let food = document.getElementById('food').value;
    food = emptyError(food)
    let rent = document.getElementById('rent').value;
    rent = emptyError(rent)
    let others = document.getElementById('others').value;
    others = emptyError(others)

    if (food < 0 || rent < 0 || others < 0 || typeof(food) == "string"|| typeof(rent) == "string" || typeof(others) == "string") {
        let errorMessage = '';
        return errorMessage;
    }
    else {
        let expenses = food + rent + others;
        return expenses;
    }

}
// FUNCTION OF CALCULATING BALLANCE 
function calculatingBallance() {
    let income = document.getElementById('income').value;
    income = emptyError(income);
    if (typeof(income) == "string"|| income < expenses()) {
        let errorMessage = '';
        return errorMessage;
    }
    else {
        const ballance = income - expenses();
        return ballance;
    }
}
// FUNCTION OF SAVING MONEY
function savingMoney() {
    let save = document.getElementById('save').value;
    save = emptyError(save);
    if (typeof(save) == "string" || save < 0) {
        let errorMessage = '';
        return errorMessage;
    } else {
        let income = document.getElementById('income').value;
        income = emptyError(income);
        if (typeof(income) == "string") {
            let errorMessage = '';
            return errorMessage;
        }
        else {
            let savingMoney = income * (save / 100);
        
            return savingMoney;
        }
    }
}
// REMMAINING BALLANCE FUNCTION 
function remainingBallance() {
    if (calculatingBallance() >= savingMoney()) {
        let remainingBallance = calculatingBallance() - savingMoney();
        return remainingBallance;
    } else {
        let errorMessage = '';
        return errorMessage;
    }
}

// CALCULATING INCOME BY CLICKING BUTTON

calculateButton.addEventListener('click', function () {
    if (typeof(expenses()) == "string") {
        let errorMessageShow = document.getElementById('error-message');
        errorMessageShow.style.display = "block";
        errorMessageShow.value = "PLEASE! ENTER A VALID NUMBER.";
        document.getElementById('total-expenses').value = '';
        document.getElementById('ballance').value = '';
        document.getElementById('save').value = '';
    }
    else if (typeof(calculatingBallance()) == "string") {
        let errorMessageShow = document.getElementById('error-message');
        errorMessageShow.style.display = "block";
        errorMessageShow.value = "YOUR EXPENSES IS MORE THAN YOUR INCOME OR INCOME IS EMPTY";
        document.getElementById('total-expenses').value = '';
        document.getElementById('ballance').value = '';
        document.getElementById('save').value = '';
    }
    else {
        //CALLING CREATED FUNCTION EXPENSES 
        document.getElementById('total-expenses').value = expenses();
        // CALCULATING BALLANCE 
        document.getElementById('ballance').value = calculatingBallance();

        //  HIDE ERROR MESSAGE 
        let errorMessageShow = document.getElementById('error-message');
        errorMessageShow.style.display = "none";
        // ACTIVE THE DISABLED SAVE MONEY BUTTON
        saveButton.removeAttribute('disabled');
        saveButton.style.background = '#59A5FF';
        // EMPTY THE FILD
        document.getElementById('save').value = '';
    }
})

// SAVING MONY BY CLICKING BUTTON

saveButton.addEventListener('click', function () {
    let errorMessage = document.getElementById('error-message-save');
    if (typeof(remainingBallance()) == "string") {
            errorMessage.style.display = 'block'
        errorMessage.value = "YOUR SAVINGS AMOUNT IS MORE THAN YOUR CURRENT BALLNCE"
        document.getElementById('saving-amount').value = '';
        document.getElementById('remaining-ballance').value = '';
    } else if (typeof(savingMoney()) == "string") {
        errorMessage.style.display = 'block'
        errorMessage.value = "PLEASE ENTER A VALID NUMBER "
        document.getElementById('saving-amount').value = '';
        document.getElementById('remaining-ballance').value = '';
    }
    else {
        errorMessage.style.display = 'none'
        document.getElementById('saving-amount').value = savingMoney().toFixed(3);
        document.getElementById('remaining-ballance').value = remainingBallance().toFixed(3);
    }
})














