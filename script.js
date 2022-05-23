const inputTexto = document.querySelector(".input-text"); /* El . referencia que es una class */
const mensaje = document.querySelector(".input-text-area");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");

/*  ENCRIPTACION */
function btnCodificar(){ /* Funciones para BOTON Encriptar */
    ocultarAdelante()
    const textoEncriptado = codificar(inputTexto.value); /* Value es para ... */
    mensaje.value = textoEncriptado;
}

function codificar(StringParaEncriptar) { /* Funciones para Encriptar */
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){ /* Recorre la matriz */
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]) /* Realiza el cambio de caracteres */
        }
    }
    return StringParaEncriptar;
} 

/* DESENCRIPTACION */
function btnDecodificar(){ /* Funciones para BOTON Encriptar */
    const textoEncriptado = decodificar(inputTexto.value); /* Value es para ... */
    mensaje.value = textoEncriptado;
}

function decodificar(StringParaEncriptar) { /* Funciones para desencriptar */
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){ /* Recorre la matriz */
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1]) /* Realiza el cambio de caracteres */
        }
    }
    return StringParaEncriptar;
    
} 

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function copyToClipBoard() { /* Boton Copiar */
    var content = document.getElementById('text-copy');
    content.select();
    document.execCommand('copy');
    alert("Mensaje Copiado al Portapapeles");
}