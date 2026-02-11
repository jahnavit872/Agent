# React Form Development Guidelines

## 1. Import Management

### Rule: Clean Imports
- **All imported modules MUST be used in the code**
- Remove unused imports immediately
- Import only what you need
- Use IDE tools to detect and remove unused imports

**Example Violation:**
❌ import { validateUsername } from "../utils/validators"; // Imported but never used**Correct:**
✅ // Only import what you actually use
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";---

## 2. Form Validation Requirements

### Rule: Password Minimum Length
- **Password fields MUST require minimum 8 characters**
- Include complexity requirements (uppercase, lowercase, number, special char)
- Use proper Yup validation with descriptive error messages

**Example Violation:**
❌ password: Yup.string()
    .min(6, "Password too short")  // TOO SHORT! Must be 8+**Correct:**
✅ password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain lowercase letter")
    .matches(/[A-Z]/, "Password must contain uppercase letter")
    .matches(/[0-9]/, "Password must contain number")
    .required("Password is required")---

## 3. Formik State Management

### Rule: Respect Formik State
- **Button `disabled` state MUST use Formik's `isSubmitting`**
- Never hardcode `disabled={false}` or `disabled={true}`
- Prevent double submissions by disabling during API calls
- Show loading indicators when submitting

**Example Violation:**
❌ <button type="submit" disabled={false}>
     {/* Ignoring isSubmitting - allows double submission! */}
     Login
   </button>**Correct:**
✅ <button type="submit" disabled={isSubmitting}>
     {isSubmitting ? "Logging in..." : "Login"}
   </button>---

## 4. User Feedback & Error Handling

### Rule: No Alert() for User Feedback
- **NEVER use `alert()` for success or error messages**
- Use toast notifications (react-toastify, react-hot-toast)
- Use inline error components
- Use modal dialogs for important messages
- Provide proper UI feedback

**Example Violations:**
❌ alert(`Welcome ${data.username}`);     // Bad UX - blocking alert
❌ alert(error.message);                  // Exposes technical errors to users**Correct:**
✅ toast.success(`Welcome ${data.username}!`);
✅ setErrorMessage("Login failed. Please check your credentials.");---

## 5. Error Message Display

### Rule: User-Friendly Error Messages
- **Never show raw error messages to users**
- Map technical errors to user-friendly messages
- Don't expose API error details
- Provide actionable guidance

**Example Violation:**
❌ alert(error.message);  // Could show "Network request failed" or other tech details**Correct:**
✅ catch (error) {
     const userMessage = error.response?.status === 401 
       ? "Invalid username or password. Please try again."
       : "Unable to log in. Please check your connection and try again.";
     toast.error(userMessage);
   }---

## 6. API Error Handling

### Rule: Comprehensive Error Handling
- **Always check HTTP response status codes**
- Handle network errors separately from API errors
- Provide specific feedback for different error types
- Log errors for debugging (not user-facing)

**Example Violation:**
❌ if (!response.ok) {
     throw new Error("Login failed");  // Too generic, no context
   }**Correct:**
✅ if (!response.ok) {
     const errorData = await response.json();
     if (response.status === 401) {
       throw new Error("INVALID_CREDENTIALS");
     } else if (response.status === 429) {
       throw new Error("TOO_MANY_ATTEMPTS");
     } else {
       throw new Error("SERVER_ERROR");
     }
   }---

## 7. Loading States & UX

### Rule: Visual Loading Indicators
- **Show loading state during async operations**
- Disable form inputs during submission
- Show spinner or loading text
- Prevent user interaction during processing

**Example Violation:**
❌ <button type="submit" disabled={false}>
     Login  {/* No loading indicator */}
   </button>**Correct:**
✅ <button type="submit" disabled={isSubmitting}>
     {isSubmitting ? (
       <>
         <Spinner size="sm" /> Logging in...
       </>
     ) : (
       "Login"
     )}
   </button>---

## 8. Form Reset Behavior

### Rule: Smart Form Reset
- **Only reset form on successful submission**
- Don't reset on errors (preserve user input)
- Clear sensitive data (passwords) on success
- Maintain username for retry on failure

**Current Code:** ✅ Actually correct - resets in try block after success

---

## 9. Accessibility Requirements

### Rule: Complete Label Association
- ✅ Every input MUST have a `<label>` with `htmlFor`
- ✅ Use semantic HTML
- ✅ Provide meaningful placeholder text

**Current Code:** ✅ Actually good - has labels with htmlFor

---

## 10. Password Security

### Rule: Minimum Security Standards
- Password must be at least **8 characters** (not 6)
- Require at least one uppercase letter
- Require at least one lowercase letter
- Require at least one number
- Optionally require special characters

**Example Violation:**
❌ .min(6, "Password too short")  // Guideline requires 8---

## Summary of Violations in Provided Code

| Issue | Guideline Violated | Severity |
|-------|-------------------|----------|
| `validateUsername` imported but unused | Import Management | Minor |
| Password min 6 chars (should be 8+) | Password Security | Major |
| `disabled={false}` instead of `{isSubmitting}` | Formik State Management | Major |
| `alert()` for success message | User Feedback | Major |
| `alert()` for error message | Error Message Display | Major |
| Raw error message shown | User-Friendly Errors | Major |
| No loading spinner | Loading States | Minor |

**Total Violations: 7**
**Critical Issues: 5**
