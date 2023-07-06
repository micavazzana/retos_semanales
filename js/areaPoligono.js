/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Dificultad: FÁCIL
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y 
 * retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularArea(poligono){
    let area;    
    if(poligono instanceof Triangulo)
        area = (poligono.base * poligono.altura)/2;
    else if (poligono instanceof Cuadrado || poligono instanceof Rectangulo)
        area = poligono.base * poligono.altura;
    return area;
}

class Poligono{
    base;
    altura;

    constructor(b,a)
    {
        this.base = b;
        this.altura = a;
    }
}
class Triangulo extends Poligono {
    constructor(b,a)
    {
        super(b,a)
    }
}
class Rectangulo extends Poligono{
    constructor(b,a)
    {
        super(b,a)
    }
}
class Cuadrado extends Poligono{
    constructor(b,a)
    {
        super(b,a)
    }
}

let t = new Triangulo(2,5);
let c = new Cuadrado(3,3);
let r = new Rectangulo(5,3);

console.log(`El area del triangulo es: ${calcularArea(t)}`);
console.log(`El area del cuadrado es: ${calcularArea(c)}`);
console.log(`El area del rectangulo es: ${calcularArea(r)}`);
