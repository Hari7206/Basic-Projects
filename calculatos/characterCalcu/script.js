let answer = document.querySelector('.result');
  let inputdata = document.getElementById('Character')

  inputdata.addEventListener('input' ,function(){
    let totalChar = inputdata.value.length;
    answer.textContent = totalChar
  })