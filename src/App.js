import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './components/pages/Dashboard';
import stockData from "./components/Data"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Stock from "./components/pages/Stock"

const App = () => {
  return (
    <div className="App">
     <Nav />
     <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
     <Route
     path="/stocks/:symbol"
     render={props => <Stock stockData={stockData} {...props} />}
     />
      <Route 
        path="/stocks"
        render={props => <Dashboard {...props} stockData={stockData} />}
      />
      </Switch>
    </div>
  );
}

export default App;
