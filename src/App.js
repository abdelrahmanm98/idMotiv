import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Cars from './pages/Cars';
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
        <Route path='/cars'>
          <Cars />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
