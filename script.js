
function Calcular(){
    const hoje = new Date()

    let dia = parseInt(document.getElementById("dia").value)
    let mes = parseInt(document.getElementById("mes").value)
    let ano = parseInt(document.getElementById("ano").value)

    let erroDia = document.getElementById("erroDia")
    let erroMes = document.getElementById("erroMes")
    let erroAno = document.getElementById("erroAno")

    // console.log(dia)

    // Validação se os dados informados são números

    if (isNaN(dia) || !Number.isInteger(dia)) {
        erroDia.innerText = "Insira um número inteiro válido para o dia"
        return
    } else if (isNaN(mes) || !Number.isInteger(mes)){
        erroMes.innerText = "Insira um número inteiro válido para o dia"
        return
    } else if (isNaN(ano) || !Number.isInteger(ano)){
        erroAno.innerText = "Insira um número inteiro válido para o dia"
        return
    }

    // Esvazia os spans caso ele passe no teste de validação
    erroDia.innerHTML = ""
    erroMes.innerHTML = ""
    erroAno.innerHTML = ""

    // Validação para verificar se os dias, meses e anos estão preenchidos de forma correta como por exemplo: mês com mais de 59 dias, mês 21, ano de 2930

    if (dia < 1 || dia > 31) {
        erroDia.innerHTML = 'Dia inserido inválido. Dia deve estar entre 1 e 31.'
        return
    } else if (mes < 1 || mes > 12) {
        erroMes.innerHTML = 'Mês deve estar entre 1 e 12'
        return
    } else if (ano >= hoje.getFullYear()) {
        erroAno.innerHTML = 'Ano não pode ser maior ou igual ao ano atual'
        return
    }

    let diaAtual = hoje.getDate()
    let mesAtual = hoje.getMonth() + 1
    let anoAtual = hoje.getFullYear()

    console.log(`Dias informados ${dia} // Quantos dias o mês possui? ${new Date(anoAtual, mes, 0).getDate()}`)
    console.log(diaAtual, mes, anoAtual)
    console.log(new Date(anoAtual, mesAtual, 0).getDate())

    // Validação para verificar se os dias no mês escolhido está certo

    if (dia > new Date(ano, mes, 0).getDate()) {
        erroDia.innerHTML = 'Quantidades de dias a mais que o mês'
        return
    }

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
