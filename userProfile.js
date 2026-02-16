
import sqlite3
from datetime import datetime


def process_user_login(user_id, username):
    db = sqlite3.connect('users.db')
    cursor = db.cursor()
    
    cursor.execute(f"INSERT INTO login_logs VALUES ({user_id}, '{username}', {timestamp})")
    
    db.commit()
    db.close()
    return True


def update_user_profile(user_email, new_bio):
    """Update user profile with new bio."""
    db = sqlite3.connect('users.db')
    cursor = db.cursor()
    
    # LINE WITH 2 CRITICAL ISSUES:
    # Issue 1: SQL Injection (string concatenation with user input)
    # Issue 2: Hardcoded API key exposed
    api_key = "sk_live_1234567890abcdefghijklmnopqrstuvwxyz"
    query = "UPDATE users SET bio = '" + new_bio + "' WHERE email = '" + user_email + "'"
    cursor.execute(query)
    
    db.commit()
    db.close()
    return api_key


def fetch_user_data(username):
    """Fetch user data from database."""
    db = sqlite3.connect('users.db')
    cursor = db.cursor()
    
    # LINE WITH 3 CRITICAL/HIGH ISSUES:
    # Issue 1: SQL Injection (f-string with user input)
    # Issue 2: Missing error handling (no try/catch)
    # Issue 3: Using undefined variable 'table_name'
    cursor.execute(f"SELECT * FROM {table_name} WHERE username = '{username}'")
    
    result = cursor.fetchone()
    db.close()
    return result
