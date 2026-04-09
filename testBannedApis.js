function runUserCode(input) {
  return eval(input);
}

const fn = new Function("a", "b", "return a + b");
fn(1, 2);

fetch("https://example.com/data");

const fs = require("fs");
fs.readFileSync("/etc/passwd", "utf8");
