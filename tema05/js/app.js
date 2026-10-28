/*
  Tarea 5 · DWEC · David Martínez Castro
  Manipular el DOM.
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
  const tercero = document.querySelectorAll("#contenido p");
  tercero[2].classList.add("text-danger");
  console.log('Se han aplicado los cambios.');
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
    console.log('No hay párrafos que eliminar');
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
  console.log(`Se han activado ${parrafos.length} párrafos`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  let nuevoTexto = document.querySelector('#nuevoTexto').value;
  const error4 = document.querySelector('#error4');
  const textoantiguo = document.querySelector('#contenido p');

  nuevoTexto = nuevoTexto.trim();
  if (nuevoTexto !== "") {
    textoantiguo.textContent= nuevoTexto;
    error4.classList.add('d-none');
    console.log('Texto añadido.');
  } else {
    error4.classList.remove('d-none');
    console.log('Error al cambiar texto.');
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
    console.log('HTML cambiado.');
  } else {
    error4.classList.remove('d-none');
    console.log('Error al cambiar HTML.');
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
    console.log('Error, no se puede añadir una tarea vacía.');
  } else {
    error.classList.add('d-none');
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
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
  error.textContent = 'No hay ninguna tarea completada que borrar.';

  if (marcadas.length === 0){
    error.classList.remove('d-none');
    console.log('Error, no hay tarea que borrar.');
    const tareas = document.querySelectorAll('#listaTareas li');
    let contadortareas = 0;
    for (const li of tareas){
      contadortareas++;
    }   
    totaltareas.textContent = `${contadortareas}`;
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
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  const datopunto = document.querySelector('#datoPunto');
  if (ancho >= 1400) {
  datopunto.textContent = 'xxl (desde 1400 px)';
  } else if (ancho >= 1200) {
    datopunto.textContent = 'xl (de 1200 a 1399 px)';
  } else if (ancho >= 992) {
    datopunto.textContent = 'lg (de 992 a 1199 px)';
  } else if (ancho >= 768) {
    datopunto.textContent = 'md (de 768 a 991 px)';
  } else if (ancho >= 576) {
    datopunto.textContent = 'sm (de 576 a 767 px)';
  } else {
    datopunto.textContent = 'xs (menos de 576 px)';
  }
  let pantalla = `${screen.width} x ${screen.height}`;
  document.querySelector('#datoPantalla').textContent = pantalla;
  document.querySelector('#datoUrl').textContent = location.href;
  document.querySelector('#datoIdioma').textContent = navigator.language;
  console.log('Datos de ventana mostrados');
}
