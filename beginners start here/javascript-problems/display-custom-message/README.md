# Display Custom Message

## Brief

Create your own custom message box.

What you'll need:

* A container

* A Message

* A close button

Output:

        <div class="msgBox">
          <p>This is a message box</p>
          <button>x</button>
        </div>

## keynotes

* You want a message box to appear in response to user and system actions. In a real application, such a message box would probably be called in response to a new data being available, or an error having occured, or the user trying to delete their profile (with a message: "are you sure about this?"), or the user adding a new contact and the operation completing successfully, etc.

* In this demo, we'll get the message box to appear when the user clicks the button.

* **function invocation operator**

The parentheses in this context are sometimes called the "function invocation operator". You only  use them when you want to run the function immediately in the current scope.

e.g. When a function runs immediately in a store variable.

        btn.onclick = displayMessage();

e.g.

        const str = play();
        function play() {console.log("Hello world")};

In the same respect, the code inside the anonymous function is not run immediately, as it is inside the function scope.

* Use an icon for `msgType`

## Credits

- _iconfinder.com_
