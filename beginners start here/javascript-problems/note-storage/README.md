# Note Storage

\#Indexed Database API

1. Create a form and make reference to the script.
2. Initialise IndexedDB.
3. Set interactions.

- Create new IndexedDB
- Set up object storage (database) property
- Set up key-value pairs
- Connect key-value pairs to transaction actions
- Set up actions for on add() functions and for on remove() functions

Note: These all require listening when the command is a success and is therefore asynchronous for our convenient (add a lot of event listeners)!

## Keynotes

* `let request = window.indexed.open('notes_db', 1);`

This line creates a `request` to open version of `1` of a database called `notes_db`. If this doesn't already exist, it will be created for you by subsequent code. You will see this request pattern used very often throughout IndexedDB. Database operations take time. You don't want to hang the browser while you wait for the results, so database operations are asynchronous, meaning they will happen at some point in the future, and you get notified when they're done.

To handler this IndexedDB, you create a request object (which can be called anything you like). You can then use event handlers to run code when the request completes, fails, etc.

* The _version_ number is important for upgrading your database (e.g. changing the table structure). You have to run your code again with an increased version number, different schema specified inside the `onupgradeneeded` handler, etc.

* `[request].onupgradeneeded`

This handler runs if the database has not already been set up, or if the database is opened with a bigger version number than the existing stored database (when performing an upgrade).

* `IDBDatabase.createObjectStore()`

Used to create a new object store inside our opened database called [whatever you name it].

e.g.

        let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement: true });

This is equivalent to a single table in a conventional database system.

From the above example, it is given the name notes, and also specified an `autoIncrement` key field called `id` (in each new record this will automatically be given an icnremented value) - the developer doesn't need to  set this explicitly. Being the key, the `id` field will be used to uniquely identify records, such as when deleting or displaying a record.

This method takes the `IDBDatabase` interface creates and returns a new object store or index.

The method takes the name of the store as well as a parameter object that lets you define important optional properties. You can use the property to uniquely identify individual objects in the store. As the property is an identifier, it should be unique to every object, and every object should have that property.

This method can be called ONLY within a `versionchange` transaction.

**Syntax**

        IDBDatabase.createObjectStore(name);
        IDBDatabase.createObjectStore(name, options);

**Parameters**

`name`
The name of the enw object store to be created. Note, it is possible to create an object store with an empty name.

`optionalParameters` [optional]
This includes the following properties:
- `keyPath`
- `autoIncrement`

**Return**

A new `IDBObjectStore`

* `IDBObjectStore.createIndex()` method

The `createIndex()` method of the `IDBObjectStore` interface creates and returns a new `IDBIndex` object in the connected database. It creates a new field / column defining a new data point for each database record to contain.

IndexedDB indexes can contain **any** JavaScript data type.

Note, that this method can be called ONLY from a `versionchange` transaction mode callback.

**Syntax**

        var myIDBIndex = objectStore.createIndex(indexName, keyPath);
        var myIDBIndex = objectStore.createIndex(indexName, keyPath, objectParameter);

**Parameters**

`indexName`
The name of the index to create. Note, it is possible to create an index with an empty name.

`keyPath`
The key path for the index to use. Note, it is possible to create an index with an empty `keyPath`, and also to pass  in a sequence (array) as a `keyPath`.

`objectParameter` [optional]
May include the following:
- `unique`: If true, the index will not allow duplicate values for a single key.
- `multiEntry`
- `locale`

**Return Value**

An `IDBIndex` object - the newly created index.

* `IDBDatabase.transaction()` method

This transaction object allows us to access the object store so we can do something to it, e.g. add a new record.

The `transaction` method of the `IDBDatabase` interface immediately returns a transaction object (`IDBTransaction`) containg the `IDBTransaction.objectStore` method, which you can use to access your object store.

**Syntax**

        IDBDatabase.transaction(storeNames);
        IDBDatabase.transaction(storeNames, mode);

**Parameters***

`storeNames`
The names of object stores that are in the scope of the new transaction, declared as an array of strings. Specify only the object stores that you need to access.

If you need to access only on object store, you can specify its name as a string. Therefore the following lines are equivalent:

        var transaction = db.transaction(['my-store-name']);
        var transaction = db.transaction('my-store-name');

If you need to access all object stores in the database, you can use the property `IDBDatabase.objectStoreName`:

var transaction = db.transaction(db.objectStoreNames);

Note: Passing an empty array will throw an exception.

`mode` [optional]
The types of access that can be performed in the transaction. Transaction are opeend in one of three mdoesL `readonly`, `readwrite` and `readwriteflush` (non-standard, Firefox-only). `versionchange` mode can't be specified here. If you don't provide the parameter, the default access mode is `readonly`. To avoid slowing things down, don't open a `readwrite` transaction unless you actually need to write into the database.

**Return Value**

An `IDBTransaction` object.

* `IDBTransaction.objectStore()` method

The `objectStore()` method of the `IDBTransaction` interface returns an object store that has already been added to the scope of this transaction.

Every call to this method on the same transaction object, with the same name, returns the same `IDBObjectStore` instance. If this method is called on a different transaction object, a different `IDBObjectStore` instance is returned.

`IDBTransaction.objectStore(name);`

**Parameters**

`name`
The name of the request object store.

**Return Value**
An `IDBObjectStore` object for accessing an object store.

* `IDBObjectStore.add()` method

The `add()` method of the `IDBObjectStore` interface returns an `IDBRequest` object, and, in a separate thread, creates a structured clone of the value, and stores the cloned value in the object store. This is for adding new records to an object store.

To determine if the add operation has completed successfully, listen for the transaction `complete` event in addiiotn to the `IDBObjectStore.add` request's `success` event, because the transaction may still fail after the success event fires. In other words, the success event is only triggered when the transaction has been successfully queued.

The add method is an _inset only_ method. If a record already exists in the object store with the `key` paramter as its key, then an error `ConstrainError` event is fired on the returned request object. For updating exisitng records, you should use the `IDBObjectStore.put` method instead.

**Syntax**

        var request = objectStore.add(value);
        var request = objectStore.add(value, key);

**Parameters**

`value`
The value to be stored.

`key` [optional]
The key to use to identify the record. If unspecified, it results to null.

**Returns**

An `IDBRequest` object on which subsequent events related to this operation are fired.

* `IDBObjectStore.openCursor()`

The `openCursor()` method of the `IDBObjectStore` interface returns an `IDBRequest` object, and, in a separate thread, returns a new `IDBCursorWithValue`object. Used to iterating through an object store with a cursor.

To determine if the add operation has completed successfully, listen for the result's success event.

**Syntax**

        var request = ObjectStore.openCursor();
        var request = ObjectStore.openCursor(query);
        var request = ObjectStore.openCursor(query, direction);

**Parameters**

`query` [optional]
A key or `IDBKeyRange` to be queried. If a single valid key is passed, this will default to a range containing only that key. If nothing is passed, this will default to a key range that selects all the records in this object store.

`direction` [optional]
An `IDBCursorDirection` telling the cursor what direction to travel. Valid values are `"next"`, `"nextunique"`, `"prev"`, and `"prevunique"`. The default is `"next"`.

**Return Value**

An `IDBRequest` object on which subsequent events related to this operation are fired.

* `IDBCursor.continue()`

At the end of the if-block, we use the `cursor.continue();` method to advance the cursor to the next record in the datastore, and run the content of the `if` block again. If there is another record to iterate to, this causes it to be inserted into the page, and then `continue()` is run again, and so on.

Advances the cursor to the next position along its direction, to the item whose key matches the optional `key` parameter.

The `continue()` method of the `IDBCursor` interface advances the cursor to the next position along its direction, to the item whose key matches the optional key parameter. If no key is specified, the cursor advances to the immediate next position, based on its direction.

**Syntax**

        cursor.continue(key);

**Parameters**

`key` [optional]
The key to position the cursor at.

* `IDBCursor`

The `IDBCursor` interface of the _IndexedDB API_ represents a cursor for traversing or iterating over multiple records in a database.

The cursor has a source that indicates which index or object store it is iterating over. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of records keys. The cursor enables an application to asynchronously process al; the records in the cursor's range.

You can have unlimited number of cursors at the same time. You always get the same `IDBCursoe` object representing a given cursor. Operations are performed on the underlying index or object store.

* `IDBObjectStore.delete()`

## Credits

- _MDN_ - Client-Side Storage
