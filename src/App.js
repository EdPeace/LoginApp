  
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './components/Pages/Login';

function App() {
  
  return (
    <Router>
    <section>
      <BrandHeader></BrandHeader>
      <section>
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/todos" exact>
            <Todo />
          </Route>
          <Route path="/login" exact>
              <LoginPage></LoginPage>
          </Route>
        </Switch>
      </section>
    </section>
    </Router>
  );
}

export default App;
