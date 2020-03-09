# Print List

\#loops

## Brief

Create a loop that goes through `items` in the provided `myArray` and print them out on the screen list items, which are appended to the provided `list`.

## Keynotes

* Difference between `[elem].appendChild()` and `[elem].append()`

`append()` was exclusively a JQuery thing, until browser updates. Now it is a JavaScript thing.

Browser compatibility: This is not supported by IE and Edge, but supported by Chrome(54+), Firefox(49+), and Opera(39+).

The JavaScript `append()` is similar to JQuery's `append()`.

**Definition**: The `ParentNode.append` method inserts a set of Node objects or `DOMString` objects after the last child of the `ParentNode`. `DOMString` objects are inserted as equivalent Text nodes.

`appendChild` is a `DOM` method. `append` was only a JQuery method, until of browser updates (I don't know when specifically or what year).

The key difference is that `appendChild` takes a node as a parameter, by that, if you want to add an empty paragraph to the DOM you need to create that element first.

e.g.

      var p = document.createElement('p')

Then you can add it to the DOM, whereas `append` creates that node for you, and adds it to the DOM right away whether it's a text element or an html element or a combination!

      p.append('<span>I have been appended</span>'); // JavaScript updated

      $('p').append('<span>I have been appended</span>'); // JQuery

**Key differences**:

`ParentNode.append()` allows you to also append DOMString object, whereaas `Node.appendChild()` only accepts Node objects.

`ParentNode.append()` has no return value, whereas `Node.appendChild()` returns the appended Node object.

`ParentNode.append()` can append several nodes and strings, whereas `Node.appendChild()` can only append one node.

* Error(s) Encountered:

`Argument 1 of Node.appendChild is not an object.`

Found at:

      for ( let i = 0, j = myArray.length; i < j; i++) {
        let insideList = document.createElement('li');
        let element = myArray[i];
        console.log(typeof element);
        insideList.appendChild(element); // <<<<< ERROR FOUND HERE, AND <<<<<
        list.appendChild('insideList'); // <<<<< ERROR FOUND HERE <<<<<
      }

`element` is a string of HTML. `Node.appendChild` only accepts a DOM node as an argument.

You have two options here, either wrap the text you want in a node and use `appendChild` or keep the current setup and use `innerHTML` which allows you to add a string to the HTML document.

e.g. myArray[i].innerHTML = element

* Difference between `innerHTML`, `.innerText` and `textContent`

**innerHTML**

_What it Returns_

The string inside and the HTML (or XML) markup contained within our string, including any spacing, line breaks, etc. Any HTML tags will be rendered.

_When to Use it_

When you want to see the HTML markup and what exactly is in our element - including any spacing, line break, and formatting irregulars.

_Additional Notes_

If the text inside the element includes the characters `&`, `<`, `>`, `innerHTML`, it will return these characters as HTML entities `&amp;`, `&lt;`, and `&gt;`.

_Prone to XSS attacks_

You can insert HTML into this, but the disadvantage of this method is, it has "cross site security attacks". Hackers may implement scripts, for one.

Caution: DO NOT use `innerHTML` unless you specifically intend to insert HTML within an element and have take the necessary precautions to ensure that the HTML you are inserting cannot contain malicious content. If you only want to insert text, use `textContent` or if you need to support IE8 and earlier, use feature detection to switch off between `textContent` and `innerText`.

**innerText**

`innerText` retrieves and sets the content of the tag as plain text, where `innerHTML` retrieves and sets the same content in HTML format.

_What it Returns_

The string inside and approximates the "rendered" text content of a node. It will be turned into basic word text, minus the indentation, extra line breaks and space. It's aware of styling and CSS; It will not apply styles.

_When to Use it_

When you only need to see what's in the element - with zero formatting. It is designed to be used for older browsers, such as, IE8. Otherwise, `textContent` is the better option.

_Additional Notes_

Ignores hidden elements (when you style an element to be hidden, e.g. `display: none`), header tags (`<style>`, `<script>`), ...

e.g. `TextContent` vs `innerText`
`textContent` returns full text and does not care about visibility, while `innerText` does.

      <p id="source">
        <style> #source {color: red;}</style>
        Text with breaking<br>point.
        <span style="display:none"> HIDDEN TEXT</span>
      </p>

`innerText` Output:

      Text with breaking point.

`textContent` Output:

\#source {color: red;} Text with breakingpoint. HIDDEN TEXT

In conclusion: `innerText` returns the VISIBLE text contained in a node, while `textContent` returns the FULL text.

_Performance_

It is roughly what you get if you selected the text and copied. It requires some information from the layout system to determine how the text is being presented to the user. In other words, it requires layout information to return the result. This is what makes `innerText` one of those properties that can cause the performance of your app to go off the rails. Most libraries that favor `innerText` over `textContent` do so accidentally only because `innerText` was in Internet Explorer before `textContent` arrived as a properly specified API.

e.g.

Use `innerText` while updating a table - `257ms`

Use `textContent` while updating a table - `2ms`

On WebKit browser, you should see a significant performance difference (300ms vs 1ms). On IE9, you'll see better performance and a much smaller difference. IE avoids computing a full layout and probably uese a special cod path that computes only what is needed for `innerText` - which really isn't much.

tl;dr: heavy under the hood.


**textContent**

A concatenation of the values of all TextNodes in the sub-tree. The `textContent` property sets or returns the textual content of the specified node, and all its descendants. In other words, `textContent` returns concatenated text of all text nodes. Which is almost like taking markup (i.e. innerHTML) and stripping it off the tags. There is no whitespace normalization performed, the text and whitespace are essentially spit out the _same way they're defined in the markup_. If you have a giant chunk of newlines in HTML source, you'll have them as part of `textContent` as well.

`innertext` is defined only for `HTMLElement` objects, while `textContent` is defined for all `Node` objects.

_What it Returns_

The content of all elementes in the node, including `script` and `style` elements. It's aware of formatting like spacing and line breaks and will return those as is (e.g. "escaped characters" `\n` will result in a line-break. However, `<br` will not; it will be ignored).

_When to Use it_

When you want to see what's in the element.

_Additional Notes_

Supported by most browsers. Officially supported by IE13, and not supported by IE8 or earlier.

`innertext` is aware of the rendered appearance of text, while `textContent` is not.

* Use `.textContent` over `.innerHTML`; it prevents XSS attacks.

## Credits

- _MDN_ - Test your skills: Loops

- _StackOverflow_ - [When trying to append basic html]('https://stackoverflow.com/questions/38277713/argument-1-of-node-appendchild-is-not-an-object-when-trying-to-append-basic-html') (JavaScript Error)

- _kellegous_ (dev-blog) [innerText vs textContent]('https://kellegous.com/j/2013/02/27/innertext-vs-textcontent')

- _StackOverflow_ - [Difference between textcontent vs innerText]('https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext')

- _PerfectionKills_ - [The poor misunderstood innerText]('http://perfectionkills.com/the-poor-misunderstood-innerText/')
