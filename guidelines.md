1. Component Design

Keep components small and focused (single responsibility).

Prefer functional components over class components.

Split large components into reusable subcomponents.

Avoid deeply nested JSX.

2. State Management

Never mutate state directly.

Use the functional form of state updates when relying on previous state.

Lift state up only when necessary.

Avoid duplicating derived state.

setCount(prev => prev + 1);

3. Hooks Usage

Always include dependency arrays in useEffect.

Do not call hooks conditionally or inside loops.

Clean up side effects in useEffect when needed.

Use useMemo and useCallback to prevent unnecessary re-renders.

4. Performance

Avoid expensive computations during render.

Memoize heavy calculations and callbacks.

Use React.memo for pure components.

Avoid inline object and function creation in JSX when possible.

5. Rendering Lists

Always provide a stable and unique key prop.

Never use array index as a key unless the list is static.

Keep list rendering logic clean and minimal.

6. Accessibility (a11y)

Use semantic HTML elements.

Every input must have a corresponding <label>.

Buttons and interactive elements should be keyboard accessible.

Provide aria-* attributes where necessary.

Avoid using div for clickable elements.

7. Security

Avoid dangerouslySetInnerHTML unless absolutely necessary.

Sanitize all user-generated content.

Never expose secrets or tokens in frontend code.

8. Styling

Prefer CSS modules, styled-components, or external stylesheets.

Avoid excessive inline styles.

Use consistent naming conventions.

Keep styles colocated with components when reasonable.

9. Error Handling

Handle loading and error states for async operations.

Use error boundaries for critical UI sections.

Avoid silent failures.
