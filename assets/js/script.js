var chooseBtn = document.getElementById('choose');
var dropdownBox = document.getElementById('dropdown');

chooseBtn.addEventListener ('click', function(event){
    var selectedPokemon = dropdownBox.value;
    console.log(selectedPokemon);
    window.location.href(selectedPokemon + "Pokedex.html");
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
      