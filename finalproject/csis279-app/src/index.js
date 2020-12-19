import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configurePersistor, configureStore } from './redux/store/store';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Table from "./components/Table";
//import UserForm from "./components/UserForm";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Calculator from "./components/Calculator";

// Redux setup
const store = configureStore();
const persistor = configurePersistor(store);
const wrapper = document.getElementById("root");

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
          <Route path="/Calculator" render={props => <Calculator {...props} />}/>
          <Route path="/Registration" render={props => <Registration {...props} />}/>
          
         
        </>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RouterNavigationSample />, rootElement);
