fEncrypt = (stringencrypt) => {
    const reemplazos1 = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }
    stringencrypt = stringencrypt.replace(/a|e|i|o|u/gi, function(matched) {
        return reemplazos1[matched];
    });
    return stringencrypt;
}
fEncryptr = (stringencrypt) => {
    const reemplazos2 = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    }
    stringencrypt = stringencrypt.replace(/ai|enter|imes|ober|ufat/gi, function(matched) {
        return reemplazos2[matched];
    });
    return stringencrypt;
}
clearPage=() => {
    document.getElementById("text-encrypt").value = '';
    document.getElementById("message").value = '';
    document.getElementById("text-screen1").style.display = "block";
}
btnEncrypt = () => {
    let textoEncriptado = fEncrypt(document.getElementById("text-encrypt").value);
    document.getElementById("message").value = textoEncriptado;
    document.getElementById("text-encrypt").placeholder = "Ingresa el texto aquí...";
    document.getElementById("text-screen1").style.display = "none";
    document.getElementById("result").style.display = "block";
}
btnDecrypt = () => {
    let textoDesencriptado = fEncryptr(document.getElementById("text-encrypt").value);
    document.getElementById("message").value = textoDesencriptado;
    document.getElementById("text-encrypt").placeholder = "Ingresa el texto aquí...";
    document.getElementById("text-screen1").style.display = "none";
    document.getElementById("result").style.display = "block";
}
copyToClipBoard = () => {
    const content = document.getElementById("message");
    content.select();
    document.execCommand('copy');
    alert("¡Copiado!");
}