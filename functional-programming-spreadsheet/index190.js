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
  return str === str2 ? str : highPrecedence(str2);
};

const spreasheetFunctions = {
  "": x => x
};

/*
Define a function `applyFn` which takes an argument `str`.
It should set `noHigh` to `highPrecedence(str)`, `infix` to `/([0-9.]+)([+-])([0-9.]+)/`, `str2` to `infixEval(noHigh, infix)` and `regex` to `/([a-z]*)\(([0-9., ]*)\)(?!.*\()/i`.
It doesn't have an explicit return value so will return `undefined`.
*/
