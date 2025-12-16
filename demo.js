const apiKey = 'sk_live_51H3ll0W0rld1234567890abcdefghijklmnopqrstuvwxyz';
const secretToken = 'ghp_1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP';

const dbPassword = 'MySuperSecretPassword123!';
const dbConnection = 'mongodb://admin:password123@localhost:27017/mydb';

const awsAccessKey = 'AKIAIOSFODNN7EXAMPLE';
const awsSecretKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

function dangerousEval(userInput) {
    return eval(userInput);
}

function dangerousExec(command) {
    const { exec } = require('child_process');
    exec(command, (error, stdout, stderr) => {
        console.log(stdout);
    });
}

function unsafeInnerHTML(userData) {
    document.getElementById('content').innerHTML = userData;
}

function unsafeFetch(url) {
    fetch(url).then(response => {
        return response.json();
    });
}

async function fetchUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
}

async function processPayment(amount) {
    return new Promise((resolve, reject) => {
        if (amount > 0) {
            resolve({ success: true });
        } else {
            reject(new Error('Invalid amount'));
        }
    });
}

async function updateDatabase(record) {
    const db = await connectToDatabase();
    await db.insert(record);
}

function getUserById(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    return db.query(query);
}

function searchUsers(searchTerm) {
    const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
    return db.query(query);
}

function deleteUser(userId) {
    const query = `DELETE FROM users WHERE id = ${userId}`;
    return db.execute(query);
}

function displayUserComment(comment) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${comment}</p>`;
    document.body.appendChild(div);
}

function setCookieValue(name, value) {
    document.cookie = `${name}=${value}`;
}

function calculatePrice(quantity) {
    return quantity * 9.99;
}

function processOrder(order) {
    if (order.items && order.items.length > 0) {
        let total = 0;
        for (let i = 0; i < order.items.length; i++) {
            const item = order.items[i];
            if (item.price && item.quantity) {
                total += item.price * item.quantity;
            }
            if (item.discount) {
                total -= item.discount;
            }
        }
        if (order.shipping) {
            total += order.shipping;
        }
        if (order.tax) {
            total += order.tax;
        }
        return total;
    }
    return 0;
}

function getUserData(user_id) {
    const userData = fetchUser(user_id);
    return userData;
}

function processData(data) {
    const processed = data.map(x => x * 2);
    const unused = 'this is not used';
    return processed;
}

function debugFunction(value) {
    console.log('Debug value:', value);
    return value * 2;
}

function findUser(users, userId) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            return users[i];
        }
    }
    return null;
}

function processLargeArray(items) {
    const results = [];
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            results.push(items[i] * items[j]);
        }
    }
    return results;
}

function divideNumbers(a, b) {
    return a / b;
}

function accessArrayElement(arr, index) {
    return arr[index].value;
}

function getProperty(obj) {
    return obj.property.nested.value;
}

var oldVariable = 'should use const or let';

function publicAPI(endpoint) {
    return fetch(endpoint);
}

function doEverything() {
    const data = fetchData();
    const processed = processData(data);
    const validated = validateData(processed);
    const saved = saveData(validated);
    const notified = notifyUsers(saved);
    const logged = logActivity(notified);
    return logged;
}

function inconsistentStyle(  param1,param2, param3 ){
    return param1+param2+param3;
}

function weakPasswordValidation(password) {
    if (password.length > 3) {
        return true;
    }
    return false;
}

function insecureRandom() {
    const token = Math.random().toString(36);
    return token;
}

function calculateTotal1(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

function calculateTotal2(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

function parseJSON(jsonString) {
    return JSON.parse(jsonString);
}

function readFileSync(filename) {
    const fs = require('fs');
    return fs.readFileSync(filename, 'utf8');
}

function criticalBusinessLogic(data) {
    return data.processed;
}

function undocumentedFunction(param) {
    return param * 2;
}
