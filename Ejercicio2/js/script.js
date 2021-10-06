/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

let num=parseInt(window.prompt("Ingrese un numero entre 10 y 100: "));
function imprimirPares(numero){
   for(var i=1;i<numero; i++){
       if(i%2==0){
        console.log(i)
       }
   }
}

imprimirPares(num);