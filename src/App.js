import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Booking from './pages/BookingPage';
import DashBoard from './pages/DashBoard';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AuthPage />
          {/* <Booking /> */}
        </Route>
        {authCtx.isLoggedIn && (
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path='/booking'>
          <Booking />
        </Route>
        )}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
