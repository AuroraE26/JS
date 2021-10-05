/* 3. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
     - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
*/

let nombre=window.prompt("Ingresa tu nombre: ");
let pesoTierra=window.prompt("Ingresa tu peso actual en kg: ");

function pesoLuna(nombre, peso){
    pesoLuna=((parseInt(peso))/9.81)*1.62;

    return console.log("El peso de "+nombre+ " en la Luna es de "+ Math.round(pesoLuna) +" Kg.")
}

pesoLuna(nombre,pesoTierra);