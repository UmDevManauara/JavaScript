function contar() {
    let inicio = window.document.getElementById('iinicio')
    let fim = window.document.querySelector('input#ifim')
    let passo = window.document.getElementById('ipasso')
    let res = window.document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[EERO] Verifique novamente os dados e tente novamente!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo igual a 1')
            p = 1
        }
        res.innerHTML = 'Contando:'
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            } res.innerHTML += '\u{1F6A9}'
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            } res.innerHTML += '\u{1F6A9}'
        }
    }
}


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
