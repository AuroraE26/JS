/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

function palabraLarga(texto){
    nuevoTxt=texto.split(" ");

        if(nuevoTxt[0].length >nuevoTxt[1].length){
            console.log(nuevoTxt[0]);
        }
        else{
            console.log(nuevoTxt[1]);
        }
}

let frase=window.prompt("Ingresa una frase de dos palabras: ");
palabraLarga(frase);


