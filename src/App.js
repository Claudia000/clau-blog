import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Addpost from './pages/Addpost';
import  './styles/Login.css'; 
import  './styles/Signup.css'; 
import  './styles/Home.css'; 
import{Switch, Route} from 'react-router-dom';




function App() {
  return (
    
        <div>
        <Switch>
          <Route exact={true} path={"/"} component={Home}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/signup"} component={Signup}/>
          <Route path={"/add-post"} component={Addpost}/>
        </Switch>
        
        
        
        
        </div>

   
  );
}

export default App;
