import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Welcome from './components/Welcome';
import ProductList from './components/ProductList';
import Registro from './components/Registro';

function App() {
  const [logueado, setLogueado] = useState(false);
  return (
    <div>
      {}
   <Switch>
        <Route path="/" exact component={logueado ? Menu : Login}/>        
        <Route path="/products" exact component={ProductList}/>        
    </Switch></div>
  );
}

export default App;
