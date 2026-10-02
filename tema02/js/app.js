// Muestra una ventana emergente con el nombre y escribe un mensaje en la consola
function saludar(){
    alert("David Martínez Castro");
    console.log("Has pulsado el boton saludar.");
}

// Escribe un mensaje de error en la consola (sin ventana emergente) y registra la pulsación
function error(){
    console.error("Mensaje de error");
    console.log("Has pulsado el boton Simular un error.");
}

// Muestra en una ventana emergente el user agent (información del navegador)
// y lo escribe también en la consola
function useragent(){
    alert(navigator.userAgent);    
    console.log("Has pulsado el boton Que navegador soy:"+navigator.userAgent);
}
