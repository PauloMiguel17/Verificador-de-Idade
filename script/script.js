function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('verifique os dados inseridos')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/crianca_homem.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem_homem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/homem_adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }

        }
        if (fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/crianca_mulher.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem_mulher.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

function alterar(){
    const cor = document.getElementById('icolor');
    const corsel = cor.value;
    document.body.style.background = corsel
    
}