function myfunc(){
    document.getElementById('display').value += this.id;
}

function clearfn(){
    document.getElementById('display').value = '';
}

function evalExp(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
}

document.getElementById('1').addEventListener('click',myfunc);
document.getElementById('2').addEventListener('click',myfunc);
document.getElementById('3').addEventListener('click',myfunc);
document.getElementById('4').addEventListener('click',myfunc);
document.getElementById('5').addEventListener('click',myfunc);
document.getElementById('6').addEventListener('click',myfunc);
document.getElementById('7').addEventListener('click',myfunc);
document.getElementById('8').addEventListener('click',myfunc);
document.getElementById('9').addEventListener('click',myfunc);
document.getElementById('0').addEventListener('click',myfunc);
document.getElementById('+').addEventListener('click',myfunc);
document.getElementById('-').addEventListener('click',myfunc);
document.getElementById('/').addEventListener('click',myfunc);
document.getElementById('*').addEventListener('click',myfunc);
document.getElementById('C').addEventListener('click',clearfn);
document.getElementById('=').addEventListener('click',evalExp);

