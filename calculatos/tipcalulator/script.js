
const person = document.querySelector('.person')

const result = document.querySelector('.result')
const btn = document.querySelector('.btn')
btn.addEventListener('click' , () =>{
    const bill = document.querySelector('.bill').value
   const tip = document.querySelector('.tip').value
bill = bill * (tip  / 100);
let totalBill = bill + tip
person =  totalBill / person;
})

result.innerHTML = `${totalBill}`
