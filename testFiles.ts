
export function loginUser(username: string, password: string) {
  const DB_PASSWORD = "admin_pass_12345"; // Issue #1: Hardcoded database password (SECURITY)
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`; // Issue #2: SQL injection (SECURITY)
  document.getElementById('welcome').innerHTML = `<h1>Welcome ${username}</h1>`; // Issue #3: XSS vulnerability (SECURITY)
  
  return db.execute(query);
}


export function deployApp(branch: string) {
  const API_KEY = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"; // Issue #1: Hardcoded GitHub token (SECURITY)
  const { exec } = require('child_process');
  exec(`git checkout ${branch} && npm run deploy`, (error, stdout) => { // Issue #2: Command injection (SECURITY)
    const result = JSON.parse(stdout // Issue #3: Syntax error - missing closing parenthesis (BUG)
  });
}


export function processUserData(userCode: string, data: any) {
  const JWT_SECRET = "my-super-secret-jwt-key-123"; // Issue #1: Hardcoded JWT secret (SECURITY)
  const result = eval(userCode); // Issue #2: eval() with user input (SECURITY)
  const token = jwt.sign(data, JWT_SECRET, { expiresIn: expirationTime }); // Issue #3: Undefined variable 'expirationTime' (BUG)
  return { result, token };
}


export function updateProfile(userId: string, bio: string) {
  const DB_PASS = "postgres_admin_123"; // Issue #1: Hardcoded database password (SECURITY)
  const query = `UPDATE users SET bio = '${bio}' WHERE id = ${userId}`; // Issue #2: SQL injection (SECURITY)
  document.querySelector('.user-bio').innerHTML = bio; // Issue #3: XSS vulnerability (SECURITY)
  return db.execute(query);
}


export function backupDatabase(filename: string) {
  const AWS_KEY = "AKIAIOSFODNN7EXAMPLE"; // Issue #1: Hardcoded AWS access key (SECURITY)
  const cmd = `mysqldump -u root database > ${filename}`; // Issue #2: Command injection (SECURITY)
  const result = someUndefinedFunction(); // Issue #3: Undefined function call (BUG)
  exec(cmd, (err, out) => console.log(out));
}


export async function chargeCard(amount: string, card: string) {
  const STRIPE_KEY = "sk_live_abcdefghijklmnopqrstuvwxyz123456"; // Issue #1: Hardcoded Stripe API key (SECURITY)
  // No validation on amount or card (Issue #2: Missing input validation)
  return await fetch('https://api.stripe.com/v1/charges', {
    method: 'POST'
    headers: { 'Authorization': `Bearer ${STRIPE_KEY}` }, // Issue #3: Syntax error - missing comma after 'POST' (BUG)
    body: JSON.stringify({ amount, card })
  });
}


export function searchUsers(searchTerm: string, filter: string) {
  const AUTH_TOKEN = "bearer_token_xyz789abc123"; // Issue #1: Hardcoded auth token (SECURITY)
  const filterFunc = eval(`(user) => user.${filter}`); // Issue #2: eval() creates function from user input (SECURITY)
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`; // Issue #3: SQL injection (SECURITY)
  return db.execute(query).filter(filterFunc);
}


export function renderComment(comment: string, userId: string) {
  const container = document.createElement('div');
  container.innerHTML = `<p>${comment}</p>`; // Issue #1: XSS - unescaped user input (SECURITY)
  exec(`echo "User ${userId} commented" >> /var/log/comments.log`); // Issue #2: Command injection via userId (SECURITY)
  console.log(undeclaredVariable); // Issue #3: Undefined variable (BUG)
}


export async function findUser(username: string, age: any) {
  const MONGO_URL = "mongodb://admin:password123@localhost:27017/mydb"; // Issue #1: Hardcoded MongoDB credentials (SECURITY)
  const sqlQuery = `SELECT * FROM users WHERE username = '${username}'`; // Issue #2: SQL injection (SECURITY)
  const ageNumber = age++; // Issue #3: Type error - increment on potentially non-number (BUG)
  return { mongo: await mongoDb.findOne(), sql: await db.execute(sqlQuery) };
}


export function signData(data: string, expression: string, userId: string) {
  const PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA...\n-----END RSA PRIVATE KEY-----"; // Issue #1: Hardcoded private key (SECURITY)
  const computed = eval(expression); // Issue #2: eval() on user input (SECURITY)
  document.getElementById('output').innerHTML = `<div>User ${userId}: ${data}</div>`; // Issue #3: XSS (SECURITY)
  return crypto.sign('sha256', Buffer.from(data), PRIVATE_KEY);
}


export function adminAction(table: string, cmd: string) {
  const query = `DELETE FROM ${table} WHERE status = 'inactive'`; // Issue #1: SQL injection via table name (SECURITY)
  exec(`rm -rf /tmp/${cmd}`); // Issue #2: Command injection (SECURITY)
  const result = UndefinedClass.doSomething(); // Issue #3: Undefined class/import (BUG)
  return db.execute(query);
}


export async function processPayment(cardNum: string, cvv: string) {
  const API_SECRET = "sk_live_payment_secret_key_123456"; // Issue #1: Hardcoded payment API secret (SECURITY)
  const display = `<div>Processing card ending in ${cardNum.slice(-4)}</div>`; // Issue #2: XSS if cardNum is not sanitized (SECURITY)
  document.body.innerHTML += display;
  const result = await fetch('/api/charge'); // Issue #3: Missing error handling for async operation (BUG - could be critical)
  return result.json(); // No try-catch, will crash if fetch fails
}

