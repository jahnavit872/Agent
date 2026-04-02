async function execute(input) {
  eval(input);
}

async function executeAgain(input) {
  eval(input);
}

async function load() {
  fetch("https://example.com/data");
  fetch("https://example.com/data");
}

load();
