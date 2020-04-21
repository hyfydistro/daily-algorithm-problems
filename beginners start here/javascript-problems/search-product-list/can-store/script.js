// create a variable to store the products 'database' in
let products;

// use fetch to retrieve it, and report any errors that occur in the fetch operation
// once the products have been successfully loaded and formatted as a JSON object
// using response.json(), run the initialize() function
// Get JSON
// Promise
fetch('products.json').then(function(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.error("Unable to retrieve file");
  }
}).then(function(json) {
  products = json;
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

// Sets up the app locgic, declares required variables, contains all the other functions.
function initialize() {
  // grab the UI elements that we need to manipulate
  let category = docuent.querySelector('#category');
  let searchTerm = document.querySelector('#searchTerm');
  let searchBtn = document.querySelector('button');
  let main = document.querySelector('main');

  // Keep a record of what the last category and search term entered were
  let lastCategory = category.value;
  // No search has been made yet
  let lastSearch = '';

  // These contain the results of filtering by category, and seach term
  // finalGroup will contain the products that need to be displayed after
  // the searching has been done. Each will be an array containing objects.
  // Each object will represent a product.
  let categoryGroup,
  finalGroup;

  // To start with, set finalGroup to equal the entire products database,
  // then run updateDisplay(), so ALL products are displayed initially.
  finalGroup = products;
  updateDisplay();

  // Set both to equal an empty array, intime for searches to be run.
  category = [];
  finalGroup = [];

  // When the search button is clicked, invoke selectCategory() to start
  // a search running to select the category of products we want to display
  searchBtn.addEventListener('click', selectCategory);

  function selectCategory(e) {
    // Use preventDefault() to stop the form submitting - that would ruin the experience.
    // Because when you finish selecting, usually it submits because it is a form element.
    // When <option> is selected it will automatically submit (send) it to the server.
  }

  // ... Add the rest of the functions inside!
}

// selectProducts() Takes the group of products selected by selectCategory(), and further
// filters them by the entered search term (if one has been entered)
function selectProducts() {
  // add code here
}

// Start the process of updating the display with the new set of products
function updateDisplay() {
  // add code here
}

// FetchBlob uses fetch to retrieve the image from that product, and then sends the
// resulting image display URL and product on to showProduct() to finally
// display it

function fetchBlob(product) {
  // add code here
}

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

// Display a product inside the <main> element
function showProduct(objectURL, product) {

}
