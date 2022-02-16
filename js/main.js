// CALCULATING EXPENSES
function expenses(){
    let food = document.getElementById('food').value;
        food = parseFloat(food);
    let rent = document.getElementById('rent').value;
        rent = parseFloat(rent);
    let others = document.getElementById('others').value;
    others = parseFloat(others);
    let expenses = food + rent + others;
    return expenses;
}

function calculatingBallance(){
    let income = parseFloat(document.getElementById('income').value);
    const ballance = income - expenses();
    return ballance;
}
function savingMoney(){
    let save = parseFloat(document.getElementById('save').value);
    let remainingBallance = ballance * save/100;
    return remainingBallance;
}
const calculateButton = document.getElementById('cal-button');

calculateButton.addEventListener('click', function () {
    document.getElementById('total-expenses').value = expenses(); //CALLING CREATED FUNCTION EXPENSES 

    // CALCULATING BALLANCE 
    document.getElementById('ballance').value = calculatingBallance();
})

const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function(){
    document.getElementById('saving-amount').value = savingMoney();
})