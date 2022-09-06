import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Home from '../pages/Home';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';



const App = () => {  
  return (    
    <Router>  
        <SearchBar />      
        <Switch>        
          <Route path='/' exact component={ Home} />
          <Route path="/items" exact component={ProductList} />
          <Route path='/items/:id' exact component={ ProductDetail} />
        </Switch>
    </Router>  
  );
};


export default App;
