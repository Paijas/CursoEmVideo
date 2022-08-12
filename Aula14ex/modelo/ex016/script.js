function contar(){
    var inicio = document.getElementById("txtin")
    var fim = document.getElementById("txtfm")
    var passo = document.getElementById("txtps")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Está faltando dados!!!")
        
    }else{

        res.innerHTML = 'Contando <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0){
            window.alert("Passo Inválido! Considerando PASSO 1")
            p = 1
        }

        //CONTAGEM CRESCENTE
        if (i < f){
            for (var c=i; c<=f; c+=p){
            res.innerHTML += `\u{261E}${c} `
        }
        
        //CONTAGEM REGRASSSIVA
        }else{
            for(var c=i; c >= f; c -= p)
            res.innerHTML += `\u{261E}${c} `
        }
        
        res.innerHTML += '\u{1F3C1}'
    }
}