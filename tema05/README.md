# Tarea 5 · Manipular el DOM

**Autor:** David Martínez Castro · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

En esta carpeta está la práctica del tema 5 de desarrollo en entorno cliente y y se puede ver abriendo el html con live server y la consola con f12.

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

Se ve mi nombre y los párrafos de partida, también los bostones de los tres primeros ejercicios.

### b) Ejercicios 1 y 2

<img src="capturas/b-ej1-ej2.png" alt="Los párrafos después de aplicar los cambios y añadir dos párrafos" width="600">

Al pulsar aplicar cambios, ha cambiado el texto del primer párrafo,el color de fondo del segundo y el color de la letra del tercero.
He usado getelementById, querySelector y querySelectorAll.
Al pulsar añadir parrafo se añade un párrafo y he usado querySelector;

### c) Ejercicio 3: resaltado al pasar el ratón

![Un párrafo resaltado con el ratón encima](capturas/c-ej3-resaltado.png)

Está resaltado el primer párrafo y si añades nuevos parrafos el  resaltado no se aplicará a los nuevos hasta que pulses de nuevo activar resaltado.

### d) Ejercicio 4: `<b>hola</b>` con innerHTML

<img src="capturas/d-ej4-innerhtml.png" alt="El primer párrafo tras usar innerHTML" width="600">

Cuando usabas Cambiar texto las etiquetas de html se incluían en el contenido del parrafo, mientras que con innerHTML se aplican las etiquetas y el contenido aparece en negrita.

### e) Ejercicio 5: la lista de tareas

![La lista con tres tareas y una marcada](capturas/e-ej5-lista.png)

Se ven las tres tareas pedidas y una de ellas marcada.

### f) Ejercicio 6: los datos de la ventana en el móvil

<img src="capturas/f-ej6-movil.png" alt="Los datos de la ventana en el modo móvil" width="300">

En el movil sale como xs y en el ordenador como xxl.

## Reflexión

Que text content trata las etiquetas de HTML como texto, sin interpretarlas, mientras que inner HTML si que las interpreta.
Esto hace que usar innerHTML sea más peligroso que textContent debido a que permite la inyección de código.
En el caso de `<b>hola</b>` se ha podido observar como usando innerHTML el se aplicaba la etiqueta b y se mostraba el hola en negrita.

## Fuentes

- ChatGPT(https://ChatGPT.com)

## Uso de IA

ChatGPT:

Prompts:
    qué diferencia hay entre textContent e innerHTML,
    en js como se usa esto? document.getElementsByClassName(),
    como se añaden clases a un elemento de js?,
    diferencia entre queryselector queryselector all y getelement by id,
    como se quita una clase de un elemento?,
    como compruebo que una variable no esta vacia?,
    como funciona el for of ?

He usado estas preguntas para resolver dudas y entender mejor javascript.

Claude: añadir comentarios al js.