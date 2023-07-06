/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Dificultad: DIFÍCIL
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

function sucesionFibonacci() {
   
   let numA = 0;
   let numB = 1;

   for (let i = 0; i < 50; i++) {

      console.log(numA);

      //Almaceno momentáneamente la suma de los dos números anteriores
      let aux = numA + numB;

      //En el primer número coloco el número siguiente
      numA = numB;

      //Almaceno la suma del número anterior con el siguiente
      numB = aux;
   }
}
