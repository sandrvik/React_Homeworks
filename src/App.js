import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Main } from './components/Main/Main';
import { useState } from 'react';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Main}
          isAuthenticated={isAuthenticated}
          handleAuth={setIsAuthenticated}
        />
        <Route
          path='/signin'
          render={props => <SignIn {...props} handleAuth={setIsAuthenticated} />}
        />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;