/*
  Tarea 7 · DWEC · David Martínez Castro
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  const descuentofinal = base - (base * descuento) / 100;
  return descuentofinal + (descuentofinal * iva) / 100;
}
console.log(calcularPrecio(100));

function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const base = document.querySelector("#base").value;
  const iva = Number(document.querySelector("#iva").value);
  const descuento = document.querySelector("#descuento").value;
  const error1 = document.querySelector("#error1");

  if (base === "" || base < 0) {
    error1.classList.remove("d-none");
    return;
  }

  let precio;

  if (descuento === "") {
    precio = calcularPrecio(base, iva);
  } else if (descuento >= 0 && descuento <= 100) {
    precio = calcularPrecio(base, iva, descuento);
  }
  error1.classList.add("d-none");

  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(Number(base))}`,
    `Descuento: ${descuento}%`,
    `IVA: ${iva}%`,
    `Precio final: ${formatearEuros(precio)}`
  ]);
  console.log(precio);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}


function verTitulos() {
  const titulos = peliculas.map(pelicula => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter(pelicula => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce(((total, pelicula) => total + pelicula.duracion), 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find(pelicula => pelicula.anio < 1990);
  console.log(antigua);
  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay ninguna pelicula anteriior a 1990.";
    pintarLista("#salida2", []);
  } else {
    pintarLista("#salida2", [comoTexto(antigua)]);
  }
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  let nuevo = [];
  for (const elemento of lista) {
    nuevo.push(operacion(elemento));
  }
  return nuevo;
}

function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {
  let cuenta = 0;
  return () => {
    cuenta = cuenta + paso;
    return cuenta;
  }
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  // TODO: lo mismo con contarDeCinco y #cuenta5.
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  }

  media() {
    let todas = 0;
    if (this.notas.length === 0) {
      return 0;
    } else {
      todas = this.notas.reduce((total, elemento) => {
        return total + elemento;
      }, 0);
      todas = todas / this.notas.length;
      return todas;
    }
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en TecnoSur`;
  }
}

const alumnos = [];

const alumno = new Alumno("David Martínez", "2º DAW");
alumno.anadirNota(10);
alumno.anadirNota(8);

const alumnofct = new AlumnoFCT("Javier Barreda", "2º DAW", "Medac");
alumnofct.anadirNota(1);
alumnofct.anadirNota(4);

alumnos.push(alumno);
alumnos.push(alumnofct);

function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombre = document.querySelector("#nombre5").value.trim();
  const empresa = document.querySelector("#empresa5").value.trim();
  const curso = document.querySelector("#curso5").value.trim();
  const notas = document.querySelector("#notas5").value.trim();
  const error5 = document.querySelector("#error5");

  let alumno;
  if (nombre === "") {
    error5.textContent = "Tienes que poner un nombre.";
    error5.classList.remove("d-none");
    return;
  } else if (empresa === "") {
    alumno = new Alumno(nombre, curso);
  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);
  }

  console.log(alumno);
  console.log(alumno.notas)
  let notasarray;

  if (notas !== "") {
    notasarray = notas.split(",").map((texto) => Number(texto.trim()));

    if (notasarray.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10)) {
      error5.textContent = "Las notas tienen que ser números entre 0 y 10.";
      error5.classList.remove("d-none");
      return;
    } else {
      notasarray.forEach(nota => {
        alumno.anadirNota(nota)
      });
    }
  }
  error5.classList.add("d-none");

  document.querySelector("#nombre5").value = "";
  document.querySelector("#curso5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";
  alumnos.push(alumno);
  pintarAlumnos();
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  let hoy = new Date();
  let diasfaltan;
  hoy.setHours(0, 0, 0, 0);
  diasfaltan = fecha - hoy;
  diasfaltan = Math.round(diasfaltan / (1000 * 60 * 60 * 24));
  return diasfaltan;
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const faltan = diasHasta(fecha);
  const nombreFecha = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (faltan === 0) {
    salida.textContent = `Ese día es hoy, ${nombreFecha}.`;
  } else if (faltan < 0) {
    salida.textContent = `Fue hace ${Math.abs(faltan)} días, ${nombreFecha}.`;
  } else if (faltan > 0) {
    salida.textContent = `Faltan ${faltan} días, será ${nombreFecha}.`;
  }
}

function iniciales(nombreCompleto) {
  const nombre = nombreCompleto.trim().split(" ").filter((palabra) => palabra !== "").map(palabra => palabra[0].toUpperCase()).join("");
  return nombre;
}

function crearUsuario(nombreCompleto) {
  const numero = Math.floor(Math.random() * 1000);
  return iniciales(nombreCompleto).toLowerCase() + String(numero).padStart(3, "0");
}

function mostrarIniciales() {
  const nombre = document.querySelector("#nombre6");
  const salida = document.querySelector("#salida6b");
  if (nombre.value === "") {
    salida.textContent = "El nombre está vacío.";
  } else {
    salida.textContent = `Iniciales: ${iniciales(nombre.value)} · usuario: ${crearUsuario(nombre.value)}.`;
  }
}
