/*
  Tarea 3 · DWEC · David Martínez Castro
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
  let variable;
  variable=0;
  const edad = 20;   
  console.log("edad =", edad, "→", typeof edad);
  console.log("numero =", numero, "→", typeof numero);
  console.log("estring =", estring, "→", typeof estring);
  console.log("booleano =", booleano, "→", typeof booleano);
  console.log("nulo =", nulo, "→", typeof nulo);
  console.log("indefinida =", indefinida, "→", typeof indefinida);
  console.log("bigint =", bigint, "→", typeof bigint);
  console.log("variable =", variable, "→", typeof variable);
  variable=0;
  console.log("variable =", variable, "→", typeof variable);
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

  const a = String(123);   // espero string
  console.log("a =", a, "→", typeof a); //espero string
  console.log("uno =", uno, "→", typeof uno);       // espero number
  console.log("dos =", dos, "→", typeof dos);       // espero number
  console.log("tres =", tres, "→", typeof tres);     // espero number
  console.log("cuatro =", cuatro, "→", typeof cuatro); // espero number
  console.log("cinco =", cinco, "→", typeof cinco);   // espero boolean
  console.log("seis =", seis, "→", typeof seis);     // espero boolean
  console.log("siete =", siete, "→", typeof siete);   // espero boolean
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");
  
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


  const nombre = "David";
  const ciclo = "Desarrollo de aplicaciones web";
  const curso = "2º";
  const aficion = "jugar videojuegos";
  let horasestudio = 72;horasestudio += horasestudio;
  const ficha = `Soy ${nombre}, estudio ${ciclo}, estoy en ${curso} y me gusta ${aficion} y esta semana he estudiado ${horasestudio} horas.`;
  alert(ficha);
  console.log(ficha);
  const fichaConMas = "Soy " + nombre + ", estudio " + ciclo + ", estoy en "+curso+" y me gusta " + aficion + " y esta semana he estudiado " + horasestudio + " horas.";
  console.log(fichaConMas);
  console.log(ficha === fichaConMas);
}
