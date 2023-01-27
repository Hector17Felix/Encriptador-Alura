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
//Limpiar Pantalla
clearPage=() => {
    location.reload();
}
//Encriptar texto
btnEncrypt = () => {
    let textoEncriptado = fEncrypt(document.getElementById("text-encrypt").value);
    document.getElementById("message").value = textoEncriptado;
    document.getElementById("text-encrypt").placeholder = "Ingresa el texto que desees encriptar o desencriptar...";
    document.getElementById("text-screen1").classList.add("animate__animated");
    document.getElementById("text-screen1").classList.add("animate__bounceOut");
    setTimeout(() => {
        document.getElementById("text-screen1").classList.add("hidden");
    }, 600);
    setTimeout(()=>{
        document.getElementById("result").style.display = "block";
    }, 700)
    document.getElementById("encryptShower").style.display = "block";
    document.getElementById("decryptShower").style.display = "none";
    document.getElementById("reload-button").style.display = "block";
}
//Desencriptar texto
btnDecrypt = () => {
    let textoDesencriptado = fEncryptr(document.getElementById("text-encrypt").value);
    document.getElementById("message").value = textoDesencriptado;
    document.getElementById("text-encrypt").placeholder = "Ingresa el texto que desees encriptar o desencriptar...";
    document.getElementById("text-screen1").classList.add("animate__animated");
    document.getElementById("text-screen1").classList.add("animate__bounceOut");
    setTimeout(() => {
        document.getElementById("text-screen1").classList.add("hidden");
    }, 600);
    setTimeout(()=>{
        document.getElementById("result").style.display = "block";
    }, 700);
    document.getElementById("encryptShower").style.display = "none";
    document.getElementById("decryptShower").style.display = "block";
    document.getElementById("reload-button").style.display = "block";
}
//Copiar texto
copyToClipBoard = () => {
    const content = document.getElementById("message");
    content.select();
    document.execCommand('copy');
    alert("¡Copiado!");
}
//Revober clases 
setTimeout(function(){
    document.querySelector("h1").classList.remove("animate__animated", "animate__bounceIn");
}, 2000);
setTimeout(function(){
    document.querySelector("main").classList.remove("animate__animated", "animate__fadeIn");
}, 2000);
setTimeout(function(){
    document.getElementById("text-screen1").classList.remove("animate__animated", "animate__bounceOut")
}, 2000);