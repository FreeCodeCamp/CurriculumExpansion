---
id: 5d79253358e8f646cbeb2bb0
title: Step 15
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
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction["+"]
  );

/*
Change the `"+"` in the call to `infixToFunction` to `fn`.
`fn` is the operator that the user inputs (`+`, `-`, `*` or `/`) - we use `infixToFunction` to get the function that corresponds to it.
*/
