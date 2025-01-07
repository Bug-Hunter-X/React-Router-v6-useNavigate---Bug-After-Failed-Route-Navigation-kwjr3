# React Router v6 useNavigate() Bug After Failed Route Navigation

This repository demonstrates an unexpected behavior in React Router v6 when using the `useNavigate` hook after navigating to a route that doesn't exist.  After a failed navigation, using `useNavigate(-1)` or `useNavigate('/previous-route')` does not correctly return the user to the previous route. 

The `bug.js` file shows the problematic behavior and `bugSolution.js` demonstrates a potential workaround.  This issue is likely related to how React Router handles the internal history stack after a failed navigation to a non-existent route.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to a non-existent route (e.g., `/invalid-route`).
5. Attempt to navigate back using the back button or the `go(-1)` example in the application. 
6. Observe the unexpected behavior.

## Solution
The `bugSolution.js` file provides a workaround to address this problem by adding logic to handle the navigation after a failed attempt to a 404 page.