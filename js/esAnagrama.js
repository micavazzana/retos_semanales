/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Dificultad: MEDIA
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function esAnagrama(str1, str2) {

   //Convierto los string en array de char,
   //pasando todo a minúsculas previamente
   let cadena1 = str1.toLowerCase().split("");
   let cadena2 = str2.toLowerCase().split("");

   //Ordeno las letras de cada array
   //y luego uso join para volver a formarlo en string
   cadena1 = cadena1.sort().join("");
   cadena2 = cadena2.sort().join("");

   //Si las palabras son exactamente iguales no son anagrama
   if (str1.toLowerCase() == str2.toLowerCase()) return false;

   //Si las cadenas resultan iguales,
   //tienen la misma cantidad de letras y mismas letras
   return cadena1 == cadena2;
}
