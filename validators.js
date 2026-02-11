export function validateUsername(username) {
  if (!username || username.length < 3) {
    throw new Error('Username must be at least 3 characters');
  }
  
  if (username.length > 20) {
    throw new Error('Username must be less than 20 characters');
  }
  
  return true;
}

export function validateEmail(email) {
  if (!email) {
    throw new Error('Email is required');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  
  return true;
}

export function validatePassword(password) {
  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  
  if (!/[A-Z]/.test(password)) {
    throw new Error('Password must contain at least one uppercase letter');
  }
  
  if (!/[0-9]/.test(password)) {
    throw new Error('Password must contain at least one number');
  }
  
  return true;
}
