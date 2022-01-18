const submitBtn = document.getElementById("choose");
const dropdownEl = document.getElementById("select");
const mapImage = document.getElementById("region-map");
const textRegion = document.getElementById("region-text");
const bottomText = document.getElementById("bottom-text");

const getPokemonData = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      textRegion.innerHTML = data.game_indices[0].version.name;
      if (data.game_indices[0].version.name === "red") {
        mapImage.style.backgroundImage = `url('./assets/images/kanto-region.png')`;
        textRegion.innerHTML = `${data.name} first appeared in the kanto region`;
        bottomText.innerHTML = `Kanto was the first region to be introduced in the game series, featured in the Red, Blue and Yellow games along with the Generation III remakes and the Generation VII remakes. It is also accessible in the latter portion of Pokémon Gold, Silver, and Crystal after defeating the Elite Four.`;
      } else if (data.game_indices[0].version.name === "gold") {
        mapImage.style.backgroundImage = `url('./assets/images/johto-region.png')`;
        textRegion.innerHTML = `${data.name} first appeared in the johto region`;
        bottomText.innerHTML = `Johto is the second region introduced in the main game series, being featured in the Gold, Silver and Crystal games along with the Generation IV remakes. Geographically, Johto is located to the west of the Kanto region.`;
      } else if (data.game_indices[0].version.name === "ruby") {
        mapImage.style.backgroundImage = `url('./assets/images/hoenn-region.jpg')`;
        textRegion.innerHTML = `${data.name} first appeared in the hoenn region`;
        bottomText.innerHTML = `Hoenn is the featured region in the Generation III games, Pokémon Ruby, Sapphire and Emerald games along with the Generation VI remakes. Geographically, Hoenn is located to the southwest of Kanto and Johto.`;
      } else if (data.game_indices[0].version.name === "diamond") {
        mapImage.style.backgroundImage = `url('./assets/images/sinnoh-region.jpg')`;
        textRegion.innerHTML = `${data.name} first appeared in the sinnoh region`;
        bottomText.innerHTML = `Sinnoh is the region featured in the Generation IV games Pokémon Diamond, Pearl and Platinum games along with the Generation VIII remakes. Sinnoh is located to the north of the Kanto region.`;
      } else if (data.game_indices[0].version.name === "black") {
        mapImage.style.backgroundImage = `url('./assets/images/unova-region.jpg')`;
        textRegion.innerHTML = `${data.name} first appeared in the unova region`;
        bottomText.innerHTML = `Unova is the region featured in the Generation V games Pokémon Black and White and Black and White 2. It is said that Unova is located very far away from the other regions, needing a boat to get there.`;
      }
    });
};

dropdownEl.addEventListener(
  "click",
  (event) => event.key === "Enter" && submitBtn.click()
);

submitBtn.addEventListener("click", () => getPokemonData(dropdownEl.value));
