import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Auth onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;