
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation/Navigation';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-view" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviePage/MoviePage' /* webpackChunkName: "home-view" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-view" */
  ),
);

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<Loader />} >
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3700} position="bottom-center" />
    </Container>
  );
}
export default App;