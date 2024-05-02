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
        res.innerHTML = ``
        vetor.push(Number(numero.value))
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
      vetor.sort()
      let menor = vetor[0]
      let maior = vetor[0]
      soma = 0
      let posicao
      for(let pos in vetor){
          soma += vetor[pos]
          posicao = (Number(pos) + 1)
          if( vetor[pos] > maior){
          maior = vetor[pos]
          }
          if(vetor[pos] < menor){
            
            menor = vetor[pos]
          }
      }
       media = (soma / posicao)
      res.innerHTML = (`<p>Ao todo, temos ${vetor.length} números cadastrados</p>`)
      res.innerHTML += (`<p>O maior valor informado foi ${maior}</p>`)
      res.innerHTML += (`<p>O menor valor informado foi ${menor}</p>`)
      res.innerHTML += (`<p>A soma dos valores é ${soma}</p>`)
      res.innerHTML += (`<p>a media dos valores é ${media}</p>`)



     }

 }




  
