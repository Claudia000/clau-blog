import Home from './pages/Home';
import Login from './pages/Login';
import  './styles/Auth.css'; 
import{switch, Route, Router} from 'react-router-dom';

function App() {
  return (
    <div >
      <router history={history}>
        <Route path={"/"} exact={true} component={Home}/>
        <Route path={"/login"} component={Login}/>
        <Route path={"/signup"}  component={Signup}/>
        

      </router>

    </div>
  );
}

export default App;
