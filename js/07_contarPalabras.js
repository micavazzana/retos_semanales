/*
 * Reto #7
 * CONTANDO PALABRAS
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 */

function contarPalabras(str){

    let cadenaAux = [];
    for(let i = 0; i < str.length; i++)
    {
        cadenaAux = str.split(" ");
    }
    return cadenaAux.length;
}

console.log(contarPalabras("Lorem ipsum dolor sit amet"));