
//VARIABLES
let numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto);
let numeroUsuario;
let contador = 1;
let palabraVeces = 'vez';
while(numeroUsuario != numeroSecreto && contador <= 3){

//CUERPO DEL PROGRAMA 
    numeroUsuario = prompt('Me indicas un numero entre el 1 y 10 por favor:');
        console.log(numeroUsuario);

        if(numeroUsuario == numeroSecreto){
            alert(`¡ACERTASTE!, El numero secreto es ${numeroSecreto}, el numero de intentos fue de : ${contador} `);
        }
        else{
            if(numeroSecreto<numeroUsuario){
                alert('El numero secreto es menor');
            }
            else{
                alert('El numero secreto es mayor');
            }
            contador ++;
        }
    if(contador >3){
        alert('llegaste al limite de intentos');
    }
}













//PRACTICAAAAAAAAAS 
