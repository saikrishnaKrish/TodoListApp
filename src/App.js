import './App.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
//import components
import EditTodo from './Components/EditTodo';
import CreateTodo from './Components/CreateTodo';
import DeleteTodo from './Components/DeleteTodo';

import { DisplayTodoList } from './Pages/DisplayTodoList';


//GlobalProvider
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
<GlobalProvider>
<Router>
      <header className="text-center"><h5>React Todo Application</h5></header>
      <Switch>
        <Route exact path="/" component={DisplayTodoList}/>
        <Route path="/create" component={CreateTodo}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/delete:id" component={DeleteTodo}/>
      </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
