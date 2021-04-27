import './App.css';

import {Route, Switch, Link} from 'react-router-dom';

import Menu from './components/menu/Menu';
import Welcome from './components/Welcome';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
   <Menu/>
   <Switch>
        <Route path="/" exact component={Welcome}/>
        <Route path="/products" exact component={ProductList}/>
    </Switch></div>
  );
}

export default App;
