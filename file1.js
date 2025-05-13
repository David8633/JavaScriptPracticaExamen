/*JAVASCRIPT
EJERCICIOS DE TOMA DE CONTACTO PARA ALUMNADO QUE
ABANDONÓ PROGRAMACIÓN.*/

//1. Calcular la suma de dos números predefinidos.
let n1 = 1;
let n2 = 2;

let suma = n1 + n2;
console.log(suma);
//2. Verificar si un número dado es par o impar.
let n3 
let resultado 

if (n3%2==0 ){
    resultado = "par";
}else{
    resultado = "impar";
}

console.log(resultado);
//3. Calcular el factorial de un número dado.
let n4 = 8;
let factorial = 1;
for ( let n = 1; n<n4; n++){
    factorial *= n
}

console.log(factorial);
//4. Imprimir los números del 1 al 10.
let min = 0;
let max = 10;

for(min; min<=max; min++){
    console.log(min);
}


//5. Calcular la suma de los números pares del 1 al 100.
min = 0;
max = 100;
let suma1 = 0;

for(min; min<=max; min++){
    suma1+=min;
}

console.log(suma1);
//6. Generar la tabla de multiplicar de un número dado del 1 al 10.
let numDado = 1;

function tablaMultipdlicar() { 
  let numMultiplic = 0;
  while(numMultiplic<=10){
  console.log(numDado*numMultiplic);
  numMultiplic++;}
}
//7. Verificar si un número dado es primo.

function esPrimo(numero) {
    let estado = true;
    if(numero<=1){
        estado = false;
    }else if(numero%2==0 && numero>2){
        estado = false;
    }
    return estado;
}

console.log(esPrimo(8));
/* 1. Que el número se introduzca por consola.
 2. Introducir el resto en una función.
 3. Que te devuelva si ese número es primo o no.
*/

//8. Calcular el promedio de una serie de números predefinidos.
let numepredefinido = 9;
let cantidaddeveces = 0 ;
let i = 0;
let array = [1,2,3,4,2,4,2,2];
let suma = 0;
while(i<=array.length){
   suma+=array[i];
}

console.log(suma/cantidaddeveces);

//9. Buscar el número mayor en un array dado.
 numepredefinido = 9;
 let nummayor = 0 ;
 let y = 0;
array = [1,2,3,4,2,4,2,2];
let suma = 0;
while(y<=array.length){
  if(nummayor<array[y]){
    nummayor= array[y]  }
}
//10. Ordenar un array de números en orden ascendente.
let array = [8 ,4,75,784,57,48] ;

console.log(array.sort);
//11. ORDENAR UN ARRAY DE PALABRAS por orden alfabético
let array1 = ['Aro', 'Magdalena','burrra', 'lobo', 'casa'];

console.log(array1.sort);
//12.Ordenar un array de objetos por una propiedad específica (por
//ejemplo, edad)


function persona(nombre, altura, peso, anio)  {
    this.nombre = nombre,
    this.altura = altura,
    this.peso = peso,
    this.anio = anio
}

function getEdad(){
    return this.edad;
}

const persona1 = new persona("Pedro",2,3,45);
const persona2 = new persona("Juan",2,3,9);
const persona3 = new persona("Luisa",2,3,90);

let array2 = [persona1,persona2,persona3] ;



array2.sort((persona1,persona2)=> persona1.getEdad()-persona2.getEdad());

//13. ORDENAR UN ARRAY DE OBJETOS POR MÚLTIPLES PROPIEDADES (P.e. apellido y luego nombre)
14. Calcular la potencia de un número dado.
Módulo: Lenguajes de Marcas y Sistemas de gestión empresarial
Profesora: Marta López Martos
EJERCICIOS CON CADENAS
15. Revertir una cadena de caracteres
16. Convertir una cadena en mayúsculas.
17. Escribe una función llamada longitud que reciba como parámetro de
entrada una cadena de texto y devuelva el número de letras que tiene.
Por ejemplo la siguiente llamada a la función:
longitud("Ana"); Debería devolver 3.
18. Escribe una función llamada devuelvePrimeraLetra que reciba como
parámetro de entrada una cadena de texto y devuelva la primera letra.
19. Escribe una función llamada devuelveUltimaLetra que reciba como
parámetro de entrada una cadena de texto y devuelva la última letra.
20. Escribe una función llamada devuelveEnesimaLetra que reciba como
parámetro de entrada una cadena de texto y un número y devuelva la
letra que ocupe la posición indicada por el número.
21. Utilizando el método substring imprimir las letras que van desde la
posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.
22. Hacer una función devuelveMasLarga que reciba como parámetro de
entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas
cadenas sean iguales, devolveremos la correspondiente al primer
parámetro de la función.
23. Hacer una función devuelveMasLarga2 que reciba como parámetro de
entrada tres cadenas de texto y devuelva la mayor. En caso de que al
menos dos cadenas tengan igual longitud, devolveremos el texto Hay al
menos dos cadenas iguales.
24. Hacer una función generarNombre que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando las tres
primeras letras de cada palabra.
25. Hacer una función generarNombre2 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando la
última letra de cada palabra.
Módulo: Lenguajes de Marcas y Sistemas de gestión empresarial
Profesora: Marta López Martos
26. Hacer una función generarNombre3 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando las tres
últimas letras de cada palabra.
27. Hacer una función tieneLetra que reciba como parámetro de entrada
una cadena de texto y una letra y devuelva true si la letra esta
presente en la palabra y false si no lo esta. Utilizar para ello el
método indexOf.
28. Realizar la evaluación del ejercicio anterior sin tener en cuenta
si la letra pasada como parámetro está en mayúsculas o minúsculas
29. Hacer una función crearPalabra que reciba como parámetro de entrada
una letra y un número y genere una nueva palabra que tenga la letra
introducida repetida tantas veces como indique el número.
30. Completar el ejercicio anterior haciendo que en la nueva palabra
generada las letras estén en mayúsculas.
31. Hacer una función addGuiones que reciba como parámetro de entrada
una cadena texto y devuelva una nueva cadena que tendrá un guión medio
detrás de cada letra. Utilizar para ello un bucle for.
32. Hacer una función contadorDeLetras que reciba como parámetro de
entrada una cadena de texto y una letra y devuelva el número de veces
que esa letra está presente en la palabra. Utilizar para ello un bucle
for.
33. Realizar la evolución del ejercicio anterior sin tener en cuenta si
la letra pasada como parámetro está en mayúsculas o minúsculas Hacer
una función contadorDeLetras2 que reciba como parámetro de entrada dos
cadenas de texto y una letra y devuelva la cadena de texto en la que
dicha letra está más presente. Utilizar para ello un bucle for. No
tener en cuenta si la letra pasada como parámetro está en mayúsculas o
minúsculas.
34. Escribe una función llamada toCase que reciba como parámetro de
entrada una cadena de texto y devuelva esa misma cadena de texto en
minúsculas, un guión medio y de nuevo esa misma cadena de texto en
mayúsculas.
Por ejemplo, la siguiente llamada a la función:
toCase("Pablo");
Debería devolver: pablo-PablO
Módulo: Lenguajes de Marcas y Sistemas de gestión empresarial
Profesora: Marta López Martos
35. Escribe una función llamada shortcut que tome dos cadenas de texto
y devuelva la inicial de cada una de las dos cadenas.
Por ejemplo, la llamada a la función:
shortcut('Amnesty', 'International');
Debería devolver «AI».
36. Escribe una función llamada firstChar, que devuelva la primera
letra que no sea un espacio cuando una cadena de texto es pasada.
Para ello, podemos eliminar los espacios en blanco que pudiera haber al
principio y al final de la cadena de texto utilizando el método trim().
Si no estás muy seguro/a de cómo funciona este método, ¡consúltalo en
internet, que no es tan difícil!.
Por ejemplo, la llamada a la función:
firstChar(" Rosa Parks ");
Debería devolver R.
37. Escribe una función llamada indexOfIgnoreCase que reciba dos
cadenas de texto y devuelva la posición de la primera ocurrencia de la
segunda cadena de texto en la primera. La función no debería tener en
cuenta mayúsculas y minúsculas.
Por ejemplo:
indexOfIgnoreCase("bit","it");
y
indexOfIgnoreCase("bit","IT");
deberían devolver 1
38. Escribe una función llamada firstWord que reciba como parámetro de
entrada una cadena de texto y devuelva la primera palabra de esa
cadena. La primera palabra de la cadena serán todos los caracteres que
hay hasta el primer espacio.
Por ejemplo:
firstWord("see and stop");
Debería devolver «see».*/