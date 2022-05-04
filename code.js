// const encriptar = {
//   a: 'ai',  
//   e:' enter' ,
//   i:'imes' ,
//   o:' ober' ,
//   u:'ufat'

// }
//  const input = document.querySelector('input');
//  const button =  document.querySelector('button');

//  input.addEventListener('keyup', ({target}) => {
//      target.value = target.value.toLowerCase()
//  }  )

//  button.addEventListener('click', () => {
//       const word = input.value.split('');
//      console.log(word);

//       const newWord = word
//           .map( l => {
//              if (encriptar[l]) {
//               l = encriptar[l]
//           }
//           return l
//       }).join('')
//       document.write(newWord)
// }  )

// const desencriptar = {
//     ai: 'a',  
//     enter:' e' ,
//     imes:'i' ,
//     ober:' o' ,
//     ufat:'u'
  
//   }

//   desencriptar.ai;
//   desencriptar.enter;
//   desencriptar.imes;
//   desencriptar.ober;
//   desencriptar.ufat;
 


let mensaje = document.querySelector("#ingresar-texto");
let salida = document.querySelector("#salida");

let btnEncriptar = document.querySelector(".boton-encriptar");
let btnDesencriptar = document.querySelector(".boton-desencriptar");
let btnCopiarTexto = document.querySelector(".btn-copiar");

btnEncriptar.addEventListener("click", function(e){
    e.preventDefault();
    
    let texto = encriptarTexto();
    salida.value = texto;
});

btnDesencriptar.addEventListener("click", function() {

    let texto = desencriptarTexto();
    salida.value = texto;
});

btnCopiarTexto.addEventListener("click", function(e){

    copiarTexto();
});

function encriptarTexto() {
    let textoEncriptar = limpiarTexto(mensaje.value);
    let textoEncriptado = mensaje.value;

    textoEncriptado = textoEncriptar.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")

    return textoEncriptado;
}

function desencriptarTexto() {
    let textoEncriptar = limpiarTexto(mensaje.value);
    let textoDesencriptado = mensaje.value;

    textoDesencriptado = textoEncriptar.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")

    return textoDesencriptado;
}

function copiarTexto() {
    salida.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    alert("El texto fue copiado");
}

function limpiarTexto(texto){
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();

}



   
      
  
