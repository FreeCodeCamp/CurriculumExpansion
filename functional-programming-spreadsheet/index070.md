---
id: 5d792533d31e4f7fad33011d
title: Step 9
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
In <code>infixToFunction</code>, replace <code>addVar</code> with <code>(x, y) => x + y</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: In <code>infixToFunction</code>, replace <code>addVar</code> with <code>(x, y) => x + y</code>.
    testString: assert(/+["']\s*:\s*\(\s*x\s*,\s*y\s*\)\s*=>\s*x\s*\+\s*y/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {
  "+": addVar
};

const addVar = (x, y) => x + y;


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
