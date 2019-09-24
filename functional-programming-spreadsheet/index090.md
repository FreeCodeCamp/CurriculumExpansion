---
id: 5d7925330918ae4a2f282e7e
title: Step 12
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
Use arrow function syntax to define a function `infixEval` which takes `str` and `regex` as arguments and returns `str.replace(regex, "")`.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Use arrow function syntax to define a function `infixEval` which takes `str` and `regex` as arguments and returns `str.replace(regex, "")`.
    testString: assert(/const\s+infixEval\s*=\s*\(\s*str\s*,\s*regex\s*\)\s*=>\s*str\.replace\s*\(\s*regex\s*,\s*['"]{2}\s*\)/.test(code));

```

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
