---
id: 5d7925335ab63018dcec11fe
title: Step 19
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Arrow functions can have multiple statements:

```js
const fn = (x, y) => {
  const result = x + y;
  return result; // explicit return statement required
};
```

Use this syntax for the <code>highPrecedence</code> function.
</section>

## Instructions
<section id='instructions'>

```yml
tests:
  - text: Use the curly brace syntax in <code>highPrecedence</code>.
    testString: assert(code.replace(/\s/g, "").includes("highPrecedence=str=>{returnstr"));

```

</section>

## Tests
<section id='tests'>

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2)));

const highPrecedence = str => str;


</script>
```

</div>


### Before Test
<div id='html-setup'>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

</div>


### After Test
<div id='html-teardown'>

```html
</body>
</html>
```

</div>


</section>
