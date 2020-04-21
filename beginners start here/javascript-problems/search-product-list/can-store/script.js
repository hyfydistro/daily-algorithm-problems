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
  let category = document.querySelector('#category');
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
  categoryGroup = [];
  finalGroup = [];

  // When the search button is clicked, invoke selectCategory() to start
  // a search running to select the category of products we want to display
  searchBtn.addEventListener('click', selectCategory);

  function selectCategory(e) {
    // Use preventDefault() to stop the form submitting - that would ruin the experience.
    // Because when you finish selecting, usually it submits because it is a form element.
    // When <option> is selected it will automatically submit (send) it to the server.
    e.preventDefault();

    // Clear out any previous search
    categoryGroup = [];
    finalGroup = [];

    // if the category and search term are the same as they were last time a
    // search was run, the results will be the same, so there is no point running
    // it again - just return out of the function
    if (category.value === lastCategory && searchTerm.value.trim() === lastSearch) {
      return;
    } else {
      // Update the record of last category and search term
      lastCategory = category.value;
      lastSearch = searchTerm.value.trim();

      // In this case we want to select all products, then filter them by the search term,
      // so we just set 'categoryGroup' to the entire JSON object, then run 'selectProducts()'
      if (category.value === 'ALL') {
        categoryGroup = products;
        selectProducts();

        // If a specific category is chosen, we need to filter out the products not in that category,
        // then put the remaining products inside categoryGroup, before running selectProducts()
      } else {
        // the values in the <option> elements are upperacse, whereas the categories
        // store in the JSON (under "type") are lowercase. We therefore need to convert
        // to lower case before we do a comparison
        let lowerCase = category.value.toLowerCase();
        for (let i = 0; i < products.length; i++) {
          // If a product's type property is the same as the chose category, we want to
          // display it, so we push it onto the categoryGroup array.
          if (products[i].type === lowerCaseType) {
            categoryGroup.push(products[i]);
          }
        }

        // Run selectProducts() after the filtering has been done
        selectProducts();
      }
    }
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
