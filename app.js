function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    // Para cada dado dentro da lista de dados
    for (let atleta of atletas) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${atleta.nome}</a>
                </h2>
                <p class="descricao-meta">${atleta.descricao}</p>
                <a href=${atleta.link} target="_blank">Mais informações</a>
            </div>
    `;    
    }

    section.innerHTML = resultados;
}