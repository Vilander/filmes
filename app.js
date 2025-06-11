//função 'objeto' no javascript é uma espécie de array. utiliza {} ao invés de []: descrição+conteudo"
//JSON - javascript object notation
//xml - extensible markup language

let filme1 = {
    titulo: "Jurassic Park",
    foto: "filme1.webp",
    avaliacao: "10/10",
    duracao: "2h07m"
}

let filme2 = {
    titulo: "Karate Kid - Lendas",
    foto: "filme2.jpg",
    avaliacao: "8/10",
    duracao: "1h34m"
}

let filme3 = {
    titulo: "Lilo & Stitch",
    foto: "filme3.jpg",
    avaliacao: "10/10",
    duracao: "1h48m"
}

let filme4 = {
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h17m"
}
let filme5 = {
    titulo: "Um Filme Minecraft",
    foto: "filme5.jpg",
    avaliacao: "8/10",
    duracao: "1h41m"
}
let filme6 = {
    titulo: "Batman: O Cavaleiro das Trevas",
    foto: "filme6.jpg",
    avaliacao: "10/10",
    duracao: "2h32m"
}

// function fnMontarCartao(filmeAtual) {
//     document.querySelector(".lista-filmes").innerHTML +=`
//         <div class="card-filme">
//             <img src="img/${filmeAtual.foto}">
//             <h3>${filmeAtual.titulo}</h3>
//             <span>⭐ ${filmeAtual.avaliacao}</span>
//         </div>
//         `
// }

//DOM - Document Object Model =>Estrutura do HTML

// fnMontarCartao(filme1)

let todosOsFilmes = [filme1, filme2, filme3, filme4, filme5]

todosOsFilmes.forEach((filmeAtual) => {
    document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
            <img src="img/${filmeAtual.foto}">
            <h3>${filmeAtual.titulo}</h3>
            <span>⭐ ${filmeAtual.avaliacao}</span>
        </div>
        `
})