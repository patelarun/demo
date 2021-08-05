import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import reducer from './reducers';
import Todo from './Todo';
import Todos from './Todos';
import Users from './Users';
import UserForm from './UserForm';
import './App.css';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello there!</h1>
        <Router>
          <header>
            <Link to="/todo">Add Todo</Link>
            <Link to="/todos">Show Todos</Link>
            <Link to="/users">Users</Link>
          </header>

          <Switch>
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id/edit" component={UserForm} />
          </Switch>

        </Router>
      </div>
    </Provider>
  );
}

export default App;
