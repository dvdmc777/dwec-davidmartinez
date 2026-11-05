# Tarea 6 · Objetos y arrays

**Autor:** David Martínez Castro · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27
ç

Es el ejercicio del tema 6, se puede ver usando live server de vs code.

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

Se ve mi nombre, y los ejercicios pedidos.

### b) Ejercicios 1 y 2: la ficha y los colores

<img src="capturas/b-ej1-ej2.png" alt="La ficha de estudiante y la lista de colores" width="600">

En la ficha he usado los métodos verFicha cumplirAnios y quitarCurso, en la lista de colores mostrarColores, avisar2, anadirColores, quitarPrimero, quitarUltimo.

### c) Ejercicio 3: el catálogo ordenado por precio

![La tabla de productos ordenada por precio](capturas/c-ej3-ordenado.png)

Para la comparación use sort y ordeno una copia para poder mantener el array original.

### d) Ejercicio 4: las notas y la media

![Las notas con su color y la media](capturas/d-ej4-notas.png)


### e) Ejercicio 5: los tres métodos seguidos

![El resultado de filter, map y reduce encadenados](capturas/e-ej5-cadena.png)

Los pares son un array con los pares, los dobles un array con cada número múltiplicado por dos, y suma suma todos los del array.

Para cada método se usa map, filter y reduce respectivamente.

### f) Ejercicio 6: después de splice y de buscar una ciudad

![Las ciudades después de splice y una búsqueda](capturas/f-ej6-splice.png)

Quita Málaga y Córdoba.
En este caso al buscar Granada su indice sigue siendo el mismo porque no se ve afectado por el splice.

## Reflexión

Para cambiar el array original se usan splice(), push(), pop() y shift(). slice en cambio te devuelve un array nuevo, en este caso se con slice(2,5) devuelve un array nuevo con el corte sin modificar el array original. En el ejercicio 3 se usa una copia porque al usar sort se modifica el array original. 
## Fuentes
- ChatGPT (https://chatgpt.com)
- Claude   (https://claude.ai)
## Uso de IA

He usado chatGPT y claude para recordar el funcionamiento de algunas funciones como for, foreach, sort, splice, slice, map entre muchas otras que desconocía y para preguntar que fallaba en mi código cuando no he podido determinar el error. 
