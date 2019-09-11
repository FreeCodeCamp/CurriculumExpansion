---
id: 5d792533aa6443215c9b16bf
title: Step 21
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Now, assign the result of calling `infixEval` with `str` and `regex` to `str2`.
Return `str2`.
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
  return str;
};


