/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Dificultad: MEDIA
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

//numero que solo puede dividirse por si mismo, y por 1

function esPrimo(numero) {
   if (numero < 2) 
    return false;

   for (let i = 2; i < numero; i++) {
      if (numero % i == 0) 
        return false;
   }
   return true;
}

for (let i = 1; i <= 100; i++) {
   if (esPrimo(i)) 
    console.log(i + " es primo");
}
