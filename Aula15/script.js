function AdicionarTarefa() {

    // PEGAR O TEXTO DA TAREFA
    const entrada = document.querySelector("input")
    const textoEntrada = entrada.value

    if (textoEntrada.length > 0) {

        // ONDE COLOCAR AS TAREFAS
        const principal = document.querySelector(".principal")

        // CRIAR O QUADRADO
        var quadrado = document.createElement("div")
        quadrado.setAttribute("class", "quadrado")
        quadrado.setAttribute("onclick", "ApagarTarefa(this)")
        quadrado.innerHTML = textoEntrada

        // COLOCAR O QUADRADO NO PRINCIPAL
        principal.appendChild(quadrado)

        // LIMPAR A ENTRADA TEXTO
        entrada.value = ""
    }

    else {
        alert("Campo está vazio!")
    }

}

function ApagarTarefa(elemento) {

    elemento.remove();

}