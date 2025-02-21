import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

function PrivateRoute({ children }) {
  const { signed } = useAuth();
  return signed ? children : <Navigate to="/login" replace />;
}

export function AppRoutes() {
  const { signed } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={signed ? <Navigate to="/" replace /> : <Login />} 
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
} 