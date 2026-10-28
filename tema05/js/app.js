/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");
  const tercero = document.querySelector("#contenido p:nth-of-type(3)");
  tercero.classList.add("text-danger");
  console.log('Se han aplicado los cambios.')
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const parrafo = document.createElement("p");
  let numparr = document.querySelector("#contenido").children.length +1;
  parrafo.textContent = `Párrafo nuevo ${numparr}`;
  document.querySelector("#contenido").append(parrafo);

  const aviso2 = document.querySelector("#aviso2");
  aviso2.classList.add("d-none");
  console.log('Párrafo añadido.');
}

function eliminarUltimo() {
  const ultparr = document.querySelector("#contenido").lastElementChild;
  if (ultparr === null) {
    const aviso2 = document.querySelector("#aviso2");
    aviso2.classList.remove("d-none");
  } else {
    ultparr.remove();
    console.log('Párrafo eliminado.');
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");
  let parractiv = 0;
  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");      
    });

  }
  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }
  console.log(`Se han activado ${parrafos.length}`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  let nuevoTexto = document.querySelector('#nuevoTexto').value;
  const error4 = document.querySelector('#error4');
  const textoantiguo = document.querySelector('#contenido p').firstChild;

  nuevoTexto = nuevoTexto.trim();
  if (nuevoTexto !== "") {
    textoantiguo.textContent= nuevoTexto;
    error4.classList.add('d-none');
    console.log('Texto añadido.')
  } else {
    error4.classList.remove('d-none');
    console.log('Error al cambiar texto.')
  }
}

function cambiarConHtml() {
  let nuevoTexto = document.querySelector('#nuevoTexto').value;
  const error4 = document.querySelector('#error4');
  const textoantiguo = document.querySelector('#contenido p');

  nuevoTexto = nuevoTexto.trim();
  if (nuevoTexto !== "") {
    textoantiguo.innerHTML= nuevoTexto;
    error4.classList.add('d-none');
    console.log('HTML cambiado.')
  } else {
    error4.classList.remove('d-none');
    console.log('Error al cambiar HTML.')
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  let texttarea = document.querySelector('#tareaInput').value;
  texttarea = texttarea.trim();
  const error = document.querySelector('#error5');
  error.textContent = 'No puedes añadir una tarea vacía.';

  if (texttarea === ''){
    error.classList.remove('d-none');
    console.log('Error, no se puede añadir una tarea vacía.') 
  } else {
    error.classList.add('d-none');
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span')
    li.classList.add('list-group-item');
    input.classList.add('form-check-input');
    li.value = '';
    input.type = 'checkbox';
    span.textContent = texttarea;
    li.appendChild(input);
    li.appendChild(span);

    const tareas = document.querySelector('#listaTareas');
    tareas.appendChild(li);

    const contadortareashtml = document.querySelector('#totalTareas');
    const tareasli = document.querySelectorAll('#listaTareas li');
    let contadortareas = 0;
    for (const li of tareasli){
      contadortareas++;
    }   
    contadortareashtml.textContent = contadortareas;
    console.log(`Total de tareas: ${contadortareas}`);    
  }
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll('#listaTareas li input:checked');
  const error = document.querySelector('#error5');  
  const totaltareas = document.querySelector('#totalTareas'); 
  error.textContent = 'No hay ninguna tarea que borrar.';

  if (marcadas.length === 0){
    error.classList.remove('d-none');
    console.log('Error, no hay tarea que borrar.');
    const tareas = document.querySelectorAll('#listaTareas li');
    let contadortareas = 0;
    for (const li of tareas){
      contadortareas++;
    }   
    totaltareas.textContent = `${contadortareas}`;
    error.classList.add('d-none');
    console.log(`Total de tareas: ${contadortareas}`);
  } else {
    for (const li of marcadas){
      li.parentElement.remove();
    }
    const tareas = document.querySelectorAll('#listaTareas li');
    let contadortareas = 0;
    for (const li of tareas){
      contadortareas++;
    }   
    totaltareas.textContent = `${contadortareas}`;
    error.classList.add('d-none');
    console.log(`Total de tareas: ${contadortareas}`);
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  const datopunto = querySelector.
  if(ancho < 576) {
  datoPunto.textContent = 'xs';
} else if (1) {
    
  }
  document.querySelector("")
  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
