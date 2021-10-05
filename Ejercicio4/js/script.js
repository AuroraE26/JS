/* 
4. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
    -Imprimir en consola las equivalencias en letra su calificación, es decir:
   
        si es mayor o igual a 90, imprimir "A"
        si es mayor o igual a 80 y menor que 90 , imprimir "B"
        si es mayor o igual a 70 y menor que 80 , imprimir "C"
        si es mayor o igual a 60 y menor que 70 , imprimir "D"
        si es mayor o igual a 50 y menor que 60 , imprimir "E"
        si es menor 50 , imprimir "F"
*/

let calif=parseInt(window.prompt("Ingresa tu calificacion del examen (0 a 100): "));

function equivCalif(calif){
    if (calif>=90){
        console.log("A");
    }else if(calif>=80 && calif<90){
        console.log("B");
    }else if(calif>=70 && calif<80){
        console.log("C");
    }else if(calif>=60 && calif<70){
        console.log("D");
    }else if(calif>=50 && calif<60){
        console.log("E");
    }else if(calif<50){
        console.log("F");
    }
}

equivCalif(calif);