import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Table1 from "./components/Table1";
//import UserForm from "./components/UserForm";
import Login from "./components/Login";
import Registration from "./components/Registration";
import MainMenu from "./components/MainMenu";

class RouterNavigationSample extends React.Component {
  render() {
    return (
      <Router>
      <div className="container">
        <>
          <Route
            exact
            path="/"
            render={props => <Login {...props} />}/>
          <Route path="/MainMenu" render={props => <MainMenu {...props} />}/>
          <Route path="/Registration" render={props => <Registration {...props} />}/>
          
         
        </>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);