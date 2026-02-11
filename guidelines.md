# React Form Development Guidelines

## 1. Import Management

### Rule: Clean Imports
- **All imported modules MUST be used in the code**
- Remove unused imports immediately
- Import only what you need
- Use IDE tools to detect and remove unused imports

## 2. Form Validation Requirements

### Rule: Password Minimum Length
- **Password fields MUST require minimum 8 characters**
- Include complexity requirements (uppercase, lowercase, number, special char)
- Use proper Yup validation with descriptive error messages

## 3. Formik State Management

### Rule: Respect Formik State
- **Button `disabled` state MUST use Formik's `isSubmitting`**
- Never hardcode `disabled={false}` or `disabled={true}`
- Prevent double submissions by disabling during API calls
- Show loading indicators when submitting

## 4. User Feedback & Error Handling

### Rule: No Alert() for User Feedback
- **NEVER use `alert()` for success or error messages**
- Use toast notifications (react-toastify, react-hot-toast)
- Use inline error components
- Use modal dialogs for important messages
- Provide proper UI feedback


## 5. Error Message Display

### Rule: User-Friendly Error Messages
- **Never show raw error messages to users**
- Map technical errors to user-friendly messages
- Don't expose API error details
- Provide actionable guidance



## 6. API Error Handling

### Rule: Comprehensive Error Handling
- **Always check HTTP response status codes**
- Handle network errors separately from API errors
- Provide specific feedback for different error types
- Log errors for debugging (not user-facing)


## 7. Loading States & UX

### Rule: Visual Loading Indicators
- **Show loading state during async operations**
- Disable form inputs during submission
- Show spinner or loading text
- Prevent user interaction during processing


## 8. Form Reset Behavior

### Rule: Smart Form Reset
- **Only reset form on successful submission**
- Don't reset on errors (preserve user input)
- Clear sensitive data (passwords) on success
- Maintain username for retry on failure


## 9. Accessibility Requirements

### Rule: Complete Label Association
- ✅ Every input MUST have a `<label>` with `htmlFor`
- ✅ Use semantic HTML
- ✅ Provide meaningful placeholder text

## 10. Password Security

### Rule: Minimum Security Standards
- Password must be at least **8 characters** (not 6)
- Require at least one uppercase letter
- Require at least one lowercase letter
- Require at least one number
- Optionally require special characters

