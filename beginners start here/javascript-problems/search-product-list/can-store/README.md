# Can Store

A webpage where ajax is used to filter and find items.

* Icons

- Bean Can
- Meat
- Soup
- Vegetable

* Images

- Baked Beans
- Carrot Coriander
- Chicken Noodle Soup
- Corned Beef
- Garden Peas
- Hot dogs
- Kidney Beans
- Mushy Peas
- Refried Beans
- Spam
- Chopped Tomato
- Tomato Soup

## Prerequisite

* How To Set Up Local Testing Server

1. Install Python 3 (see their website).

2. Open Git Bash (Linux) terminal in directory.

3. Type `python -m http.server 8000` and enter. Open `localhost:8000` in browser.

Note: To close, type `ctrl` + `c`.

## Keynotes

* CSS: `flex` shorthand

- `flex-grow`: A number specifying how much the item will grow relative to the rest of the flexible items.
- `flex-shrink`: A number specifying how much the item will shrink relative to the rest of the flexible items.
- `flex-basis`: The length of the item. Legal values: "auto", "inherit", or a number followed by "%", "px". "em" or any other length unit.

If the element is not a flexible item, the `flex` property has no effect.

Default value: `0 1 auto`

Syntax:

`flex: [flex-grow] [flex-shrink] [flex-basis];`

Description: The `flex-grow` CSS property sets the flex grow factor of a flex item main size. _It specifies how much of the remaining space in the flex container should be assigned to the item_.

The **remaining space** is the size of the flex container minus the size of all flex items' sizes together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.

* Array JSON vs Object Literal Notation JSON

It is similar to saying Array vs Object Literal Notation (without the JSON).

Whether you want to access via index or key / value pair, it's up to the data and which gives easier access.
