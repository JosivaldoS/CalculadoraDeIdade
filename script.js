const hoje = new Date()


function Calcular(){

    let dia = parseInt(document.getElementById("dia").value)
    let mes = parseInt(document.getElementById("mes").value)
    let ano = parseInt(document.getElementById("ano").value)

    let diaAtual = hoje.getDate()
    let mesAtual = hoje.getMonth() + 1
    let anoAtual = hoje.getFullYear()

    let diaTotal = diaAtual - dia
    let mesTotal = mesAtual - mes
    let anoTotal = anoAtual - ano

    let diaLabel = document.getElementById("diaLabel")
    let mesLabel = document.getElementById("mesLabel")
    let anoLabel = document.getElementById("anoLabel")
    diaLabel.innerText = diaTotal
    mesLabel.innerText = mesTotal
    anoLabel.innerHTML = anoTotal



    // Mostra a data fornecida
    console.log(`${dia}/${mes}/${ano}`)
    // Mostra a data de hoje
    console.log(`${diaAtual}/${mesAtual}/${anoAtual}`)
    // Mostra o valor depois da subtração
    console.log(`${diaTotal}/${mesTotal}/${anoTotal}`)
}
