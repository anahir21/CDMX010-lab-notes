import React from "react";
import {BrowserRouter as 
  Router,
   Switch,
    Route,
     Link} from 'react-router-dom';
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Print } from "./Components/Print";
import { SignUpForm } from "./Components/SignUpForm";
import { SignIn } from "./Components/SignIn";

import "./App.css";


function App() {
  return (

    <div className="App">
   <Router>
     
     <Switch>
     <Route exact path ="/inicio"> 
     <Home />
     </Route>

      <Route exact path ="/wall"> 
      <Navbar />
      <Print/>
     </Route>
      
      <Route exact path ="/signUp">
      <SignUpForm />
      </Route>

      <Route exact path ="/signIn">
      <SignIn />
      </Route>


  </Switch>
  
   </Router>

   </div>
  
  );
}

export default App;