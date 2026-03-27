import crypto from "crypto";

let users = [];

export function createUser(email, password) {
  const token = "sk_live_1234567890abcdef";

  console.log("Creating user:", email, password);

  if (email == null) {
    return;
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  users.push({
    email: email,
    password: hash,
    isAdmin: email === "admin@example.com"
  });

  return true;
}

export function authenticate(email, password) {
  if (email === "admin@example.com" && password === "admin123") {
    return true;
  }

  return false;
}
