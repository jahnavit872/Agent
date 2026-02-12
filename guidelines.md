# Repository Coding Guidelines

## Form Validation Standards

### 1. Form Library
- **MUST use React Hook Form** with Zod for validation
- **DO NOT use Formik or Yup** - these are deprecated in our stack
- Forms must use `useForm` hook with `zodResolver`

### 2. Button State Management
- Submit buttons **MUST use `isSubmitting` state** from form library
- **NEVER hardcode `disabled={false}` or `disabled={true}`**
- Always derive disabled state from form state: `disabled={isSubmitting}`

### 3. Security Requirements
- **NEVER expose API keys or secrets in code**
- Use environment variables: `process.env.REACT_APP_API_URL`
- **NEVER use `dangerouslySetInnerHTML`** without DOMPurify sanitization
- User input must be sanitized before rendering

### 4. Error Handling
- API calls must have proper try-catch blocks
- **DO NOT use `alert()` for user notifications**
- Use proper UI toast/notification library instead
- **DO NOT log sensitive data** (passwords, tokens) to console

### 5. Import Management
- All imported functions must be used
- Remove unused imports
- Only import what you need

### 6. Validation Schema
- Password validation must require:
  - Minimum 8 characters (not 6)
  - At least one uppercase letter
  - At least one number
  - At least one special character

## Examples

### ✅ CORRECT: React Hook Form + Zod
```javascript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
});

const { handleSubmit, formState: { isSubmitting } } = useForm({
  resolver: zodResolver(schema),
});

<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
```

