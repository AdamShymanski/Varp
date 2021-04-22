import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

//styling
import "./App.scss";

//pages
import LandingPage from "./react/LandingPage";
import RegisterPage from "./react/RegisterPage";
import SignInPage from "./react/SignInPage";
import MainPage from "./react/MainPage";

function App() {
  // const { currentUser } = useAuth();
  return (
    <Router>
      <AuthProvider>
        <div className="appComponent">
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/sign-in" component={SignInPage} />
        </div>
      </AuthProvider>
    </Router>
  );
  // if (currentUser) {
  // }
  // return (
  //   <Router>
  //     <AuthProvider>
  //       <div className="appComponent">
  //         <Route path="/" exact component={LandingPage} />
  //         <Route path="/register" component={RegisterPage} />
  //         <Route path="/sign-in" component={SignInPage} />
  //       </div>
  //     </AuthProvider>
  //   </Router>
  // );
}
//
export default App;
