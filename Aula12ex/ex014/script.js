function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if(hora < 12){
    img.src = 'fotomanha.png'
    document.body.style.background = '#ffd055'
} else if (hora >= 12 && hora <= 18){
    img.src = 'fototarde.png'
    document.body.style.background = ' #ea996a'
}else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#a077af'
}
}