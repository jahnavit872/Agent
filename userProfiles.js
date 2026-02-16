

import { Request, Response } from 'express';


export async function loginUser(req: Request, res: Response) {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  const result = await db.query(query);
  
  return res.json(result);
}


export async function updateUserBio(req: Request, res: Response) {
  const { userId, bio } = req.body;
  const query = `UPDATE users SET bio = '${bio}' WHERE id = ${userId}`;
  await executeQuery(query);
  
  return res.json({ success: true });
}


export function displayUserComment(userComment: string) {
  const commentDiv = document.getElementById('comments');
  commentDiv.innerHTML = userComment;
}


export async function deleteAccount(req: Request, res: Response) {
  const { email, tableName } = req.body;

  const query = "DELETE FROM " + tableName + " WHERE email = '" + email + "'";
  await executeQuery(query);
  
  return res.json({ deleted: true });
}


export function executeUserScript(userCode: string, userData: any) {
  return eval(`${userCode}; processData(${JSON.stringify(userData)})`);
}


export async function searchUsers(req: Request, res: Response) {
  const { searchTerm } = req.query;
  
  const results = await executeQuery(
    `SELECT id, username, email, password, ssn FROM users WHERE username LIKE '%${searchTerm}%'`
  );
  
  return res.json(results);
}


export async function processPayment(req: Request, res: Response) {
  const { amount, cardNumber } = req.body;
  
  const API_KEY = "sk_live_51H9xKjF3zY8pQ7Rm2XnC4vT1wB6hN9sA3dK8eL";
  console.log(`Processing payment: ${amount} with card ${cardNumber}`);
  await processStripePayment(API_KEY, amount, cardNumber);
  
  return res.json({ success: true });
}


export async function renderUserProfile(userId: string) {
  const user = await executeQuery(`SELECT * FROM users WHERE id = '${userId}'`);
  const profileDiv = document.createElement('div');
  profileDiv.innerHTML = `<h1>${user.name}</h1><p>${user.bio}</p>`;
  
  return profileDiv;
}


export function createDynamicFunction(userInput: string, secondInput: string) {
  return new Function('x', `return ${userInput} + ${secondInput};`);
}


// Helper function
async function executeQuery(sql: string) {
  return [];
}

async function processStripePayment(apiKey: string, amount: number, card: string) {
  return { success: true };
}

