let response;
let machineActive = false;
const score = 75;

if (machineActive) {
  switch (true) {
    case (score >= 0 && score < 20):
      response = "That was a terrible score - total fail!";
      break;
    case (score >= 20 && score < 40):
      response = "You know some things, but it's a pretty bad score. Needs improvement";
      break;
    case (score >= 40 && score < 70):
      response = "You did a passable job, not bad!";
      break;
    case (score >= 70 && score < 90):
      response = "That's a great score, you really know your stuff.";
      break;
    case (score >= 90 && score <= 100):
      response = "What an amazing core! Did you cheat? Are you for real?";
      break;
    default:
      response = "This is not possible, an error has occurred.";
  }
} else {
  response = 'The machine is turned off. Turn it on to process your score.';
}

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${score}.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
