/*  1. Solicitar al usuario ingresar un numero
    2. Crear una funcion que genere un string con caracteres aleatorios, la longitud del string debe ser igual que el 
       numero que ingreso el usuario:

        input : 6
        output: '?AQX>H'

        array.fill(value, start, end)
        Math.random();
        .charCodeAt(0)
        Math.floor((Math.random() * 255) + 1);
*/

let num=window.prompt("Ingresa un numero: ");

function randomString(num){
    let randomArray=[];
    randomArray.length=parseInt(num);
    

    for(var i=0;i<parseInt(num);i++){
        let numero=Math.floor((Math.random() * 165) + 32);
        let randomChar=String.fromCharCode(numero);
        randomArray.fill(randomChar,i,num);
    }
    
    let ranString=randomArray.toString();
    console.log(ranString);
}

randomString(num);