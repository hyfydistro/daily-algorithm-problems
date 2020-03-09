const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Random story picker

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw Text strings (where the 'story' is stored)

let storyText = 'it was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob Saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];



function result() {
  let newStory = storyText;
  let xItem, yItem, zItem;

  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  // Replace :insert_: strings with _Item
  // !!! Here could improve in designing for interface rather than implementation

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

// Check if there is a value in input for 'name'
  if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    // ===== Conversion Info =====
    // ===== Formulae for converting Pounds(lb) to Stones(st) =====
    // Pounds to Stones:
    // st = lb / 14
    // 1 pound = 1/14 stone
    // Stones to Pounds:
    // 1 lb = 0.0714... (round to 4 decimal points); 1 pound = 1.0714 stones

    // ===== Formulae for converting centigrade to Farenheiht =====
    // Centigrade to Farenheit:
    // Farenheit = Centigrade x 1.8 + 32
    // Farenheit to Centigrade:
    // Centigrade = (Farenheit - 32) / 1.8

    // !!! Here could improve in designing for interface rather than implementation

    let weight = Math.round(300);
    // Convert Pounds to stones
    let convertToPounds = Math.round(weight / 14);
    let poundString = `${convertToPounds} stone`;

    let temperature = Math.round(94);
    // Convert Farenheit to Centrigrade
    let convertToCentrigrade = Math.round((temperature - 32) / 1.8);
    let centrigradeString = `${convertToCentrigrade} centigrade`;

    // Updates storyText (aka 'newStory')
      newStory = newStory.replace('300 pounds', poundString);
      newStory = newStory.replace('94 fahrenheit', centrigradeString);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
