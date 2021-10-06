/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

let num=parseInt(window.prompt("Ingrese un numero del 1 al 10: "));
function tabla(numero){
    for (var i=1; i<=numero; i++){
        mul=numero*i;
        console.log(numero+" x "+i+" = "+mul);
    }
}

tabla(num);