function encriptar(){
    let texto = document. getElementById ("texto").value;
    let titulomensaje = document.getElementById ("titulo-mensaje");
    let parrafo = document.getElementById ("parrafo");

    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
    if(textocifrado.length != 0) {
      document.getElementById("texto").value = textocifrado;
      titulomensaje.textContent = "Texto encriptado con exito";
      parrafo.textContent = "";
    } else {
        titulomensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto")
    }
    }

    function desencriptar(){
        let texto = document. getElementById ("texto").value;
        let titulomensaje = document.getElementById ("titulo-mensaje");
        let parrafo = document.getElementById ("parrafo");

        let textocifrado = texto
           .replace(/enter/gi, "e")
           .replace(/imes/gi, "i")
           .replace(/ai/gi, "a")
           .replace(/ober/gi, "o")
           .replace(/ufat/gi, "u")
        if(textocifrado.length!= 0) {
          document.getElementById("texto").value = textocifrado;
          titulomensaje.textContent = "Texto desencriptado con exito";
          parrafo.textContent = "";
        } else {
            titulomensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar un texto")
        }
    }
    