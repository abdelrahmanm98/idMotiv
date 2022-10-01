import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Booking from './pages/BookingPage';
import DashBoard from './pages/DashBoard';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AuthPage />
        </Route>
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        <Route path='/booking'>
          <Booking />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
