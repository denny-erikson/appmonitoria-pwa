import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { EventDetails } from '../pages/EventDetails';
import CreateTeamView from '../views/CreateTeam';
import Navigation from '../components/Navigation';
function PrivateRoute({ children }) {
  const { signed } = useAuth();
  return signed ? children : <Navigate to="/login" replace />;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/event/:id"
          element={
            <PrivateRoute>
              <EventDetails />
            </PrivateRoute>
          }
        />
        <Route path="/events/:eventId/teams/create" element={<CreateTeamView />} />
      </Routes>
    </BrowserRouter>
  );
} 