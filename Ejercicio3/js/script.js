/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
    , "e", "i", "o", "u"
*/


function lenString(name){
    let numVocal=name.search("a");
    console.log(numVocal);
}

let nameIn=window.prompt("Ingresa tu nombre completo: ");
lenString(nameIn);