const btnEl = document.querySelector('#search-button');
const errP = document.querySelector('#errore');
btnEl.addEventListener('click', async () => {
    try{
        event.preventDefault()
        let nomePokemon = document.querySelector('#input-text');
        let x = await fetch("https://pokeapi.co/api/v2/pokemon/" + nomePokemon.value.toLowerCase())
        let pokemon = await x.json()
        let lista = document.querySelector('#lista-pokemon');
        let cardPokemon = document.createElement('div');
        let prendoImg = document.createElement('img');
        prendoImg.setAttribute('src', pokemon.sprites.front_default);
        cardPokemon.append(prendoImg);
        let testo= document.createElement('p');
        let pokemonName= document.createTextNode(pokemon.name);
        testo.append(pokemonName);
        cardPokemon.append(testo);
        lista.append(cardPokemon);
        console.log(pokemon);
        errP.setAttribute('class','inv');

    }
    catch {
        errP.setAttribute('class','vis');
    }
    
})


