import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import NavBar from './components/NavBar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Admin from './pages/Admin'
// import Login from "./components/login.component";
// import SignUp from "./components/signup.component";

function App() {
  function check(){
    if(localStorage.getItem('isAdmin') === 'true'){
      console.log('In check function')
      return true;
    }
    return false;
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route
						path='/admin'
            exact
            render={props =>
							check() ? (
								<Admin {...props} />
							) : (
								<Redirect to="/" />
							)
						}
					/>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
