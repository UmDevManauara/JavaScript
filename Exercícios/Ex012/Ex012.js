var agora =  new Date()
hora =  agora.getHours()


console.log(`São ${hora} Hora(s)`)
if (hora >=0 && hora <= 12){
    console.log('Tenha um bom dia')
} else if(hora >12 && hora < 18){
    console.log('Boa tarde')
}else{
    console.log('boa noite')
}