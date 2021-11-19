const searchBtn = document.getElementById("search-btn"); 
const inputField = document.getElementById("name-input"); 
const nameScreen = document.getElementById("name-screen"); 
const imageScreen = document.getElementById("main-screen"); 
const aboutScreen = document.getElementById("about-screen"); 
const typeScreen = document.getElementById("type-screen"); 
const idScreen = document.getElementById("id-screen"); 

const getPokemonData = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      let id = ("00" + data.id).slice(-3);
      imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
      nameScreen.innerHTML = data.name;
      typeScreen.innerHTML = data.types[0].type.name;
      idScreen.innerHTML = `#${data.id}`;
      aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${data.weight / 10}kg Hidden Ability: ${data.abilities[1].ability.name}`;
      inputField.value = "";
    });
};

inputField.addEventListener(
  "keydown",
  (event) => event.key === "Enter" && searchBtn.click()
);
searchBtn.addEventListener("click", () => getPokemonData(inputField.value));
