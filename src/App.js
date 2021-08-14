import './App.css';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 600,
  duration: 1000,
});


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/blogs' component = {Blogs}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
