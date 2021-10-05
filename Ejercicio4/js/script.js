/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

let frase ="Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa  al estudiante que tiene a su lado"

function contPalabra(texto){
    let cont=texto.search("estudiante")
        for(i=0; i<cont; i++){
            texto=texto.replace("estudiante","Koder");
        }
        
        console.log(texto);
}

contPalabra(frase);


