import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import { Main } from './components/Main/Main';
import { SignUp } from './components/SignUp/SignUp';
import { SignIn } from './components/SignIn/SignIn';
import { Table } from './components/Table/Table';

const arr = [{ id: 1, name: 'Vasya', lastName: 'Test1' }, { id: 2, name: 'Vova', lastName: 'Test2' }, { id: 3, name: 'Petya', lastName: 'Test3' }]

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/table">
          <Table data={arr} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;