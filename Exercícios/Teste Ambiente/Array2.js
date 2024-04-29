var valores = [1,4,5,6,8,12,44,22,12,10]

/* 
mostrar posicao especifico do vetor
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
console.log(valores[8])
console.log(valores[9])
*/
//metodo padrao de exibicao de um array
for(var posicao = 0; posicao < valores.length; posicao ++){
    console.log(`O conteudo do vetor na posição ${posicao} é: ${valores[posicao]}`)
}

//Forma nova do javascript para exibir posicoes do array
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor:  ${valores[pos]}`)
}