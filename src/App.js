import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import About from './Components/About';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
       <Switch>
         <Route exact path="/m.developer" component={()=> <Home/>}/>
         <Route exact path="/Gallery" component={()=> <Gallery/>}/>
         <Route exact path="/About" component={()=> <About heading="Muhammad Aman"  sign="Go Home"/>}/>
       </Switch>
      
    </>
  );
}

export default App;
