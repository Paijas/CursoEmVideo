function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.querySelector('div#res')
   
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e digite novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "Homem" 

            if(0 < idade && idade < 12){
                img.setAttribute('src', 'homembebe.png')
            }else if(idade <= 21){
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'homemadulto.png')
            }else{
                img.setAttribute('src', 'homemidoso.png')
            }
        }else{
            genero = "Mulher"

            if(0 < idade && idade < 12){
                img.setAttribute('src', 'mulherbebe.png')
            }else if(idade <= 21){
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}