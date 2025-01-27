import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem('admin-token');
    if (getToken) setIsAuthenticated(true);
  }, []);

  if (!isAuthenticated) {
    return (
      <Auth
        onAuthSuccess={() => {
          localStorage.setItem('admin-token', 'true');
          setIsAuthenticated(true);
        }}
      />
    );
  }

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
