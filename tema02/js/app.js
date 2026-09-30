document.getElementById("boton1").addEventListener("click", function() {
    alert("David");
    console.log("Has pulsado el boton saludar.");
});
document.getElementById("boton2").addEventListener("click", function() {
    console.error("Mensaje de error");
    console.log("Has pulsado el boton Simular un error.");
});

document.getElementById("boton3").addEventListener("click", function() {
    alert(navigator.userAgent);    
    console.log("Que navegador soy.");
});