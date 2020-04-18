# A Simple Ajax Request

This will act as our fake database. In a real application, we'd be more likely to use a server-side language like PHP, Python, or Node to request our data from a database.

## Prerequisite

* How To Set Up Local Testing Server

1. Install Python 3 (see their website).

2. Open Git Bash (Linux) terminal in directory.

3. Type `python -m http.server 8000` and enter. Open `localhost:8000` in browser.

Note: To close, type `ctrl` + `c`.

## Keynotes

* `xhr.responseType` return `text` as default.

* Fetching a resource from the network is an asynchronous operation, meaning that you have to wait for that operation to complete (e.g., the resource is returned from the network) before you can do anything with that response, otherwise, an error will be thrown. XHR allows you to handle this using its `onload` event handler - this is run when the `load` event fires (when the response has returned). When this has occurred, the response data will be available in the `response` property of the XHR request object.

## Credits

- _MDN_ - Fetching Data From the Server
