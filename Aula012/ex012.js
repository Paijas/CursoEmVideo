var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora } horas!`)

if(hora < 6){
    console.log("Está de Magrugada! Boa Madrugada!")
}
else if (hora < 12){
    console.log("Está de dia! Bom Dia!")
}else if(hora < 18){
    console.log("Está de tarde! Boa Tarde!")
}else{
    console.log("Está de noite! Boa Noite!")
}