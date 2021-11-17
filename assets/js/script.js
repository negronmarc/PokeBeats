var chooseBtn = document.getElementById('choose');
var dropdownBox = document.getElementById('dropdown');
var requestURL = 'https://pokeapi.co/api/v2/pokemon';
var videoURL = "";

chooseBtn.addEventListener ('click', function(event){
    var selectedPokemon = dropdownBox.value;
    console.log(selectedPokemon);
    // window.location.href(selectedPokemon + "Pokedex.html");
});

// youtube api = 'https://www,googleapis.com/youtube/v3/playListItems';
const api_key = '&key=AIzaSyCxiSCXwO-sJjxWJhf-__CeSTm5SIcjvDA';
const playlistID = 'PLcEun0ol29M22lX34eOrRA4vMkxGZINAq'

const youtubeUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId='

let youtubeAPI = youtubeUrl +
  playlistID + 
  api_key;

console.log(youtubeAPI);
// fetch(youtubeAPI) 
//     .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data)
//       });
      
=======
  
const youtubeUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId='

let youtubeAPI = youtubeUrl + playlistID + api_key;
console.log(youtubeAPI);

//Pokedex API 
fetch(youtubeAPI) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })






      const getPokemonData = (pokemon) => {
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
      searchBtn.addEventListener('click', () => getPokemonData(inputField.value));


