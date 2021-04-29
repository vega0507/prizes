import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Welcome from './components/Welcome';
import ProductList from './components/ProductList';
import Registro from './components/Registro';
import Temporal from './components/Temporal';
function App() {
  const [logueado, setLogueado] = useState(true);
  return (
    <div>
      {logueado ? <Temporal/> : <Login/>}
      <Switch>
   {/*<Route path="/welcome" exact component={Temporal}/>        */}
   <Route path="/products" exact component={ProductList}/>        
</Switch>
   </div>
   
  );
}

export default App;
