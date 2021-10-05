/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/


function lenString(name){
    let lenName=name.length;
    console.log(lenName);
}

let nameIn=window.prompt("Ingresa tu nombre completo: ");
lenString(nameIn);