// Refernce elements
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Database initial setup
// Create an instance of a db object for us to store the open database in
let db;
// let request = window.indexedDB.open('notes_db', 1);

window.onload = function() {
  // open database
  let request = window.indexedDB.open('notes_os', 1);

  // onerror handler signifies that the database  didn't open successfully
  request.onerror = function() {
    console.log('Database failed to open');
  };

  // onsuccess handler signifies that the database opened successfully
  request.onsuccess = function() {
    console.log('Database opened successfully');

  // Store the opened database object in the db variable
  // for later use.
  db = request.result;

  // Run the displayData() function to display the notes already in the IDB
  displayData();
};

// Setup the database tables if this has not already been done
request.onupgradeneeded = function(e) {
  // Grab reference to the opened (or exisitng) database
  let db = e.target.result;

  // Create an objectStore to store our notes in (basically like a single table)
  // including a auto-incrementing key
  // IDBDatabase.createObjectStore()
  let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement: true });

  // Define what data items the objectStore will contain
  // Indexes (fields) using the IDBObject.createIndex() method
  // 'title' which will contain a title for each note
  // 'body' which will contain the body text of the note
  objectStore.createIndex('title', 'title', {unique: false});
  objectStore.createIndex('body', 'body', { unique: false });

  console.log('Database setup complete');
};

  // Adding data to the database
  // Create an onsubmit handler so that when the form is submitted the addData() function is run
  form.onsubmit = addData;
  // form.addEventListener('submit', addData);

  // Define the addData() function
  function addData(e) {
    // Prevent default
    e.preventDefault();

    // Grab the values entered into the form fields and store them in
    // an object ready for being inserted into the DB
    let newItem = { title: titleInput.value, body: bodyInput.value };

    // Open a read / write db transaction, ready for adding the data
    let transaction = db.transaction(['notes_os'], 'readwrite');

    // Call an object store that's already been added to the database
    let objectStore = transaction.objectStore('notes_os');

    // Make a request to add our newItem object to the object store
    let request = objectStore.add(newItem);
    request.onsuccess = function() {
      // Clear the form, ready for adding the next entry
      titleInput.value = '';
      bodyInput.value = '';
    };

    // Report on the success of the transaction, when everything is done
    transaction.oncomplete = function() {
      console.log('Transaction completed: database modification finished');

      // Update the display of data to show the newly added item,
      // by running displayData() again
      displayData();
    };

    transaction.onerror = function() {
      console.log('Transaction not opened due to error')
    };
  }

  // Define the displayData() function
  function displayData() {
    // Empty the contents of the list element each time the display is updated
    // If you don't do this, you'd get duplicates listed each time a new note is added
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    // Open our object store and then get a cursor, which iterates through all the
    // different data items in the store
    let objectStore = db.transaction('notes_os').objectStore('notes_os');
    objectStore.openCursor().onsuccess = function(e) {
      // Get a reference to the cursor
      let cursor = e.target.result;

      // If there is still another data item to iterate through, keep running this code
      if (cursor) {
        // Create a list item h3 and p to put each data item inside when displaying it
        // structure the HTML fragment, and append it inside the list
        const listItem = document.createElement('li');
        const h3 = document.createElement('h3');
        const para = document.createElement('p');

        listItem.appendChild(h3);
        listItem.appendChild(para);
        list.appendChild(listItem);

        // Put the data from the cursor inside the h3 and para
        h3.textContent = cursor.value.title;
        para.textContent = cursor.value.body;

        // Store the ID of the data item inside an attribute on the listItem, so we know
        // which item it corresponds to. This will be useful later when we want to delete items
        listItem.setAttribute('data-note-id', cursor.value.id);

        // Create a button and place it inside each listItem
        const deleteBtn = document.createElement('button');
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';

        // Set an event handler so that when the button is clicked,
        // the deleteItem() function is run
        deleteBtn.onclick = deleteItem;
        // deleteBtn.addEventListener('click', deleteItem);

        // Iterate to the next item in the cursor
        cursor.continue();
      } else {
        // Again, if the item is empty, display a 'No notes stored' message
        if (!list.firstChild) {
          const listItem = document.createElement('li');
          listItem.textContent = 'No notes stored.';
          list.appendChild(listItem);
        }

        // If there are no more curor items to iterate through, say so
        console.log('Notes all displayed');
      }
    };
  }

  // Define the deleteItem() function
  function deleteItem(e) {
    // Retrive the name of the task we want to delete
    // Convert it to a number before typing it use it with IDB;
    // IDB key values are type-senstive
    let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

    // Open a database transaction and delete the task,
    // finding it using the id we retrieved above
    let transaction = db.transaction(['notes_os'], 'readwrite');
    let objectStore = transaction.objectStore('notes_os');
    // Use the `IDBObjectStore.delete()` method to delete the record from the database,
    // passing it the ID
    let request = objectStore.delete(noteId);

    // report that the data item has been deleted
    transaction.oncomplete = function() {
      // delete the parent of the button
      // which is the list item, so it is no longer displayed
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
      console.log('Note ' + noteId + ' deleted.');

      // Again, if list item is empty, display a 'No notes stored' messgae
      if(!list.firstChild) {
        let listItem = document.createElement('li');
        listItem.textContent = 'No notes stored.';
        list.appendChild(listItem);
      }
    };
  }

};
