var retornoinvisible = document.querySelector('#retorno');
var muneco = document.querySelector('#muneco');
muneco.classList.remove('invisible');
delay();

const valor = document.querySelector('#retorno'); 

const btn1 = document.querySelector("#btnEncrip");
btn1.addEventListener('click', function(){
    let textoEntrada = document.querySelector('#textInput').value;
    let texto = textoEntrada;
    if(validarTexto(texto)){
        retornoinvisible.classList.remove('retornoinvisible');  
        let encriptado = encriptar(texto);  
        valor.textContent = (encriptado);   
        muneco.classList.add('invisible'); // ADD confirma invisible
}})


const codificador = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
function encriptar (texto) {
    let encriptado = "";
    for (const letras in codificador) {
        encriptado = texto.replaceAll(letras,codificador[letras]); 
        texto = encriptado;        
    }
    return encriptado;
}

// PARTE DOS

const btn2 = document.querySelector("#btnDesencrip");
btn2.addEventListener('click', function(){
    let textoEntrada = document.querySelector('#textInput').value;
    let texto = textoEntrada;
    if(validarTexto(texto)){
        retornoinvisible.classList.remove('retornoinvisible');
        let desencriptado = desencriptar(texto);  
        valor.textContent = (desencriptado);  
        muneco.classList.add('invisible'); 
}}) 

const decodificador = { "ai":"a","enter":"e","imes":"i","ober":"o","ufat":"u"};
function desencriptar(texto){
    let desencriptado = "";
    for(const letra in decodificador){
        desencriptado = texto.replaceAll(letra,decodificador[letra]); 
        texto = desencriptado;
    }

    return desencriptado;
}

function validarTexto (texto){
    let mayus = /[A-Z]/g;
    let acentos = /[óáéúí]/g;
    if(texto.match(mayus)){
        alert("Por favor, no mayusculas");
        return false;
        }
    if (texto.match(acentos)){
        alert("Por favor, sin acentos");
        return false;
        }
    else{
        return true;
        }
}

let btn3 = document.querySelector('#copiar');
btn3.addEventListener('click', function(){
    let textocopiado = document.querySelector('#retorno').value;
    navigator.clipboard.writeText(textocopiado);
    document.querySelector("#textInput").value ="";
    setTimeout(delay, 800);
});

function delay(){
    retornoinvisible.classList.add('retornoinvisible'); 
    muneco.classList.remove('invisible');
    document.getElementById("textInput").focus();
  }
  

