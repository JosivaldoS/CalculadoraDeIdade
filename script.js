
function Calcular(){
    const hoje = new Date()

    let dia = parseInt(document.getElementById("dia").value)
    let mes = parseInt(document.getElementById("mes").value)
    let ano = parseInt(document.getElementById("ano").value)

    let erroDia = document.getElementById("erroDia")
    let erroMes = document.getElementById("erroMes")
    let erroAno = document.getElementById("erroAno")

    console.log(dia)

    // Validação se os dados informados são números

    if (isNaN(dia) || !Number.isInteger(dia)) {
        erroDia.innerText = "O campo precisa ser preenchido"
        return
    } else if (isNaN(mes) || !Number.isInteger(mes)){
        erroMes.innerText = "O campo precisa ser preenchido"
        return
    } else if (isNaN(ano) || !Number.isInteger(ano)){
        erroAno.innerText = "O campo precisa ser preenchido"
        return
    }

    // Esvazia os spans caso ele passe no teste de validação
    erroDia.innerHTML = ""
    erroMes.innerHTML = ""
    erroAno.innerHTML = ""

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
        anoTotal--;
        mesTotal += new Date(anoAtual).getMonth()
    }

    let diaLabel = document.getElementById("diaLabel")
    let mesLabel = document.getElementById("mesLabel")
    let anoLabel = document.getElementById("anoLabel")
    diaLabel.innerText = diaTotal
    mesLabel.innerText = mesTotal
    anoLabel.innerHTML = anoTotal

}
