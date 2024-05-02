let amigo = {nome: 'leo', sexo: 'M', peso: 102, engordar(p=0){this.peso += p}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)