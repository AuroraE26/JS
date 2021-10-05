/* 1.   -Pedir al usuario por prompt un numero entre 1 y 100
        - Verificar si es un par o impar e imprimir en resultado en consola
*/

let num=window.prompt("Ingresa un numero del 1 al 100");

function numPar(num){

    if((parseInt(num)%2)>0){
        console.log("El numero es impar");
    }
    else{
        console.log("El numero es par");
    }
}

numPar(num);