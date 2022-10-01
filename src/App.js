import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Booking from './pages/BookingPage';
import DashBoard from './pages/DashBoard';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          {/* <AuthPage /> */}
          <Booking />
        </Route>
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        <Route path='/booking'>
          <Booking />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
