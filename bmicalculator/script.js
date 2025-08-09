
let btn = document.querySelector('#btn')
let reset = document.querySelector('.btn')
let result = document.querySelector('#normal')

btn.addEventListener('click' , () => {
    let height = Number(document.querySelector("#heightInput").value);
    let weight = Number(document.querySelector("#weightInput").value);
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = "Invalid input. Please enter valid height and weight.";
        return; // Stop further execution
    }
     height = height / 100;
   let  BMI = weight  / (height * height)
    BMI = BMI.toFixed(2); // round to 2 decimal place
result.innerHTML = `Your BMI is ${BMI}`;

})

reset.addEventListener('click', () => {
    location.reload();
});
