var diccionario = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function convertirTexto(texto, diccionario) {
    return texto.split('').map(function(letra) {
        return diccionario[letra] || letra;
    }).join('');
}

function procesarTexto() {
    var textoEntrada = document.getElementById("inputTexto").value;
    var resultado = convertirTexto(textoEntrada, diccionario);
    document.getElementById("resultado").value = resultado;
}
function procesarTexto(opcion) {
    var textoEntrada = document.getElementById("inputTexto").value;
    var resultado = "";

    if (opcion === "encriptar") {
        resultado = convertirTexto(textoEntrada, diccionario);
    } else if (opcion === "desencriptar") {
        var diccionarioInvertido = {};
        for (var key in diccionario) {
            if (diccionario.hasOwnProperty(key)) {
                diccionarioInvertido[diccionario[key]] = key;
            }
        }
        resultado = convertirTexto(textoEntrada, diccionarioInvertido);
    }

    document.getElementById("resultado").innerHTML = resultado;
}
function copiarTexto() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("¡Texto copiado!");
}
