import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {  configureStore } from './redux/store/store';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import MainMenu from "./components/MainMenu";
import MyAccount from "./components/MyAccount";
import Policies from "./components/Policies";
import OnlinePayment from "./components/OnlinePayment";
import PaymentForm from "./components/OnlinePayment";
import Updates from "./components/Updates";

// Redux setup
const store = configureStore();
//const persistor = configurePersistor(store);
//const wrapper = document.getElementById("root");

class RouterNavigationSample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
          <>
          <Route
            exact
            path="/"
            render={props => <Login {...props} />}/>
          <Route path="/MainMenu" render={props => <MainMenu {...props} />}/>
          <Route path="/Registration" render={props => <Registration {...props} />}/>
          <Route path="/MyAccount" render={props => <MyAccount {...props} />}/>
          <Route path="/Policies" render={props => <Policies {...props} />}/>
          <Route path="/Login" render={props => <Login {...props} />}/>
          <Route path="/OnlinePayment" render={props => <PaymentForm {...props} />}/>
          <Route path="/Updates" render={props => <Updates {...props} />}/>
          
         
        </>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);
