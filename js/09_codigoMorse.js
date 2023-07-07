/*
 * Reto #9
 * CÓDIGO MORSE
 * Dificultad: MEDIA
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 */

let morse = ".... --- .-.. .-  -- ..- -. -.. ---  .--. --- .-.  -- .. -.-. .-";
let texto = "hola mundo";

console.log(conversorStrMorse(morse)); //hola mundo por mica
console.log(conversorStrMorse(texto)); //.... --- .-.. .-  -- ..- -. -.. ---
console.log(conversorStrMorse("asd..-a -."));
console.log(conversorStrMorse(""));

function conversorStrMorse(str) {
   let cadenaFinal = "";
   let error = "Error, revise el texto";
   
   //Si la cadena llega vacia da error
   if(str == "")
      return error;

   if (esMorse(str)) 
      cadenaFinal = morse_a_str(str);
   else if (esTexto(str)) 
      cadenaFinal = str_a_morse(str);
   else //Si la cadena no fue ni morse ni texto entonces da error
      return error;

   //Si a pesar de haber interpretado que la cadena recibida fue texto 
   //y no pudo ser interpretada entonces la cadena contendra "undefined", en tal caso da error
   if (cadenaFinal.includes("undefined")) 
      return error;

   return cadenaFinal.trim();
}

//Convierte morse a string
function morse_a_str(str) {
   //Spliteo la cantidad de letras de la cadena que recibo
   let letras = str.split(" ");
   let cadenaFinal = "";

   //Itero la cantidad de letras
   for (let i = 0; i < letras.length; i++) {
      //Cuando termina una palabra el array no contiene nada, entonces concateno un espacio
      if (letras[i] == "")
         cadenaFinal += " ";
      else //Si todavia no termino la palabra concateno las letras
         cadenaFinal += retornarLetra(letras[i]);
   }
   return cadenaFinal;
}

//Convierte string a morse
function str_a_morse(str) {
   //Spliteo la cantidad de palabras de la cadena que recibo
   let palabras = str.split(" ");
   let cadenaFinal = "";

   //Itero la cantidad de palabras
   for (let i = 0; i < palabras.length; i++) {
      cadenaFinal += " "; //Agrego un espacio por cada palabra

      //Spliteo las palabras en letras e itero cada letra para convertirla
      let letras = palabras[i].split("");
      for (let j = 0; j < letras.length; j++) {
         cadenaFinal += retornarMorse(letras[j]);
         cadenaFinal += " "; //Agrego un espacio por cada letra
      }
   }
   return cadenaFinal;
}
//Valida que lo recibido sea codigo morse
function esMorse(caracter) {
   for (let i = 0; i < caracter.length; i++) {
      if (caracter[i] != "." && caracter[i] != "-" && caracter[i] != " ") {
         return false;
      }
   }
   return true;
}

//Valida que lo recibido no sea morse chequeando que la cadena tiene un doble espacio
function esTexto(str) {
   if (str.includes("  ")) {
      return false;
   }
   return true;
}

//Devuelve la letra equivalente al morse que recibe
function retornarLetra(str) {
   switch (str) {
      case ".-":
         return "a";
      case "-...":
         return "b";
      case "-.-.":
         return "c";
      case "-..":
         return "d";
      case ".":
         return "e";
      case "..-.":
         return "f";
      case "--.":
         return "g";
      case "....":
         return "h";
      case "..":
         return "i";
      case ".---":
         return "j";
      case "-.-":
         return "k";
      case ".-..":
         return "l";
      case "--":
         return "m";
      case "-.":
         return "n";
      case "---":
         return "o";
      case ".--.":
         return "p";
      case "--.-":
         return "q";
      case ".-.":
         return "r";
      case "...":
         return "s";
      case "-":
         return "t";
      case "..-":
         return "u";
      case "...-":
         return "v";
      case ".--":
         return "w";
      case "-..-":
         return "x";
      case "-.--":
         return "y";
      case "--..":
         return "z";
      case "-----":
         return 0;
      case ".----":
         return 1;
      case "..---":
         return 2;
      case "...--":
         return 3;
      case "....-":
         return 4;
      case ".....":
         return 5;
      case "-....":
         return 6;
      case "--...":
         return 7;
      case "---..":
         return 8;
      case "----.":
         return 9;
      case ".-.-.-":
         return ".";
      case "--..--":
         return ",";
      case "..--..":
         return "?";
      case "--.--":
         return "ñ";
   } //fin switch
}
//Devuelve el codigo morse equivalente a la letra que recibe
function retornarMorse(str) {
   switch (str) {
      case "a":
         return ".-";
      case "b":
         return "-...";
      case "c":
         return "-.-.";
      case "d":
         return "-..";
      case "e":
         return ".";
      case "f":
         return "..-.";
      case "g":
         return "--.";
      case "h":
         return "....";
      case "i":
         return "..";
      case "j":
         return ".---";
      case "k":
         return "-.-";
      case "l":
         return ".-..";
      case "m":
         return "--";
      case "n":
         return "-.";
      case "o":
         return "---";
      case "p":
         return ".--.";
      case "q":
         return "--.-";
      case "":
         return ".-.";
      case "s":
         return "...";
      case "t":
         return "-";
      case "u":
         return "..-";
      case "v":
         return "...-";
      case "w":
         return ".--";
      case "x":
         return "-..-";
      case "y":
         return "-.--";
      case "z":
         return "--..";
      case "0":
         return "-----";
      case "1":
         return ".----";
      case "2":
         return "..---";
      case "3":
         return "...--";
      case "4":
         return "....-";
      case "5":
         return ".....";
      case "6":
         return "-....";
      case "7":
         return "--...";
      case "8":
         return "---..";
      case "9":
         return "----.";
      case ".":
         return ".-.-.-";
      case ",":
         return "--..--";
      case "?":
         return "..--..";
      case "ñ":
         return "--.--";
   } //fin switch
}
