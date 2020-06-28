


function generateSym(){
    var complexity = document.getElementById('slider').value;
    var valuesSym = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    var valuesNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    var password = "";
    if(document.getElementById('check').checked ==true){
    for(var i = 0; i <= complexity; i++){
        password = password + valuesSym.charAt(Math.floor(Math.random() * Math.floor(valuesSym.length - 1)));
    }
}
    else
    for(var i = 0; i <= complexity; i++){
        password = password + valuesNum.charAt(Math.floor(Math.random() * Math.floor(valuesNum.length - 1)));
    }
    document.getElementById('display').value = password;
}



