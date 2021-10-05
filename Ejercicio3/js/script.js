/* 2. Pedir al usuario 2 numeros
    - Imprimir en consola cual es el menor de los 2
    - Imprimir en consola cual es el mayor de los 2
   
*/

let num1=window.prompt("Ingresa el primer numero: ");
let num2=window.prompt("Ingresa el segundo numero: ");

function numMay(num1, num2){
    if(num1>num2){
        console.log("El primer número es mayor")
    }else if(num1<num2){
        console.log("El segundo número es mayor")
    }
    else{
        console.log("Los dos numeros son iguales")
    }
}

numMay(num1,num2);