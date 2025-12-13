async function fetchData() {
  return Promise.resolve("data");
}

async function processData() {
  fetchData();
}

async function saveData() {
  fetchData().then(data => data.toUpperCase());
}

async function run() {
  processData();
  saveData();
}
