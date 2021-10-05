/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "ivan DIAZ"
*/

let name=window.prompt("Ingresa tu nombre: ");
let lastName=window.prompt("Ingresa tu apellido: ");

function retName(name,lastName){
    newName=name.toLowerCase();
    newLast=lastName.toUpperCase();

    let newFinal=newName + " "+ newLast;
    console.log(newFinal);
}

retName(name,lastName);