import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { EventDetails } from '../pages/EventDetails';
import CreateTeamView from '../views/CreateTeam';
import TeamDetails from '../pages/TeamDetails';

function PrivateRoute({ children }) {
  const { signed } = useAuth();
  return signed ? children : <Navigate to="/login" replace />;
}

export function AppRoutes() {
  return (
    <BrowserRouter>      
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
        <Route path="/event/:eventId/team" element={<TeamDetails />} />
      </Routes>
    </BrowserRouter>
  );
} 