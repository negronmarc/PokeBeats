var chooseBtn = document.getElementById('choose');
var dropdownBox = document.getElementById('dropdown');
var requestURL = 'https://pokeapi.co/api/v2/pokemon';


chooseBtn.addEventListener ('click', function(event){
    var selectedPokemon = dropdownBox.value;
    console.log(selectedPokemon);
    // window.location.href(selectedPokemon + "Pokedex.html");
});

const getPokemonData = (pokemon) => { //function(pokemon)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        let id = ('00' + data.id).slice(-3);
        imageScreen.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
        nameScreen.innerHTML = data.name;
        typeScreen.innerHTML = data.types[0].type.name;
        idScreen.innerHTML = `#${data.id}`;
        aboutScreen.innerHTML = `Height: ${data.height * 10}cm Weight: ${
          data.weight / 10
        }kg`;
        inputField.value = '';
      });
  };
  inputField.addEventListener(
    'keydown',
    (event) => event.key === 'Enter' && searchBtn.click()
  );