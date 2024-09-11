// arrays, objetos

let meta = {
    value: 'ler um livro por mês',
    checked: false,
    adress: 2,
    log: (info) => {
        console.log(info)
    }
    
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[1].value)