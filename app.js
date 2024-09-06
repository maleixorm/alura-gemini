function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = 'O campo de pesquisa está vazio.';
        return; 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao ="";
    let tags = "";

    // Itera sobre cada dado dentro da lista de dados
    for (let atleta of atletas) {
        nome = atleta.nome.toLowerCase();
        descricao = atleta.descricao.toLowerCase();
        tags = atleta.tags.toLowerCase();
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
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
    }

    if (!resultados) {
        resultados = 'Nenhum resultado foi encontrado.';
    }

    section.innerHTML = resultados;
}