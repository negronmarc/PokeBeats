const submitBtn = document.getElementById('choose'); // search button
const dropdownEl = document.getElementById('select'); // search field input
const nameScreen = document.getElementById('name-screen'); //name-screen
const cardName = document.getElementById('header-pokename'); //name-screen
const cardImage = document.getElementById('pokemon-image'); // image screen
const imageScreen = document.getElementById('main-screen'); // image screen
const songTitle = document.getElementById('song-title'); // image screen
const aboutScreen = document.getElementById('about-screen'); // about-text screen
const typeScreen = document.getElementById('type-screen'); // type screen
const idScreen = document.getElementById('id-screen'); // spices screen

const getPokemonData = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => { 
      let id = ('00' + data.id).slice(-3);
      imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
      nameScreen.innerHTML = data.name;
      typeScreen.innerHTML = data.types[0].type.name;
      idScreen.innerHTML = `${data.id}`;
      cardName.innerHTML = data.name;
      cardImage.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
      fetch (`https://pokeapi.co/api/v2/pokemon-habitat/`)
        .then((response) => response.json())
        .then((data) => {
          aboutScreen.innerHTML = `pokemon: ${data.names[0].name}`;
      })
    });
};

dropdownEl.addEventListener('click', (event) => 
  event.key === 'Enter' && submitBtn.click()
);

submitBtn.addEventListener('click', () => getPokemonData(dropdownEl.value));
