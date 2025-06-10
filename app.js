//função 'objeto' no javascript é uma espécie de array. utiliza {} ao invés de []: descrição+conteudo"
//JSON - javascript object notation
//xml - extensible markup language

let filme1 = {
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "1h50m"
}

let filme2 = {
    titulo: "Karate Kid - Lendas",
    foto: "filme2.jpg",
    avaliacao: "8/10",
    duracao: "1h45m"
}

let filme3 = {
    titulo: "Lilo & Stitch",
    foto: "filme3.jpg",
    avaliacao: "10/10",
    duracao: "1h10m"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h05m"
}
let filme5 = {
    titulo: "Um Filme Minecraft",
    foto: "filme5.jpg",
    avaliacao: "8/10",
    duracao: "1h41m"
}

function fnMontarCartao(filmeAtual) {
    document.querySelector(".lista-filmes").innerHTML +=`
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}</span>
        </div>
        `
}

//DOM - Document Object Model =>Estrutura do HTML

fnMontarCartao(filme1)
fnMontarCartao(filme2)
fnMontarCartao(filme3)
fnMontarCartao(filme4)
fnMontarCartao(filme5)