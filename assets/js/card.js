function getVideo() {
  if (pokemonName == "darkrai") {
    var iframe = document.getElementById("frame");
    // manually created iframe
    iframe.setAttribute("src", "https://www.youtube.com/embed/JxsmsoauN70");
    iframe.setAttribute("width", "660");
    iframe.setAttribute("height", "380");
    iframe.setAttribute("title", "Pokemon Video");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", true);
  } else if (pokemonName == "cresselia") {
    var iframe = document.getElementById("frame");
    // manually created iframe
    iframe.setAttribute("src", "https://www.youtube.com/embed/O85MXq7igy4");
    iframe.setAttribute("width", "660");
    iframe.setAttribute("height", "380");
    iframe.setAttribute("title", "Pokemon Video");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", true);
  } else if (pokemonName == "regigigas") {
    var iframe = document.getElementById("frame");
    // manually created iframe
    iframe.setAttribute("src", "https://www.youtube.com/embed/0-X1yJL-cO4");
    iframe.setAttribute("width", "660");
    iframe.setAttribute("height", "380");
    iframe.setAttribute("title", "Pokemon Video");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", true);
  } else {
    //Fetch the youtube API
    fetch(youtubeAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //creating youtube video
        var videoId = data.items[videoArrIndex].snippet.resourceId.videoId;
        console.log(videoId);
        var iframe = document.getElementById("frame");
        // manually created iframe
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
        iframe.setAttribute("width", "660");
        iframe.setAttribute("height", "380");
        iframe.setAttribute("title", "Pokemon Video");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute("allowfullscreen", true);
      });
  }
}

const submitBtn = document.getElementById("choose");
const dropdownEl = document.getElementById("select");
const nameScreen = document.getElementById("name-screen");
const cardName = document.getElementById("header-pokename");
const cardImage = document.getElementById("pokemon-image");
const imageScreen = document.getElementById("main-screen");
const songTitle = document.getElementById("song-title");
const circleId = document.getElementById("id-box");
const versionList = document.getElementById("versions");
const typeBox = document.getElementById("type");
const cardBackground = document.getElementById("background-card");
const firstGame = document.getElementById("first-game");
const secondGame = document.getElementById("second-game");
const abilityBox = document.getElementById("bottom-box");
const moveTitle = document.getElementById("move-box");
const move1 = document.getElementById("move-1");
const move2 = document.getElementById("move-2");
const move3 = document.getElementById("move-3");
const move4 = document.getElementById("move-4");

var pokemonName = "";
var videoArrIndex = 0;

const getPokemonData = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      let id = ("00" + data.id).slice(-3);
      var timer = setInterval(() => {
        cardImage.style.backgroundImage = `url('https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png')`;
        clearInterval(timer);
      }, 200);
      cardName.innerHTML = data.name;
      moveTitle.innerHTML = `What will ${data.name} do?`;
      circleId.innerHTML = `ID# ${data.id}`;
      pokemonName = data.name;
      abilityBox.innerHTML = `Ability: ${data.abilities[0].ability.name}`;
      move1.innerHTML = data.moves[0].move.name;
      move2.innerHTML = data.moves[1].move.name;
      move3.innerHTML = data.moves[2].move.name;
      move4.innerHTML = data.moves[3].move.name;
      typeBox.innerHTML = data.types[0].type.name;
      if (data.types[0].type.name === "electric") {
        typeBox.style.backgroundColor = "#dab026";
        move1.style.backgroundColor = "#dab026";
        move2.style.backgroundColor = "#dab026";
        move3.style.backgroundColor = "#dab026";
        move4.style.backgroundColor = "#dab026";
        cardBackground.style.backgroundImage =
          "linear-gradient(#f0e20d, #f4f5d2, #f0e20d, #f4f5d2, #f0e20d)";
      } else if (data.types[0].type.name === "water") {
        typeBox.style.backgroundColor = "#4390bb";
        move1.style.backgroundColor = "#4390bb";
        move2.style.backgroundColor = "#4390bb";
        move3.style.backgroundColor = "#4390bb";
        move4.style.backgroundColor = "#4390bb";
        cardBackground.style.backgroundImage =
          "linear-gradient(#0f6896, #659cd0, #0f6896, #659cd0, #0f6896)";
      } else if (data.types[0].type.name === "ice") {
        typeBox.style.backgroundColor = "#4390bb";
        move1.style.backgroundColor = "#4390bb";
        move2.style.backgroundColor = "#4390bb";
        move3.style.backgroundColor = "#4390bb";
        move4.style.backgroundColor = "#4390bb";
        cardBackground.style.backgroundImage =
          "linear-gradient(#0f6896, #659cd0, #0f6896, #659cd0, #0f6896)";
      } else if (data.types[0].type.name === "psychic") {
        typeBox.style.backgroundColor = "#554454";
        move1.style.backgroundColor = "#554454";
        move2.style.backgroundColor = "#554454";
        move3.style.backgroundColor = "#554454";
        move4.style.backgroundColor = "#554454";
        cardBackground.style.backgroundImage =
          "linear-gradient(#7f5880, #bcb6d9, #7f5880, #bcb6d9, #7f5880)";
      } else if (data.types[0].type.name === "fire") {
        typeBox.style.backgroundColor = "#9f1e12";
        move1.style.backgroundColor = "#9f1e12";
        move2.style.backgroundColor = "#9f1e12";
        move3.style.backgroundColor = "#9f1e12";
        move4.style.backgroundColor = "#9f1e12";
        cardBackground.style.backgroundImage =
          "linear-gradient(#ed5d40, #edb69c, #ed5d40, #edb69c, #ed5d40)";
      } else if (data.types[0].type.name === "dragon") {
        typeBox.style.backgroundColor = "#a9997b";
        move1.style.backgroundColor = "#a9997b";
        move2.style.backgroundColor = "#a9997b";
        move3.style.backgroundColor = "#a9997b";
        move4.style.backgroundColor = "#a9997b";
        cardBackground.style.backgroundImage =
          "linear-gradient(#d1c3ae, #e2e1dd, #d1c3ae, #e2e1dd, #d1c3ae)";
      } else if (data.types[0].type.name === "rock") {
        typeBox.style.backgroundColor = "#af5229";
        move1.style.backgroundColor = "#af5229";
        move2.style.backgroundColor = "#af5229";
        move3.style.backgroundColor = "#af5229";
        move4.style.backgroundColor = "#af5229";
        cardBackground.style.backgroundImage =
          "linear-gradient(#b2612a, #dbc091, #b2612a, #dbc091, #b2612a)";
      } else if (data.types[0].type.name === "steel") {
        typeBox.style.backgroundColor = "#9d9ea2";
        move1.style.backgroundColor = "#9d9ea2";
        move2.style.backgroundColor = "#9d9ea2";
        move3.style.backgroundColor = "#9d9ea2";
        move4.style.backgroundColor = "#9d9ea2";
        cardBackground.style.backgroundImage =
          "linear-gradient(#63747b, #b1cdd8, #63747b, #b1cdd8, #63747b)";
      } else if (data.types[0].type.name === "grass") {
        typeBox.style.backgroundColor = "#a2c256";
        move1.style.backgroundColor = "#a2c256";
        move2.style.backgroundColor = "#a2c256";
        move3.style.backgroundColor = "#a2c256";
        move4.style.backgroundColor = "#a2c256";
        cardBackground.style.backgroundImage =
          "linear-gradient(#93c85e, #bcd27d, #93c85e, #bcd27d, #93c85e)";
      } else if (data.types[0].type.name === "normal") {
        typeBox.style.backgroundColor = "#a99664";
        move1.style.backgroundColor = "#a99664";
        move2.style.backgroundColor = "#a99664";
        move3.style.backgroundColor = "#a99664";
        move4.style.backgroundColor = "#a99664";
        cardBackground.style.backgroundImage =
          "linear-gradient(#cbc2a1, #faf9ee, #cbc2a1, #faf9ee, #cbc2a1)";
      } else if (data.types[0].type.name === "dark") {
        typeBox.style.backgroundColor = "#114167";
        move1.style.backgroundColor = "#114167";
        move2.style.backgroundColor = "#114167";
        move3.style.backgroundColor = "#114167";
        move4.style.backgroundColor = "#114167";
        cardBackground.style.backgroundImage =
          "linear-gradient(#051a49, #124e73, #051a49, #124e73, #051a49)";
      } else {
        typeBox.style.backgroundColor = "black";
      }
      versionList.innerHTML = `First Video Game Appearance: Pokemon ${data.game_indices[0].version.name}/${data.game_indices[1].version.name}`;
      if (
        (data.game_indices[0].version.name === "red",
        data.game_indices[1].version.name === "blue")
      ) {
        firstGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/71ZlDsoz7BL._SL1064_.jpg')`;
        secondGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/81rcAdryhEL._SL1061_.jpg')`;
      } else if (
        (data.game_indices[0].version.name === "gold",
        data.game_indices[1].version.name === "silver")
      ) {
        firstGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/61VMTJF0EDL._SX342_.jpg')`;
        secondGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/81UQlso+frL._SL1500_.jpg')`;
      } else if (
        (data.game_indices[0].version.name === "ruby",
        data.game_indices[1].version.name === "sapphire")
      ) {
        firstGame.style.backgroundImage = `url('https://now.estarland.com/images/products/hr/10810/045496732530.jpg')`;
        secondGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/61RDD36KWPL.jpg')`;
      } else if (
        (data.game_indices[0].version.name === "diamond",
        data.game_indices[1].version.name === "pearl")
      ) {
        firstGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/51oEpmg-6ZL.jpg')`;
        secondGame.style.backgroundImage = `url('https://m.media-amazon.com/images/I/51dGqCLLP-L.jpg')`;
      } else if (
        (data.game_indices[0].version.name === "black",
        data.game_indices[1].version.name === "white")
      ) {
        firstGame.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/e/e1/Pokemon_Black_Box_Artwork.jpg')`;
        secondGame.style.backgroundImage = `url('https://cdn2.bulbagarden.net/upload/thumb/0/08/White_EN_boxart.png/250px-White_EN_boxart.png')`;
      }
      //switch statement to catch pokemon name.
      switch (pokemonName) {
        case "mew":
          videoArrIndex = 7;
          getVideo();
          break;
        case "mewtwo":
          videoArrIndex = 30;
          getVideo();
          break;
        case "articuno":
          videoArrIndex = 0;
          getVideo();
          break;
        case "zapdos":
          videoArrIndex = 0;
          getVideo();
          break;
        case "moltres":
          videoArrIndex = 0;
          getVideo();
          break;
        case "raikou":
          videoArrIndex = 1;
          getVideo();
          break;
        case "entei":
          videoArrIndex = 1;
          getVideo();
          break;
        case "suicune":
          videoArrIndex = 1;
          getVideo();
          break;
        case "lugia":
          videoArrIndex = 19;
          getVideo();
          break;
        case "ho-oh":
          videoArrIndex = 18;
          getVideo();
          break;
        case "regirock":
          videoArrIndex = 4;
          getVideo();
          break;
        case "regice":
          videoArrIndex = 4;
          getVideo();
          break;
        case "registeel":
          videoArrIndex = 4;
          getVideo();
          break;
        case "regigigas":
          videoArrIndex = 4;
          getVideo();
          break;
        case "latios":
          videoArrIndex = 2;
          getVideo();
          break;
        case "latias":
          videoArrIndex = 2;
          getVideo();
          break;
        case "kyogre":
          videoArrIndex = 3;
          getVideo();
          break;
        case "groudon":
          videoArrIndex = 3;
          getVideo();
          break;
        case "rayquaza":
          videoArrIndex = 28;
          getVideo();
          break;
        case "uxie":
          videoArrIndex = 11;
          getVideo();
          break;
        case "mesprit":
          videoArrIndex = 11;
          getVideo();
          break;
        case "azelf":
          videoArrIndex = 11;
          getVideo();
          break;
        case "dialga":
          videoArrIndex = 10;
          getVideo();
          break;
        case "palkia":
          videoArrIndex = 10;
          getVideo();
          break;
        case "cresselia":
          videoArrIndex = 37;
          getVideo();
          break;
        case "heatran":
          videoArrIndex = 9;
          getVideo();
          break;
        case "cobalion":
          videoArrIndex = 20;
          getVideo();
          break;
        case "terrakion":
          videoArrIndex = 20;
          getVideo();
          break;
        case "virizion":
          videoArrIndex = 20;
          getVideo();
          break;
        case "reshiram":
          videoArrIndex = 21;
          getVideo();
          break;
        case "zekrom":
          videoArrIndex = 21;
          getVideo();
          break;
        case "kyurem":
          videoArrIndex = 22;
          getVideo();
          break;
        case "darkrai":
          getVideo();
          break;
        default:
          console.log("The bad");
      }
    });
};

dropdownEl.addEventListener(
  "click",
  (event) => event.key === "Enter" && submitBtn.click()
);

submitBtn.addEventListener("click", () => getPokemonData(dropdownEl.value));
// youtube api = 'https://www,googleapis.com/youtube/v3/playListItems';
const api_key = "&key=AIzaSyCxiSCXwO-sJjxWJhf-__CeSTm5SIcjvDA";
const playlistID = "PLcEun0ol29M22lX34eOrRA4vMkxGZINAq";
const youtubeUrl =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=";
let youtubeAPI = youtubeUrl + playlistID + api_key;
console.log(youtubeAPI);

// Local Storage

$("#save").on("click", clickBtn);

function clickBtn() {
  var inputEl = $("#select");
  var inputValue = inputEl[0].value;
  localStorage.setItem("pokemon", inputValue);
}

var inputEl = $("#select");
inputEl[0].value = localStorage.getItem("pokemon");
if (inputEl[0].value !== "") {
  getPokemonData(inputEl[0].value);
}
