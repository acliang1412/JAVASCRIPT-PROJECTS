// Create a dictionary of an Animal
var Animal = {
    Species: "Cat",
    Color: "Orange",
    Breed: "Tabby",
    Age: 2,
    Sound: "Meow!"
};

// Function to display the animal's sound
function show_animal_sound() {
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}