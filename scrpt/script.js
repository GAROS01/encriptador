
var texIngresado  = document.querySelector(".text-input");

var Encriptado  = document.querySelector("#msg");

var desEncriptado  = document.querySelector("#msg");

//boton para encriptar.

var botonencriptar= document.getElementById("btn-encriptar");
botonencriptar.addEventListener("click",function(event){
    event.preventDefault();
    
    mensaje = texIngresado.value;
    var textoEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    
   
    document.getElementById("msg").value=textoEncriptado;
  
});

//boton para desencriptar.

var botondesEncriptar = document.getElementById("btn-desencriptar");
botondesEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    mensajeDos = texIngresado.value;
    textoDesencriptado = mensajeDos.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    
 
    document.getElementById("msg").value = textoDesencriptado;
    

});

 
//funcion para copiar el texto.

function copiarTexto(){
    var copyText=document.getElementById("msg");
    copyText.select();
    document.execCommand("copy");
    alert("texto copiado");
   
}  
 function limpiar(){
    document.getElementById("Input-texto").value="";
}
  
