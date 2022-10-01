import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Cars from './pages/BookingPage';
import DashBoard from './pages/DashBoard';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AuthPage />
          {/* <DashBoard /> */}
        </Route>
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        <Route path='/booking'>
          <Cars />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
