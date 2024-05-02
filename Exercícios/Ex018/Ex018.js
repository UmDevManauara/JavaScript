let numero = window.document.getElementById('numero')
let lista = window.document.querySelector('select#flista')
let res = window.document.getElementById('resultado')
var vetor = []

function inNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
  if (l.indexOf(Number(n)) != -1){ //  se o numero existir dentro do vetor
    return true
  } else{
    return false
  }
}
  
  
function adicionar() {    
    if (!inNumero(numero.value) || inLista(numero.value, vetor)) {
        window.alert('[ERRO] Valor invalido ou ja esta na lista')
    } else {
        vetor.push(Number(numero.value))
        window.alert('Tudo OK')
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    }
    numero.value = ''
    numero.focus() // volta a focar  no na  caixa de input
  }
    

 function finalizar(){
     if (vetor.length == 0) {
        window.alert('[ERRO] Insira um número')
     }else{
      
     }

 }




  
//         let numeroTabuada = Number(n1.value)
//         for (i = 0; i <= 10; i++) { 
//             res.innerHTML += (`${numeroTabuada} x ${i} = ` + (numeroTabuada * i) + ` <br>`) }
//     }

// }



//     }


// var data = new Date()
// var ano = data.getFullYear()

// if (nasc.value.length == 0 || Number(nasc.value) > ano) {
//     window.alert('[EERO] Verifique novamente os dados e tente novamente!')
// } else {
//     var idade = ano - Number(nasc.value)
//     genero = ''
//     var img = document.createElement('img')
//     img.setAttribute('id', 'foto')
//     if (sexo[0].checked) {
//         genero = 'Homem'
//         if (idade >= 0 && idade <= 14) {
//             //CRIANÇA
//             img.setAttribute('src', 'imagens/m-crianca.png')
//         } else if (idade > 14 && idade < 18) {
//             // ADOLESCENTE
//             img.setAttribute('src', 'imagens/m-adolescente.png')
//         } else if (idade >= 18 && idade < 50) {
//             //Adulto
//             img.setAttribute('src', 'imagens/m-adulto.png')
//         } else if (idade >= 50 && idade < 70) {
//             // senhor
//             img.setAttribute('src', 'imagens/m-senhor.png')
//         } else {
//             //idoso
//             img.setAttribute('src', 'imagens/m-idoso.png')
//         }
//     } else {
//         genero = 'Mulher'
//         if (idade >= 0 && idade <= 14) {
//             //CRIANÇA
//             img.setAttribute('src', 'imagens/f-crianca.png')
//         } else if (idade > 14 && idade < 18) {
//             // ADOLESCENTE
//             img.setAttribute('src', 'imagens/f-adolescente.png')
//         } else if (idade >= 18 && idade < 50) {
//             //Adulto
//             img.setAttribute('src', 'imagens/f-adulta.png')
//         } else if (idade >= 50 && idade < 70) {
//             // senhor
//             img.setAttribute('src', 'imagens/f-senhora.png')
//         } else {
//             //idoso
//             img.setAttribute('src', 'imagens/f-idosa.png')
//         }    //     res.style.textAlign = 'center'
//     res.innerHTML = `Detectamos ${genero} com idade de ${idade}`
//     res.appendChild(img)
// }
