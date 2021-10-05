/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
    , "e", "i", "o", "u"
*/

let vocales=['a','e','i','o','u'];

function numVocal(name){
    let cont=0;
    for (var i = 0; i < name.length; i++){
    let letra=name.charAt(i);
        for (var j = 0; j < vocales.length; j++){
            if(letra==vocales[j]){ 
                cont=cont+1;
            }else{
                cont=cont;
            }

        }

    }

    console.log("Tu nombre tiene " + cont + " vocales");
}

let nameIn=window.prompt("Ingresa tu nombre completo: ");
numVocal(nameIn);
