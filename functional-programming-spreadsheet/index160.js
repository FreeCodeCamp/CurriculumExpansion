---
id: 5d7925334c5e22586dd72962
title: Step 22
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
The ternary opertor has the following syntax:
```
const result = condition ? valueIfTrue : valueIfFalse;
const result = 1 === 1 ? 1 : 0; // 1
const result = 9 > 10 ? "Yes" : "No"; // "No"
```
Use this opertor to return `str` if `str === str2`, and an empty string (`""`) otherwise.
</section>

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

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str2;
};


