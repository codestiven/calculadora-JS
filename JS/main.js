
let salida = document.getElementById("screen");
let sub_salida = document.getElementById("title");
let cambios = true ;


actualizarSalida(); 
function digitos(entrada) {

    if (salida.textContent == "0" || cambios) {
        salida.textContent = "";
        cambios = false;
    }


     salida.textContent += entrada;


 }


document.getElementById("delete").addEventListener("click", function() {
     // Clears the screen content
     salida.textContent = salida.textContent.slice(0, -1);
     actualizarSalida();
     
});


function actualizarSalida() {
    if (!salida.textContent) {

        salida.textContent = "0";
    } 
}


document.getElementById("result").addEventListener("click", function () {
  // Clears the screen content
  sub_salida.textContent = salida.textContent;
  salida.textContent = eval(salida.textContent);


  
});


document.getElementById("clear").addEventListener("click", function () {
  salida.textContent = "0";
  sub_salida.textContent = "";
});