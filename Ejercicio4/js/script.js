/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

let pattern="*";

function printPattern(pattern){
    let newPat="*";
    for(var i=0;i<10;i++){
        newPat=newPat+pattern;
        console.log(newPat);
    }
}

printPattern(pattern);