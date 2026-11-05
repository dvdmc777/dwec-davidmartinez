
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
    return suma;
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
  );
  console.log(alumno.media());
  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = `Nota media: ${alumno.media().toFixed(2)}`;
  }


}

function anadirNota() {
  const error4 = document.querySelector("#error4");

  const nota = document.querySelector("#nota");
  const texto = nota.value.trim();

  if (texto === "") {
    error4.classList.remove("d-none");
    error4.textContent = "Escribe una nota para añadirla.";
    return;
  }

  const valido = alumno.anadirNota(Number(texto));

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
  const dobles = numeros.map(n => n * 2);
  const salida = document.querySelector("#salida5");
  console.log(numeros);
  salida.textContent = "[Dobles: " + dobles + "] [Originales: " + numeros + "]";
  return salida.textContent;
}

function verPares() {
  const pares = numeros.filter(n => n % 2 === 0);
  const salida = document.querySelector("#salida5");
  salida.textContent = "[Pares: " + pares + "] [Originales: " + numeros + "]";
  return salida.textContent;
}

function verSuma() {
  const salida = document.querySelector("#salida5");
  const suma = numeros.reduce((total, n) => total + n, 0);
  salida.textContent = "[Suma: " + suma + "] ";
  return salida.textContent;
}

function verCadena() {
  const salida = document.querySelector("#salida5");
  const pares = verPares();
  const dobles = verDobles();
  const suma = verSuma();

  document.getElementById("salida5").textContent =
    pares + " ||  " + dobles +
    " ||  " + suma;
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const ciudadeshtm = document.querySelector("#ciudades");

 while (ciudadeshtm.firstChild) {
    ciudadeshtm.removeChild(ciudadeshtm.firstChild);
    console.log("guile");
  }
  ciudades.forEach(
    function (ciudad, posicion) {
      console.log("foreach");
      const span = document.createElement("span");
      span.textContent = `${posicion}  ·  ${ciudad}`;
      span.classList.add("badge", "text-bg-primary", "m-1");
      ciudadeshtm.append(span);
      console.log(ciudadeshtm.children.length);
    }
  );
}

function verSlice() {
  const ciudadesslic = ciudades.slice(2, 5);
  const salida6 = document.querySelector("#salida6");

  salida6.textContent = `slice(2, 5) devuelve: ${ciudadesslic} Siguen quedando ${ciudades.length} ciudades en el array.`;
}

function hacerSplice() {
  const salida6 = document.querySelector("#salida6");
  if (ciudades.length < 3) {
    salida6.textContent = "Hay menos de 3 ciudades. Debes restaurar el array.";
    return;
  }

  const eliminadas = ciudades.splice(2, 2);

  salida6.textContent = `splice(2, 2) devuelve: ${eliminadas}. ` + `Ahora quedan ${ciudades.length} ciudades.`;

  mostrarCiudades();
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];

  document.querySelector("#salida6").textContent = "Se ha restaurado el array original.";

  mostrarCiudades();
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();

  if (nombre === "") {
    document.querySelector("#salida6").textContent = "Escribe el nombre de una ciudad para buscarla.";
    return;
  }

  const existe = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);

  document.querySelector("#salida6").textContent =
    `includes("${nombre}"): ${existe}. ` +
    `indexOf("${nombre}"): ${posicion}.`;
}

mostrarCiudades();
