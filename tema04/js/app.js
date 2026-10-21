/*
  Tarea 4 · DWEC · David Martínez Castro
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  // TODO: como sumar(), con el operador -

  // Leemos los dos números de las casillas (devuelven NaN si están vacías)
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  // Validación: si falta alguno de los dos números, avisamos en rojo y no operamos
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    // Ambos números son válidos: calculamos y mostramos el resultado en página y consola
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  // TODO: como sumar(), con el operador *

  // Leemos los dos operandos de las casillas
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  // Si falta algún número, mostramos el error en rojo y salimos sin operar
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    // Datos correctos: multiplicamos y mostramos el resultado
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  // TODO: como sumar(), con el operador /
  // TODO: si el número 2 es 0, muestra un error en rojo. Ojo: en JavaScript, 5 / 0 no da error, da Infinity.

  // Leemos el dividendo (n1) y el divisor (n2)
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  // Primer filtro: que ambas casillas tengan un número
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  // Segundo filtro: no se puede dividir entre 0 (JavaScript devolvería Infinity en vez de dar error)
  } else if (n2 === 0) {
    mostrar("El segundo número no puede ser 0.", "danger");
    console.warn("El segundo número no puede ser 0.");
  } else {
    // Todo correcto: dividimos y mostramos el resultado
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  // TODO: como sumar(), con el operador **

  // n1 es la base y n2 el exponente
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  // Si falta algún número, error en rojo y no se calcula nada
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    // Elevamos n1 a la potencia n2 con el operador **
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
  
}

function modulo() {
  // TODO: el resto de la división, con el operador %
  // TODO: si el número 2 es 0, muestra un error en rojo (5 % 0 da NaN).

  // Leemos dividendo (n1) y divisor (n2)
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  // Comprobamos que ambas casillas tengan un número
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  // El resto de dividir entre 0 da NaN, así que lo tratamos como error
  } else if (n2 === 0) {
    mostrar("El segundo número no puede ser 0.", "danger");
    console.warn("El segundo número no puede ser 0.");
  }  else {
    // Calculamos el resto de n1 entre n2 con el operador %
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // Leemos los dos números que vamos a comparar
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  
  // Si falta alguno, no se puede comparar: mostramos error en rojo
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Cual es mayor: falta algún número");
  // Caso 1: el primero es estrictamente mayor
  } else if (n1 > n2) {
    mostrar("El primer número es mayor.");
  // Caso 2: el segundo es estrictamente mayor
  }  else if (n1 < n2){
    mostrar("El segundo número es mayor.");
  // Caso 3: si no es mayor ni menor, solo queda que sean iguales
  } else {
    mostrar("Son iguales.");
  }
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.

  // Solo usamos el número 1
  const n1 = leerNumero("numero1");
  // Aquí guardaremos el texto del resultado: "par", "impar" o "ni par ni impar"
  let parimp = "";
  // Ternario: si el resto de dividir entre 2 es 0 es par; si no, impar
  ((n1 % 2) === 0) ? parimp = "par" : parimp = "impar";
  // Si tiene decimales, no es ni par ni impar (sobrescribe el valor anterior)
  if (!Number.isInteger(n1)) { 
    parimp = "ni par ni impar";
  }
  // Si la casilla está vacía (NaN), solo pedimos que se introduzca un número...
  if (Number.isNaN(n1)){ 
    mostrar("Introduce un número en número 1.");
  } else {
    // ...y si hay un número válido, mostramos el resultado en la página
    mostrar(`El número es ${parimp}.`);
  }
  
  
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  // "veces" es el número de repeticiones que pide el usuario
  const veces = leerNumero("numero1");
  // Borramos la salida anterior para empezar con la página limpia
  limpiarSalida();
  // Cuenta las vueltas que se dan realmente
  let contador = 0;
  // Validación: el valor debe existir, ser entero y no pasar del máximo permitido
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar("Error en el bucle.", "danger");
  } else {
    // Bucle for: i (declarada con let, solo vive dentro del bucle) empieza en 1 y llega hasta "veces" (incluido)
    for (let i = 1;i <= veces;i++){
      console.log(`for : ${i}`);
      anadirLinea(`for · repetición ${i} de ${veces}.`);
      contador++;
    }
    // Al terminar, mostramos el total de repeticiones realizadas
    anadirLinea(`Total: ${contador} repeticiones`);
    console.log(`Total: ${contador}`);
  }
  // TODO: si el número falta, tiene decimales o pasa de MAXIMO_REPETICIONES, muestra un error en rojo.
  // TODO: si no, repite con un for tantas veces como diga «veces». En cada vuelta:
  //         anadirLinea(`for · repetición ${i} de ${veces}`);
  //       y cuenta las vueltas en una variable contador.
  // TODO: al terminar, añade una línea con el total: «Total: 5 repeticiones» o «Total: 1 repetición».
}

function bucleWhile() {
  // TODO: lo mismo que bucleFor(), con un while.

  // Número de repeticiones pedido y limpieza de la salida anterior
  const veces = leerNumero("numero1");
  limpiarSalida();
  // Contador de vueltas realizadas
  let contador = 0;
  // Misma validación que en bucleFor(): existe, es entero y no supera el máximo
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar("Error en el bucle.", "danger");
  } else {
    // En el while, la variable de control se declara fuera del bucle...
    let i = 1;
    // ...y la condición se comprueba ANTES de cada vuelta
    while (i <= veces){
      console.log(`while : ${i}`);
      anadirLinea(`while · repetición ${i} de ${veces}.`);
      contador++;
      // Hay que incrementar i a mano; si no, el bucle sería infinito
      i++;
    }
    // Línea final con el total de repeticiones
    anadirLinea(`Total: ${contador} repeticiones`);
    console.log(`Total: ${contador}`);
  }
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?

  // Número de repeticiones pedido y limpieza de la salida anterior
  const veces = leerNumero("numero1");
  limpiarSalida();
  // Contador de vueltas realizadas
  let contador = 0;
  // Misma validación que en los otros bucles
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar("Error en el bucle.", "danger");
  } else {
    let i = 1;
    // do...while: el cuerpo se ejecuta SIEMPRE al menos una vez,
    // porque la condición se comprueba al final. Por eso con 0 o un
    // negativo hace igualmente una repetición.
    do {
      console.log(`do while : ${i}`);
      anadirLinea(`do while · repetición ${i} de ${veces}.`);
      contador++;
      i++;
    }while (i <= veces);
    // Línea final con el total de repeticiones
    anadirLinea(`Total: ${contador} repeticiones`);
    console.log(`Total: ${contador}`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.

  // Número de repeticiones, limpieza de salida y contador de vueltas
  const veces = leerNumero("numero1");
  limpiarSalida();
  let contador = 0;
  // Validación: existe, es entero y no pasa del máximo
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar("Error en el bucle.", "danger");
  } else {
    // Recorremos de 1 a "veces"
    for (let i = 1;i <= veces;i++){
      // Ternario para elegir el color del badge: pares en "primary", impares en "secondary"
      ((i % 2) === 0) ? anadirBadge(i,"primary") : anadirBadge(i,"secondary");
      anadirLinea(`for · repetición ${i} de ${veces}.`);
      contador++;

      //((n1 % 2) == 0) ? anadirBadge(i,"primary") : anadirBadge(i,"secondary");
    }
    // Total de repeticiones al terminar el bucle
    anadirLinea(`Total: ${contador} repeticiones`);
  }
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.

  // Número de repeticiones, limpieza de salida y contador de vueltas
  const veces = leerNumero("numero1");
  limpiarSalida();
  let contador = 0;
  // Validación del número de repeticiones
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar("Error en el bucle.", "danger");
  } else {
    // Variable de control del while, declarada fuera del bucle
    let i = 1;
    while (i <= veces){
      // Pares en "primary", impares en "secondary", elegido con el ternario
      ((i % 2) === 0) ? anadirBadge(i,"primary") : anadirBadge(i,"secondary");
      anadirLinea(`while · repetición ${i} de ${veces}.`);
      contador++;
      // Incremento manual para no caer en un bucle infinito
      i++;
    }
    // Total de repeticiones al terminar
    anadirLinea(`Total: ${contador} repeticiones`);
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.

  // Número de repeticiones, limpieza de salida y contador de vueltas
  const veces = leerNumero("numero1");
  limpiarSalida();
  let contador = 0;
  // Validación del número de repeticiones
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES){
    mostrar("Error en el bucle.", "danger");
  } else {
    let i = 1;
    // El cuerpo se ejecuta al menos una vez, aunque "veces" sea 0 o negativo
    do {
      // Pares en "primary", impares en "secondary"
      ((i % 2) === 0) ? anadirBadge(i,"primary") : anadirBadge(i,"secondary");
      anadirLinea(`do while · repetición ${i} de ${veces}.`);
      contador++;
      i++;
    }while (i <= veces);
    // Total de repeticiones al terminar
    anadirLinea(`Total: ${contador} repeticiones`);
  }
}
