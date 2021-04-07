
button.addEventListener('click', infos);
function infos(){
    var number1 = parseFloat(document.getElementById('firstNumber').value);
    var number2 = parseFloat(document.getElementById('secondNumber').value);
    var calc = (number1 * number2);
    
    if(calc){ 
        alert('The result is : ' + (calc));
    }else {
        alert('Fill in the fields please!');
    }
}

 console.log(infos)