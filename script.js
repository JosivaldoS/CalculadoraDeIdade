
function Calcular(){
    const hoje = new Date()

    let dia = parseInt(document.getElementById("dia").value)
    let mes = parseInt(document.getElementById("mes").value)
    let ano = parseInt(document.getElementById("ano").value)

    let diaAtual = hoje.getDate()
    let mesAtual = hoje.getMonth() + 1
    let anoAtual = hoje.getFullYear()

    let diaTotal = diaAtual - dia
    let mesTotal = mesAtual - mes
    let anoTotal = anoAtual - ano

    if (diaTotal < 0) {
        mesTotal--;
        diaTotal += new Date(anoAtual, mesAtual - 1, 0).getDate()
    }

    if (mesTotal < 0) {
        console.log(`Mes total ${mesTotal}`)
        anoAtual--;
        mesTotal += new Date(anoAtual).getMonth()
        console.log(`Mes total depois ${mesTotal}`)
    }

    let diaLabel = document.getElementById("diaLabel")
    let mesLabel = document.getElementById("mesLabel")
    let anoLabel = document.getElementById("anoLabel")
    diaLabel.innerText = diaTotal
    mesLabel.innerText = mesTotal
    anoLabel.innerHTML = anoTotal

}
