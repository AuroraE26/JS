/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

let num=window.prompt("Ingrese un numero entre 10 y 100: ");
function sumarDigitos(numero){
    let suma=0;
    digitos=numero.split("");
    for(var i=0;i<numero.length;i++){
        suma=suma+parseInt(numero[i]);
    }
    console.log(suma);
}

sumarDigitos(num);