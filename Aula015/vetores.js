let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos=0; pos<valores.length; pos++){
    console.log(`Posição ${pos}: ${valores[pos]}`)
}

console.log("=-=-=-==-=-=-==-=-=-==-=-=-==-=-=-==-=-=-==-=-=-==-=-=-=")


for(let pos in valores){
    console.log(`Posição ${pos}: ${valores[pos]}`)
}

console.log(valores.indexOf(7))
console.log(valores.indexOf(3))