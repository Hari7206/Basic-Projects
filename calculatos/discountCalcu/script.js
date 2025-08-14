let reset = document.querySelector('.Reset')
let calculate = document.querySelector('.calculate')


calculate.addEventListener('click' , ()=> {
    let billinput = document.getElementById('bill').value
    let discount = document.getElementById('discount').value
   let amount = document.getElementById('amount')
   let final = document.getElementById('final')
    console.log(billinput);
    console.log(discount);

    let discountedPrice = billinput * ( discount / 100);
    amount.value = discountedPrice

    let finalprice = billinput -  discountedPrice
    final.value = finalprice

    
    
})


reset.addEventListener('click' , ()=>{
    location.reload();
})