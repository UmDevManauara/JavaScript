// para declarar um array, basta usar colchete
let num = [5,8,4]
console.log(num)

// para inserir um dado em uma posição especifica do array basta indicar a posição
num[3] = 6
console.log(`array com elemento adicionado: ${num}`)

//se quiser adicionar um elemento ao final do array, mas não quer declarar a posição
num.push(7)
console.log(`array com elemento adicionado ao final: ${num}`)
//atributo length para retornar o comprimento começando por 1
console.log(` A contagem de elementos atraves do atributo length, é igual a: `+ num.length)
//metodo sort, ordena os valores em ordem
num.sort()
console.log(`o vetor ordenado pelo metodo Sort() é: ${num}`) 
