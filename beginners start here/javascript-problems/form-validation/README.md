# Form Vaildation

A client-side form validation example.

## Keynotes

* You can still use the form absolutely fine without the JavaScript being available, any sensible form implementation will have server-side validation active as well, because it is too easy for malicious users to bypass client-side validation e.g. by turning JavaScript off in the browser. The client-side validation is still really useful for reporting errors—users can know about mistakes they make instantly, rather than having to wait for a round trip to the server and a page reload. This is a definite usability advantage.

* We've made this form validation pretty accessible too. We've used <label> elements to make sure the form labels are unambiguously linked to their inputs, so screen readers can read them out alongside.

        <label for="name">Enter your name:</label>
        <input type="text" name="name" id="name">

* We only do the validation when the form is submitted — this is so that we don't update the UI too often and potentially confuse screen reader (and possibly other) users.

        form.onsubmit = validate;

        function validate(e) {
          errorList.innerHTML = '';
          for(let i = 0; i < formItems.length; i++) {
            const testItem = formItems[i];
            if(testItem.input.value === '') {
              errorField.style.left = '360px';
              createLink(testItem);
            }
          }

          if(errorList.innerHTML !== '') {
            e.preventDefault();
          }
        }

* In this example, we are hiding and showing the error message box using absolute positioning rather than another method such as visibility or display, because it doesn't interfere with the screen reader being able to read content from it.

* The focus() part of this example is a bit tricky. Chrome and Edge (and newer versions of IE) will focus the element when the link is clicked, without needing the onclick/focus() block. Safari will only highlight the form element with the link on its own, so needs the onclick/focus() block to actually focus it. Firefox doesn't focus the inputs properly at all in this context, so Firefox users can't take advantage of this at present (although everything else works fine). The Firefox issue should be fixed soon — work is being done to give Firefox behaviour parity with other browsers (see bug 277178).

        function createLink(testItem) {
          const listItem = document.createElement('li');
          const anchor = document.createElement('a');

          anchor.textContent = testItem.input.name + ' field is empty: fill in your ' + testItem.input.name + '.';
          anchor.href = '#' + testItem.input.name;
          anchor.onclick = function() {
            testItem.input.focus();
          };
          listItem.appendChild(anchor);
          errorList.appendChild(listItem);
        }

* In addition, the `errorField` is placed at the top of the source order (although it is positioned differently in the UI using CSS), meaning that users can find out exactly what's wrong with their form submissions and get to the input elements in question by going back up to the start of the page.

As a final note, we have used some WAI-ARIA attributes in our demo to help solve accessibility problems caused by areas of content constantly updating without a page reload (screen readers won't pick this up or alert users to it by default):

        <div class="errors" role="alert" aria-relevant="all">
          <ul>
          </ul>
        </div>

## Credits

- _MDN_ [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript)
