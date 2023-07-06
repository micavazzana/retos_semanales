/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Dificultad: FÁCIL
 * Enunciado: Crea un programa que invierta el orden de una cadena de texto 
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
 
function reverse(str){
    let strInverso = "";
 
    for(let i = str.length-1; i >= 0;i--)
    {
        strInverso += str[i];
    }
    return strInverso;
}

console.log(reverse("Hola mundo"));