/*
  Tarea 6 · DWEC · David Martínez Castro
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.
//       Por ejemplo: «Soy [nombre] [apellidos], tengo [edad] años y estudio [curso].»
const estudiante = {
  nombre: "David",
  apellidos: "Martínez Castro",
  edad: 23,
  curso: "2º de DAW",

  presentarse() {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}.`;
  }
};

function verFicha() {
  const salida = document.getElementById("salida1");
  salida.textContent = "";
  const ul = document.createElement("ul");
  ul.className = "list-group";
  const estudianteclaves = ["nombre", "apellidos", "edad", "curso"];

  estudianteclaves.forEach(
    function (clave) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = clave + ": " + estudiante[clave];
      ul.appendChild(li);
    }
  );

  const p = document.createElement("p");
  p.textContent = estudiante.presentarse();

  salida.appendChild(ul);
  salida.appendChild(p);

  console.log(estudiante);
}

function cumplirAnios() {
  estudiante.edad++;
  verFicha();
}

function quitarCurso() {
  // TODO: borra la propiedad curso con delete y vuelve a pintar la ficha.
  //       Fíjate en lo que sale ahora en el curso y explícalo en el README.
  delete (estudiante.curso);
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    console.log("No se ha borrado ningún color.");
  } else {
    const colquitado = colores.pop();
    mostrarColores();
    console.log(`Se ha sacado el color ${colquitado}`)
  }
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    console.log("No se ha borrado ningún color.");
  } else {
    const colquitado = colores.shift();
    mostrarColores();
    console.log(`Se ha sacado el color ${colquitado}`)
  }
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  let total = productos.length;

  const mensaje3 = document.querySelector("#mensaje3");
  mensaje3.textContent = `Hay ${total} productos.`;
}

function ordenarPorPrecio() {
  //       ¿Por qué una copia? Explícalo en el README.

  const productoscopia = [...productos];
  productoscopia.sort(function (a, b) {
    return a.precio - b.precio;
  })
  pintarProductos(productoscopia);
  const mensaje3 = document.querySelector("#mensaje3");
  mensaje3.textContent = `Están ordenados de más barato a más caro.`;
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  const mensaje3 = document.querySelector("#mensaje3");
  mensaje3.textContent = `Hay ${caros.length} productos de mas de 50€.`;
}

function buscarProducto() {
  // TODO: lee #buscarProducto (value, trim y toLowerCase). Si está vacío, avisa en #mensaje3.
  // TODO: con find(), el primer producto cuyo nombre en minúsculas contenga ese texto (includes).
  // TODO: find devuelve undefined si no encuentra nada: en ese caso, dilo en #mensaje3 y vacía la tabla.
  //       Si lo encuentra, píntalo solo a él: pintarProductos([encontrado]).
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje3 = document.querySelector("#mensaje3");
  const tabla = document.querySelector("#tablaProductos");

  if (texto == "") {
    mensaje3.textContent = `Escribe el nombre del producto que quieres buscar.`;

  } else {

    const producto = productos.find(
      function (producto) {
        return producto.nombre.toLowerCase().includes(texto);
      }
    )


    console.log(producto);
    if (producto === undefined) {
      mensaje3.textContent = `No se ha encontrado el producto.`;
      tabla.textContent = "";
    } else {
      pintarProductos([producto]);
      mensaje3.textContent = `Producto encontrado: ${producto.nombre}.`;
    }
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "David",
  notas: [1, 10, 10, 10, 10, 9],
  // TODO: método anadirNota(nota): si la nota no es un número (Number.isNaN) o no está entre 0 y 10, devuelve false;
  //       si es válida, la añade a this.notas con push y devuelve true.
  // TODO: método media(): si no hay notas devuelve 0; si hay, la suma (con reduce) dividida entre el número de notas.
  //       Recuerda la coma entre una propiedad y la siguiente.
  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  },
  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(
      function (sumado, nota) {
        return sumado + nota;
      },
      0);
  }
};

function mostrarNotas() {
  const notas = document.querySelector("#notas");
  const media = document.querySelector("#media");
  notas.textContent = "";

  alumno.notas.forEach(
    function (nota) {
      const span = document.createElement("span");
      span.classList.add("badge", "m-1");
      if (nota >= 5) {
        span.classList.add("text-bg-success");
      } else {
        span.classList.add("text-bg-danger");
      }
      span.textContent = nota;
      notas.append(span);
    }
  )

  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent =
      `Nota media: ${alumno.media().toFixed(2)}`;
  }


}

function anadirNota() {
  // TODO: si #nota está vacía, muestra un error en #error4 (quítale "d-none").
  //       Ojo: Number("") vale 0, así que esta comprobación va antes de convertir.
  // TODO: convierte el valor con Number() y llama a alumno.anadirNota(). Si devuelve false, muestra el error.
  // TODO: si ha ido bien, oculta el error, vacía la casilla y llama a mostrarNotas().
  const error4 = document.querySelector("#error4");
  
  const nota = document.querySelector("#nota");
  const texto = nota.value.trim();
  
  if (texto === "") {
    error4.classList.remove("d-none");
    error4.textContent = "Escribe una nota para añadirla.";
    return;
  }

  const valido  = alumno.anadirNota(Number(texto)); 

  if (!valido) {
    error4.classList.remove("d-none");
    error4.textContent = "Escribe un numero entre 10 y 0.";
    return;
  }

  document.querySelector("#error4").classList.add("d-none");
  nota.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
