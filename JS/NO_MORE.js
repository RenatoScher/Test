let interval = setInterval(function () {
    if (document.querySelector(".fiveserver-info-wrapper_info") != null) {
        document.querySelector(".fiveserver-info-wrapper_info").remove()
    }
}, 1)

//O servidor q a gente usa fica mostrando uma tela de "CSS Updated" td vez q a gente atualiza o css, ent fiz isso pra tirar a tela