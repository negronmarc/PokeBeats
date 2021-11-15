var chooseBtn = document.getElementById('choose');
var dropdownBox = document.getElementById('dropdown');

chooseBtn.addEventListener ('click', function(event){
    var selectedPokemon = dropdownBox.value;
    console.log(selectedPokemon);
    window.location.href(selectedPokemon + "Pokedex.html");
});

// youtube api = 'https://www,googleapis.com/youtube/v3/playListItems';
const api_key = '&key=AIzaSyCxiSCXwO-sJjxWJhf-__CeSTm5SIcjvDA';
const playlistID = 'PL7B75E2DC0828B037'
  
const youtubeUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='

let youtubeAPI = youtubeUrl +
  playlistID +
  api_key;

fetch(youtubeAPI) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })
