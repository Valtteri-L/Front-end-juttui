// Exercise 1: Basic Click Events

const alertBtn = document.getElementById('alertBtn');

alertBtn.addEventListener('click', function () {
    alert('You clicked me!');
});

const animalTable = document.getElementById('animalTable');
const tableContent = `<table id="example" class="display">
        <thead>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lion</td>
                <td>Savanna</td>
                <td style="color: red;">Carnivore</td>
            </tr>
            <tr>
                <td>Sheep</td>
                <td>Farm</td>
                <td style="color: green;">Herbivore</td>
            </tr>
        </tbody>
    </table>`

animalTable.addEventListener('click', function showTable() {
    document.getElementById('tableContainer').innerHTML = tableContent
});

// Exercise 2: Event Listeners and DOM Manipulation

const mouseHover = document.getElementById('mouseHover');

mouseHover.addEventListener('mouseover', function () {
    console.log('Stepped over me with a mouse!');
});

const headerClick = document.getElementById('clicky');

headerClick.addEventListener('click', function () {
    document.getElementById('clicky').style.color = 'red';
    document.getElementById('clicky').innerHTML = 'Bye bye mouse!';
});

// Exercise 3: Input Events

const textFocus = document.getElementById('feedback');

textFocus.addEventListener('focus', function () {
    document.getElementById('feedback').style.backgroundColor = '#dddddc';
});

textFocus.addEventListener('blur', function () {
    document.getElementById('feedback').style.backgroundColor = '';
    document.getElementById('status').innerHTML = '';
});

const charCount = document.getElementById('charcount');
const preview = document.getElementById('preview');

textFocus.addEventListener('input', function () {
    const currentLength = textFocus.value.length;
    charCount.textContent = `${currentLength}/200`;
    preview.textContent = textFocus.value;
    document.getElementById('preview').style.color = '';
});

// Exercise 4: Form Submission

const FbForm = document.getElementById('feedbackForm');

FbForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const currentLength = textFocus.value.length;
    if (currentLength < 10 || currentLength > 200) {
        document.getElementById('status').innerHTML = 'Must be 10-200!';
        document.getElementById('status').style.color = 'red';
    }
    else {
        document.getElementById('feedback').value = '';
        document.getElementById('charcount').textContent = '0/200';
        document.getElementById('status').innerHTML = '';
        document.getElementById('preview').innerHTML = 'Thank you for your feedback!';
        document.getElementById('preview').style.color = 'green';
    }
});

// Exercise 5: Keyboard Events
// random color generator function for the keypresses
function RGBmaker() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
};

let clicks = 0;

function clickCounter() {
    clicks += 1;
    return clicks
};

let pressedKeysAndColors = [];

document.addEventListener('keydown', function (event) {
    console.log(event.key);
    console.log(event.code);
    document.getElementById('keybox').innerHTML = event.key
    document.getElementById('keybox').style = "font-size: 50px; text-align: center;";
    document.getElementById('keybox').style.backgroundColor = RGBmaker();
    document.getElementById('keyinfo').textContent = `Key: ${event.key} Code: ${event.code}`;
    document.getElementById('counter').innerHTML = 'Clicks: ' + clickCounter();

    // making sure every key gets it's own unique color
    if (!pressedKeysAndColors.includes(event.key)) {
        pressedKeysAndColors.push(event.key, document.getElementById('keybox').style.backgroundColor);
    }
    if (pressedKeysAndColors.includes(event.key)) {
        document.getElementById('keybox').style.backgroundColor = pressedKeysAndColors[pressedKeysAndColors.indexOf(event.key) + 1];
    }
});
