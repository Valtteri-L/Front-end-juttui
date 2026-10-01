// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeTextButton = document.querySelector('#changeTextButton');
const taskOneText = document.querySelector('#animalText');

changeTextButton.addEventListener("click", function () {
    taskOneText.textContent = 'Birds can fly';
});

const changeBgButton = document.querySelector('#backgroundChange')

changeBgButton.addEventListener("click", function () {
    document.body.style.backgroundColor = 'red';
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
});

// -------------------------------------------------- TASK 2
// -------------------------------------------------- TASK 2

const showAnimalButton = document.querySelector('#showAnimalButton');
const animalContent = document.querySelector('#animalContent');

showAnimalButton.addEventListener('click', function () {
    const h3 = document.createElement("h3");
    animalContent.append(h3);
    h3.append('Animal of the Day.');

    const img = document.createElement("img");
    img.src = 'images/tiger.png'
    img.alt = 'tiger';
    animalContent.append(img);

    const p = document.createElement("p");
    p.append('This is the animal of the day. Tiger. A beast of the jungle.');
    animalContent.append(p);

    animalContent.hidden = false;
});

const hideAnimalButton = document.querySelector('#hideAnimalButton');

hideAnimalButton.addEventListener('click', function () {
    animalContent.hidden = true;
});

// -------------------------------------------------- TASK 2
// -------------------------------------------------- TASK 2

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    // function to update the DOM based on the selected animal

    console.log("selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "The most dangerous animal on the planet.";

    }
    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Tämä on norsu";
        animalDescription.textContent = "They remember things you don't.";
    }
    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Tämä on panda";
        animalDescription.textContent = "Har har har har har har har";
    }
    if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Tämä on pingu";
        animalDescription.textContent = "Mozart-Lacrimosa.mp3";
    }
})

animalImage.addEventListener('mouseenter', function () {
    animalImage.classList.add('image-highlight')
});

animalImage.addEventListener('mouseleave', function () {
    animalImage.classList.remove('image-highlight')
});

// listener for the select element from the drop down list.
// function to update the DOM based on the selected animal

// -------------------------------------------------- EXAMPLE 4 CSS
// -------------------------------------------------- EXAMPLE 4 CSS

const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});

function statuschk(input) {
    const count = input.value.length;
    if (count < 1) {
        return false
    } else {
        return true
    }
};

//Formin tiedot

const animalForm = document.querySelector("#animalForm")
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");
const output = document.querySelector("#output");

observationAnimal.addEventListener("input", function () {
});
observationLocation.addEventListener("input", function () {
});
observationDate.addEventListener("input", function () {
});

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animalOK = statuschk(observationAnimal);
    const locationOK = statuschk(observationLocation);
    const dateOK = statuschk(observationDate);

    if (animalOK && locationOK && dateOK) {
        const newRow = document.createElement("tr");
        const animalCell = document.createElement("td");
        const locationCell = document.createElement("td");
        const dateCell = document.createElement("td");

        console.log("Submitted Animal name: " + observationAnimal.value);
        console.log("Submitted Animal location: " + observationLocation.value);
        console.log("Submitted Animal date: " + observationDate.value);

        output.textContent = "Thanks for your submission!";

        animalCell.textContent = observationAnimal.value;
        locationCell.textContent = observationLocation.value;
        dateCell.textContent = observationDate.value;

        newRow.appendChild(animalCell);
        newRow.appendChild(locationCell);
        newRow.appendChild(dateCell);

        observationTableBody.appendChild(newRow);
    } else {
        console.log("error lähetyksessä");
        output.textContent = "Error with your submission!";
    }
    observationAnimal.value = '';
    observationLocation.value = '';
    observationDate.value = '';
});