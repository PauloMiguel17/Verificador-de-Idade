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
        res.innerHTML = `idade calculada ${idade}`
    }
}