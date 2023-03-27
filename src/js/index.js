// criando variáveis

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //adicionando evento de click na lista de pokemons
    pokemon.addEventListener('click', () => {
        //removendo classe aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        // ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar

        //adicionando classe aberto no cartão clicado
       const idPokemonSelecionado = pokemon.attributes.id.value
       const idDoCartaoPokemonParaAbrir ='cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add('aberto')

       //removendo classe ativo no item da lista selecionado
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')
        // adicionando classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})