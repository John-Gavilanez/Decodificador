const msmEntrada = document.querySelector(".mensajeEntrada");
const msmSalida = document.querySelector(".mensajeSalida");

var n;

function btnEncriptar(){
    const textoEncriptado = encriptar(msmEntrada.value);
    msmSalida.value = textoEncriptado;

    if(n==2){
        msmEntrada.value = "";
        document.getElementById("img").style.display="none"; 
        document.getElementById("parrafo").style.display="none"; 
        document.getElementById("titulo").style.display="none"; 
        document.querySelector(".mensajeSalida").style.display="block";
        document.querySelector(".btnCopiar").style.display="block";     
    }

    else{
        msmEntrada.value = "";
        document.getElementById("parrafo").style.display="block"; 
        document.getElementById("titulo").style.display="block";
        document.querySelector(".mensajeSalida").style.display="none";
        document.querySelector(".btnCopiar").style.display="none"; 
    }
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(msmEntrada.value);
    msmSalida.value=textoDesencriptado;

    if(n==2){
        msmEntrada.value = "";
        document.getElementById("img").style.display="none"; 
        document.getElementById("parrafo").style.display="none"; 
        document.getElementById("titulo").style.display="none";
        document.querySelector(".mensajeSalida").style.display="block"; 
        document.querySelector(".btnCopiar").style.display="block"; 
    }else{
        msmEntrada.value = "";
        document.getElementById("parrafo").style.display="block"; 
        document.getElementById("titulo").style.display="block";
        document.querySelector(".mensajeSalida").style.display="none";
        document.querySelector(".btnCopiar").style.display="none"; 
    }   
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); 

    if(stringEncriptada==""){
        n=1;
    }else{
        n=2;
        for (let i = 0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])){ 
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]); 
            }       
        } 
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    if(stringDesencriptada==""){
        n=1;
    }else{
        n=2
        for (let j = 0; j < matrizCodigo.length; j++) {
            if(stringDesencriptada.includes(matrizCodigo[j][1])){
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[j][1],matrizCodigo[j][0])
            }
        }
    }
    return stringDesencriptada;    
}

function btncopiar(){
    /*let texto = document.getElementById("parrafo");*/
    msmSalida.select();
    document.execCommand("copy");
}