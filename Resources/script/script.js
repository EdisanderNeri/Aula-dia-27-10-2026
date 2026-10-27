// let body = document.querySelector("body")
// let div = document.querySelector("div")
// body.removeChild(div)


// let body = document.querySelector("body")
// let titulo = document.querySelector("h1")
// body.removeChild(titulo)

// let h1 = document.querySelector("#trocarCor")

// h1.style.color = "Blue"
// h1.style.background = "purple"
// h1.style.height = "20px"

// let body = document.querySelector("#tc")
// body.style.background = "lightblue"

// var h1 = document.querySelector("h1")
// var paragrafo = document.querySelector("p")

// paragrafo.innerHTML = h1.innerHTML 


//  function verificarCor(cor) {
//             if (cor === 'azul' || cor === 'vermelho' || cor === 'amarelo') {
//                 return 'Cor primaria';
//             } else if (cor === 'verde' || cor === 'laranja' || cor === 'roxo') {
//                 return 'Cor segundaria';
//             } else {
//                 return 'Outra cor';
//             }
//         }

//         function mudarCor() {
         
//             let cor = prompt("Digite uma cor (azul, vermelho, amarelo, verde, laranja, roxo):").toLowerCase().trim();


//             let coresCss = {
//                 'azul': 'blue', 'vermelho': 'red', 'amarelo': 'yellow',
//                 'verde': 'green', 'laranja': 'orange', 'roxo': 'purple'
//             };

//             if (coresCss[cor]) {
//                 document.body.style.backgroundColor = coresCss[cor];
//                 document.getElementById('resultado').innerText = verificarCor(cor);
//             } else {
//                 alert("Cor não reconhecida.");
//             }
//         }

// let buttom = document.querySelector("button")
// buttom.addEventListener("mudarcor",function() {
//     console.log("cliquei")
//     buttom.addEventListener("mudarcor",function() {
//         buttom.style.backgroundColor = "black"
//     })
// }  );


let button = document.querySelector("button");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");


button.addEventListener("click", function(){
    body.style.backgroundColor = "black";
    h1.style.color = "white";
    
});
