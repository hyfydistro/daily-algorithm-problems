# Score Evaluator Machine

\#conditionals statements

## Brief

Test some conditionals along with a nested structure. It is not like equal, less than, greater than, etc.

You are given two variables containing an indicator of the answer machine being switched on or not (`true` / `false`), and a score. You are also given an uninitialized `response` variable.

You need to create one `if...else` structure that checks whether the machine is switched on. Put a message into the `response` variables if it isn't, and tell the user to switch the machine on.

Inside the inner structure, use a `switch` statement.

The conditional operator tests should look like this:

* `score < 0 || score > 100` - "This is not possible, an error has occurred." This can be place under `default`.

* `score >= 0 && score < 20` - "That was a terrible score - total fail!"

* `score >= 20 && score < 40` - "You know some things, but it's a pretty bad score. Needs improvement"

* `score >= 40 && score < 70` - "You did a passable job, not bad!"

* `score >=70 && score < 90` - "That's a great score, you really know your stuff."

* `score >= 90 && score <= 100` - "What an amazing core! Did you cheat? Are you for real?"

Use the switch `default` option for the "not possible" option.

## Keynotes

* `Switch` statement

A conditional statement for multiple branches. However, when dealing with multiple conditions involved, you'll need to consider your input in the switch statement. We will have to use a boolean value to compare.

`switch (true) {...}` is the only thing necessary and for your case expressions to evaluate to booleans.

It works, because the value we give to the switch is used as the basis to compare against. The case expressions, evaluating to booleans will determine which case is run. Note, you could also turn this around and pass `switch(false) {...}` and have the desired expressions evaluate to `false` instead of `true`.

e.g.

The first comparison: `(true) === (score >= 0 && score < 20)`, i.e. evaluates to false.

The switch moves on to the next case.

At comparison: `(true) === (score >= 70 && score < 90)`, i.e.  evaluates to true. The case will run and terminates at the `break`.

Parentheses can help make it clearer, but they are optional (depending on the complexity of your expression).

> It's pretty simple, and a neat way (if it fits with what you are trying to do) of handling a long series of conditions, where perhaps a long series of `if () ... else if () ... else if () ...` might introduce a lot of visual noise or fragility.

> Use with caution, because it is a non-standard pattern, despite being valid code.

* Notice that we don't pass score to the switch but `true`. The value we give to switch is used as the basis to compare against.

## Credits

- _MDN_: Test your skills: Conditionals

- _StackOverflow_ - [Using a condition in a switch case](https://stackoverflow.com/questions/5464362/javascript-using-a-condition-in-switch-case)
