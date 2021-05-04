import {useState , useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Welcome from './components/Welcome';
import ProductList from './components/ProductList';
import Registro from './components/Registro';
import Temporal from './components/Temporal';
import { connect } from 'react-redux';
import { validarLogIn } from './actions';


function App(props) {
  const [logueado, setLogueado] = useState(props.usuarioLogueado);
  
  useEffect(()=>{
    alert("cambia logueado a "+logueado);
    console.log("cambia logueado a "+logueado);
  },[logueado])
  console.log("el logueado es "+logueado);
  return (
    
    <div>
      {props.usuarioLogueado ? <Temporal/> : <Login/>}
      {/*<Switch>
        <Route path="/welcome" exact component={Temporal}/>        
        <Route path="/products" exact component={ProductList}/>        
      </Switch>*/}
   </div>
   
  );
}

const mapStateToProps = (state) =>{     
  return { usuarioLogueado: state.authReducer.usuarioLogueado };
}

export default connect(mapStateToProps, {  
  validarLogIn 
})(App);

