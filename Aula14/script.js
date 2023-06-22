var escuro = false

function AlternadorTema() {

    var corpo = document.querySelector("body")
    var titulo = document.querySelector("h1")
    var subtitulo = document.querySelector("h2")
    var paragrafo = document.querySelector("p")

    if (escuro) {
        corpo.style.backgroundColor = "#aaa"
        titulo.style.color = "black"
        subtitulo.style.color = "black"
        paragrafo.style.color = "gray"
    }

    else {
        corpo.style.backgroundColor = "#222"
        titulo.style.color = "white"
        subtitulo.style.color = "white"
        paragrafo.style.color = "gray"
    }

    escuro = !escuro

}