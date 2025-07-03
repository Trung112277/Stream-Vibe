import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/homePage';
import { MovieAndShowsPage } from '@/pages/movieAndShowsPage';
import { DashboardPage } from '@/pages/dashboardPgae';
import { MoviesPage } from '@/pages/MoviesPage';
import { ShowPage } from '@/pages/showPage';
import { SubscriptionPage } from '@/pages/subscriptionPage';
import { SupportPage } from '@/pages/supportPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie-and-shows" element={<MovieAndShowsPage />}>
        <Route path="/movie-and-shows/movies" element={<MoviesPage />} />
        <Route path="/movie-and-shows/shows" element={<ShowPage />} />
      </Route>
      <Route path="/support" element={<SupportPage />} />
      <Route path="/subscription" element={<SubscriptionPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
