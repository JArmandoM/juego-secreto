
//VARIABLES
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//CREACION DE FUNCIONES

//ASIGNA ELEMENTO DE HTML A JAVA
function asignarTextoElemento(elemento, texto){
//Se transporta una caja (p) para poder ingrasar un elemento (titulo)
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
}
//GENERA NUMERO ALEATORIO
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //PREGUNTAR A LA FUNCION SI YA SE SORTEARON TODOS LOS NUMEROS
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    else {
        //si el numero generado esta incluido en la lista o no
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}
//VERIFICA EL INTENTO
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

// SE LIMPIA LA CAJA
function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}
//NUEVO JUEGO
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

//LLAMADO DE FUNCIONES
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}
condicionesIniciales();













/*

//PRACTICA
//LISTAS

//LLAMADO DE LA FUNCION

//VARIABLES
let numerologia = [];
let lenguajesDeProgramacion = ["JavaScript","C","C++", 'Kotlin', 'Python'];

//AGREGAR ELEMENTOS A LA LISTA
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang', 'ING BRYAN', 'ING URIEL', 'ING CLAU');




//FUNCIONES
function mostrarConsola(){
    for (let i=0; i<lenguajesDeProgramacion.length; i++){
    console.log(lenguajesDeProgramacion[i]);
    }
}
function inversaConsola(){
    for(let i = lenguajesDeProgramacion.length - 1; i>=0 ; i--){
    console.log(lenguajesDeProgramacion[i]);
    }
}
function ListaNumeros(){
    
    for(let i=0;i<n;i++){
        numerologia[i] = parseInt(prompt('Ingrese el numero:'));
    }
}
function promedioNumerosLista(){
    let suma = 0;
    for(let i = 0; i<numerologia.length; i++){
        suma = numerologia[i] + suma;
    }
    console.log(suma);
    console.log(suma/numerologia.length);

}
function nuMayorMenor(){
    let nuMenor = 0;
    let nuMayor = 0;
    for(let i=0;i<n;i++)
    {
        if(numerologia[i]>numerologia[i]){
            nuMayor = numerologia[i];
        }
        else{
           
             nuMenor = numerologia[i];

        }
    }

    console.log(nuMayor);
    console.log(nuMenor);

}





//PROGRAMA PRINCIPAL
let n = parseInt(prompt('Ingrese la cantidad de numeros de la lista'));
mostrarConsola();
inversaConsola();
ListaNumeros();
promedioNumerosLista();
nuMayorMenor();


*/

//CAPTURA DE DATOS
/*
//FUNCION DE IMC
let pp = 0;
let aa = 0;
alert ('Ingrese su peso en Kilogramos');
pp = capturaDatos();
alert('Ingrese su altura en metros por favor:');
aa = capturaDatos();
console.log(indiceDeMasa(pp, aa));
*/


//DECLARACION DE FUNCIONES
//tablaDeMultiplicar();
//console.log(numeroFactorial(capturaDatos()));
//console.log(dolar(capturaDatos()));
//areaPerimetroRectangulo();
//perimetroCirculo();

/*
function areaPerimetroRectangulo(){
    let altura = parseFloat(prompt('Ingrese el area la altura del rectangulo:'));
    let ancho = parseFloat(prompt('Ingresa la anchura del rectangulo: '));

    let area = altura * ancho;
    console.log(area);
    let perimetro = (altura + ancho) * 2;
    console.log(perimetro);
}
function tablaDeMultiplicar(){
    let nume = parseInt(prompt('ingresa un numero: '));

        for (let index = 0; index <= 10; index++){
            console.log(`${nume} x ${index} es igual a = ${nume * index}`);
        }
    }

function perimetroCirculo(){
    let radio = parseFloat(prompt('Ingresa el radio del circulo:'));
    let circulo = (2* 3.14) * radio;

    console.log(circulo);
}
function numeroFactorial(fac){
    let i;
    let operacion = 1;
    
    for(i=1; i<=fac; i ++){
        operacion = operacion * i;  
    }
    console.log(operacion);
    return operacion;
}
function dolar(dinero){
    conversion = dinero * 17.05;
    return conversion;

}
function capturaDatos(){
    let p = parseFloat(prompt(''));
    return p;
}
function indiceDeMasa(peso, altura){
    
    let resultado = parseFloat((peso)/(altura * altura));
    alert(resultado);
    //return resultado;
}
*/

/*
//PRACTICA
ingreseNombre();
mensajeBienvenida();
//MUESTRA EN CONSOLA LOS RESULTADOS DE LAS OPERACIONES
console.log(doble(captura()));
console.log(promedio(captura(), captura(), captura()));
console.log(mayor(captura(), captura()));
console.log(cuadrado(captura()));

//DECLARACION DE FUNCIONES
function captura(){
    let numeroRegistrado = parseInt(prompt('Íngresa un numero por favor:'));
    return numeroRegistrado;
}
function ingreseNombre(){
    let nombreUsuario = prompt('Por favor ingresa tu numero de usuario: ');
    console.log(nombreUsuario);
}
function mensajeBienvenida(){
    console.log('¡Hola, mundo!');
}

function doble(numero){
   
    let resultado = numero * 2;
    return resultado;
}
function promedio(n1, n2, n3){
    let operacion = (n1 + n2 + n3)/3;
    return operacion;
}
function mayor(m1, m2){

    if(m1>m2){
        return m1;
    }
    else{
        return m2;
    }
}
function cuadrado(o1){
    let potencia = o1 * o1;
    return potencia;
}
*/

