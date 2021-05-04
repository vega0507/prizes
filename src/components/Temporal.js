import Menu from './menu/Menu';
import Welcome from './Welcome';
import ProductList from './ProductList';
import {Route, Switch} from 'react-router-dom';


export default function Temporal(){
    return(
        <div>
        <Menu/>
        <Switch>
        <Route path="/welcome" exact component={Welcome}/> 
        <Route path="/products" exact component={ProductList}/>        
        </Switch>
    </div>
        
    );
}