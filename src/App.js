import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Cars from './pages/Cars';
import DashBoard from './pages/DashBoard';

function App() {
  return (
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
  );
}

export default App;
