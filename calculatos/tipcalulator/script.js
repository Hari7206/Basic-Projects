let personInput = document.querySelector('.person');
let result = document.querySelector('.result');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let bill = parseFloat(document.querySelector('.bill').value);
    let tipPercent = parseFloat(document.querySelector('.tip').value);
    let personCount = parseFloat(personInput.value);

    // Basic check to avoid NaN or divide by zero
    if (isNaN(bill) || isNaN(tipPercent) || isNaN(personCount) || personCount <= 0) {
        result.innerHTML = "Enter valid numbers!";
        return;
    }

    let tipAmount = tipPercent
    let totalBill = bill + tipAmount;
    let perPerson = totalBill / personCount;

    result.innerHTML = perPerson.toFixed(2);
});
