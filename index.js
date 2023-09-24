document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "1";
});

document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "2";
});

document.getElementById("btn3").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "3";
});

document.getElementById("btn4").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "4";
});

document.getElementById("btn5").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "5";
});

document.getElementById("btn6").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "6";
});

document.getElementById("btn7").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "7";
});

document.getElementById("btn8").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "8";
});

document.getElementById("btn9").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "9";
});

document.getElementById("btn0").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "0";
});

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("inputCalcu").value = "";
});

document.getElementById("btnPlus").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "+";
});

document.getElementById("btnMinus").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "-";
});

document.getElementById("btnKali").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "x";
});

document.getElementById("btnBagi").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += "/";
});

document.getElementById("btnTitik").addEventListener("click", function(){
    document.getElementById("inputCalcu").value += ".";
});

document.getElementById("btnSama").addEventListener("click", function(){
    document.getElementById("inputCalcu").value = eval(
        document.getElementById("inputCalcu").value.replace("x", "*")
        );
});