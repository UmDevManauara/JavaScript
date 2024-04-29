// function parimp(n){
//     if(n%2!=0){
//         return 'ímpar'
//     }else{
//         return 'par'
//     }
// }
// let res = parimp(12)
// console.log(`12 é ${res}`)
// res = parimp(11)
// console.log(`11 é ${res}`)

// soma = 0 
// for(i = 0; i<=3; i++){
//     res = parimp(i)
//     console.log(`${i} é ${res}`)
//     soma += i

// }console.log(`a soma dos numero acima numeros é ${soma}`)

// function somar(n1 = 0, n2 = 0){
//     return  n1 + n2
// }
// var numero1 = 3
// var numero2  = 9
// console.log(`A soma de ${numero1} e ${numero2} é  ${somar(numero1,numero2)}`)

// function fatorial(f = 0){
//      numerofatorial = 1
//     for (i = f; i > 0; i--){ 

//         numerofatorial *= i



//     } return  numerofatorial
// } console.log(fatorial(5))
// var entrada = 
// if (entrada <0){
//     console.log('Não pode ser numeros negativos')
// }
function funcao(n) {
    if (n == 0) {
        return 1
    } else {
        return n * funcao(n - 1)
    }
} 
console.log (funcao(0))