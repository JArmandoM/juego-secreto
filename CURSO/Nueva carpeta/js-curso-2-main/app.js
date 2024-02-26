//DECLARACION DE PARAMETROS
let titulo = document.querySelector('h1');
titulo.innerHTML = 'HORA DEL DESAFIO';

//Declaracion de funciones 
function ciudadBrasil(){
    let ciudad = prompt('Ingresa la ciudad que visitaste: ');
    alert (`Estuve en ${ciudad} y me acorde de ti`);
}

function amor(){
    alert('Yo amo JS');
}

function suma(){
    let numero1 = parseInt(prompt('Ingresa un numero:'));
    let numero2 = parseInt(prompt('Ingrese el siguiente numero: '));

    let resultado = numero1 + numero2;
    alert(`El resultado de la suma es ${resultado} juega otra vez`);
}
