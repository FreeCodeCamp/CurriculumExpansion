---
id: 5d7925335ab63018dcec11fe
title: Step 19
challengeType: 1
isRequired: true
---

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => str;

/*
Arrow functions can have multiple statements:
```
const fn = (x, y) => {
  const result = x + y;
  return result; // explicit return statement required
};
```
Use this syntax for the `highPrecedence` function.
*/
