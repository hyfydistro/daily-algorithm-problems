// Get JSON
// Promise
fetch('products.json').then(function(response) {
  return response.json();
}).then(function(json) {
  let products = json;
  initialize(products);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});



// xhr
let url = 'products.json'
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  if (xhr.status === 200) {
    let products = xhr.response;
    initialize(products);
  } else {
    console.log('Network request for products.json failed ' + xhr.status + ': ' + xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error('Fetch problem: ' + err.message);
};

xhr.send();


// Get Image from JSON
//Promise
fetch(url).then(function(response) {
  return response.blob();
}).then(function(blob) {
  let objectURL = URL.createObjectURL(blob);
  showProduct(objectURL, product);
});

// xhr
let url = 'images/' + product.image;

let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'blob';

xhr.onload = function() {
  if (xhr.status === 200) {
    let objectURL = URL.createObjectURL(blob);
    showProduct(objectURL, product);
  } else {
    console.error();
  }

}

xhr.onerror = function() {
  console.error('Fetch problem: ' + err.message);
};

xhr.send();
