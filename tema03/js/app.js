/*
  Tarea 3 · DWEC · [Tu nombre y apellidos]
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");
  numero = 1;
  estring = "string";
  booleano = true;
  nulo = null;
  indefinida = undefined;
  bigint = 10n;
  let variable = 0;
  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);
  console.log("numero =", numero, "→", typeof numero);
  console.log("estring =", estring, "→", typeof estring);
  console.log("booleano =", booleano, "→", typeof booleano);
  console.log("nulo =", nulo, "→", typeof nulo);
  console.log("indefinida =", indefinida, "→", typeof indefinida);
  console.log("bigint =", bigint, "→", typeof bigint);
  console.log("variable =", variable, "→", typeof variable);

  // TODO: declara una variable de cada tipo que falta: string, boolean, null, undefined y bigint (como 10n).
  //       const si no va a cambiar; let para al menos una a la que des valor más tarde.
  // TODO: muestra en la consola el valor y el typeof de cada una, como en el ejemplo.
  // TODO: da valor a tu variable let y vuelve a mostrar su typeof.
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---"); 
  uno = Number("123"); 
  dos =Number("12abc"); 
  tres =Number("");
  cuatro =Number(true); 
  cinco =Boolean(0); 
  seis=Boolean("texto");
  siete= Boolean("");
  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero [tu predicción]
  console.log("a =", a, "→", typeof a);
  console.log("uno =", uno, "→", typeof uno);
  console.log("dos =", dos, "→", typeof dos);
  console.log("tres =", tres, "→", typeof tres);
  console.log("cuatro =", cuatro, "→", typeof cuatro);
  console.log("cinco =", cinco, "→", typeof cinco);
  console.log("seis =", seis, "→", typeof seis);
  console.log("siete =", siete, "→", typeof siete);

  // TODO: el resto de conversiones obligatorias, cada una con su «espero …»:
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
  // TODO: muestra en la consola el resultado y el typeof de cada una.
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");
  
  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]
  console.log()
  // TODO: cinco expresiones más que mezclen tipos (al menos dos inventadas por ti), cada una con su «espero …».

  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false
  console.log('"5" - 1 →', "5" - 1);  // espero 4
  console.log('"5" + 2 →', "5" + 2); // espero 52
  console.log('5 + "2" →', 5 + "2"); // espero 7
  console.log('5 + true →', 5 + true); // espero 6
  console.log('false + 1 →', false + 1); // espero true
  console.log('5 == "5" →', 5 == "5");   //espero true
  console.log('5 === "5" →', 5 === "5");   //espero false
  console.log('0 == false →', 0 == false);   //espero true
  console.log('0 === false →', 0 === false);   //espero false
  console.log('null == undefined →', null == undefined);   //espero true
  console.log('null === undefined →', null === undefined);   //espero false
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "David";
  const ciclo = "Desarrollo de aplicaciones web";
  const aficion = "jugar videojuegos";
  // TODO: ciclo, curso y una afición, también con const.
  let horasestudio = 72;
  // Un dato que cambia, con let
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.
  horasestudio++;
  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}, estudio ${ciclo}, me gusta ${aficion} y esta semana he estudiado ${horasestudio} horas.`;
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.
  alert(ficha);
  console.log(ficha);
  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola
  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + ", me gusta " + aficion + " y esta semana he estudiado " + horasestudio + " horas.";
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.
  console.log(fichaConMas);
  console.log(ficha === fichaConMas);
  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
}
