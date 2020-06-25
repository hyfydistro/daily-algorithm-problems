const quotePara = document.querySelector('section p');

let quoteJson;

getQuotes('quotes.json', populateJson);

let intervalID = window.setInterval(showQuote, 10000);

async function getQuotes(url, callback) {

  // older browser support fetch request
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();

// Modern event listener
request.addEventListener('readystatechange', function checkRequest() {
  if (request.readyState === 4 && request.status === 200) {
    callback(request.response);
  }
});

// older browser support event listener
  // request.onreadystatechange = function() {
  //   if (request.readyState === 4 && request.status === 200) {
  //     callback(request.response);
  //   }
  // };

}

function populateJson(response) {
  quoteJson = response;
}

function showQuote() {
  console.log('Pass3');
  let random = Math.floor((Math.random()*25)); // Is this bracket necessary?
  console.log('Pass4');
  quotePara.textContent = quoteJson[random].quote + ' -- ' + quoteJson[random].author
}
