function verificar() {
    var nasc = window.document.getElementById('txtano')
    var sexo = window.document.getElementsByName('sexo')
    var res = window.document.getElementById('resultado')

    var data = new Date()
    var ano = data.getFullYear()

    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[EERO] Verifique novamente os dados e tente novamente!')
    } else {
        var idade = ano - Number(nasc.value)
        genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 14) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade > 14 && idade < 18) {
                // ADOLESCENTE
                img.setAttribute('src', 'imagens/m-adolescente.png')
            } else if (idade >= 18 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/m-adulto.png')
            } else if (idade >= 50 && idade < 70) {
                // senhor
                img.setAttribute('src', 'imagens/m-senhor.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/m-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 14) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/f-crianca.png')
            } else if (idade > 14 && idade < 18) {
                // ADOLESCENTE
                img.setAttribute('src', 'imagens/f-adolescente.png')
            } else if (idade >= 18 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/f-adulta.png')
            } else if (idade >= 50 && idade < 70) {
                // senhor
                img.setAttribute('src', 'imagens/f-senhora.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/f-idosa.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade}`
        res.appendChild(img)
    }




    // msg.innerHTML = `Agora são ${hora} horas` 
    // if (hora >= 0 && hora < 12) {
    //     img.src = 'imagens/manha.png'
    //     document.body.style.background = '#ebbf8b'
    // } else if (hora >= 12 && hora < 18) {
    //     img.src = 'imagens/tarde.jpg'
    //     document.body.style.background = '#b47037'
    // } else {
    //     img.src = 'imagens/noite.jpg'
    //     document.body.style.background = '#243350'

    // }
}
