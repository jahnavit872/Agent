
export async function processPayment(amount: string, cardNumber: string) {
  const API_KEY = "sk_live_51H8xYz2eZvKYlo2C8pN9xYz2eZvKYlo2C"; // Hardcoded API key
  console.log(`Processing payment: ${amount} with card ${cardNumber}, using key ${API_KEY}`); // Logging secrets + card data
  
  // No input validation on amount - could be negative or non-numeric
  const result = await fetch('https://api.stripe.com/v1/charges', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}` },
    body: JSON.stringify({ amount, card: cardNumber })
  });
  
  return result.json();
}

export async function authenticateUser(username: string, password: string) {
  const DB_PASSWORD = "admin123password"; // Hardcoded database password
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`; // SQL injection
  const result = await db.execute(query); // Executing unsafe query
  
  // Using eval on user input
  const userRole = eval(`result.user.role`); // Dangerous eval()
  
  return { authenticated: result.length > 0, role: userRole };
}

export function executeUserCommand(command: string) {
  const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"; // Hardcoded GitHub token
  const { exec } = require('child_process');
  exec(`git clone https://${GITHUB_TOKEN}@github.com/repo.git && ${command}`, (error, stdout, stderr) => {
    // Command injection: user input directly in exec()
    // Exposed token in command
    // No input validation
    console.log(stdout);
  });
}

export function generateUserSession(username: string) {
  const JWT_SECRET = "my-super-secret-jwt-key-12345"; // Hardcoded JWT secret
  const sessionId = Math.random().toString(36); // Insecure randomness for session ID
  
  // XSS vulnerability - unescaped user input in HTML
  document.getElementById('welcome').innerHTML = `Welcome, ${username}!`; // XSS
  
  return { sessionId, token: sign({ user: username }, JWT_SECRET) };
}


export const config = {
  apiKey: "AKIA1234567890ABCDEF", awsSecret: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", dbPassword: "postgres_pass_123" // Multiple secrets
};

export async function findUser(userId: string) {
  const MONGO_URL = "mongodb://admin:password123@localhost:27017/mydb"; // Hardcoded MongoDB credentials
  console.log(`Connecting with: ${MONGO_URL}`); // Logging credentials
  const user = await db.collection('users').findOne({ $where: `this.id == '${userId}'` }); // NoSQL injection
  return user;
}


export function processUserData(serializedData: string) {
  const PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA1234567890abcdef\n-----END RSA PRIVATE KEY-----"; // Hardcoded private key
  const data = eval(`(${serializedData})`); // Unsafe deserialization with eval
  const signature = crypto.sign('sha256', Buffer.from(data), PRIVATE_KEY); // Using hardcoded key
  return { data, signature };
}

export function buildDatabaseQuery(table: string, value: string) {
  const password = "db_admin_pass"; // Hardcoded password
  return `DELETE FROM ${table} WHERE id = ${value} /* Using password: ${password} */`; // SQL injection + Template injection + Logging password
}

