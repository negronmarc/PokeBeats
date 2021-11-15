var chooseBtn = document.getElementById('choose');
var dropdownBox = document.getElementById('dropdown');

chooseBtn.addEventListener ('click', function(event){
    var selectedPokemon = dropdownBox.value;
    console.log(selectedPokemon);
    window.location.href(selectedPokemon + "Pokedex.html");
});