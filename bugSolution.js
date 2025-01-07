```javascript
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  return (
    // ... (rest of the App component remains the same)
  );
}

function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation after failed route change
  React.useEffect(() => {
    if (location.pathname === '/invalid-route') {
          navigate(-1); // or navigate to specific route
    }
  }, [location, navigate]);

  return <h1>404 Not Found</h1>;
}
export default App;
```