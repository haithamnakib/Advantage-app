import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { getUsers} from "../actions/actions";
//import Table1 from "../components/Table1";
//import MainMenu from "../components/MainMenu";
import { connect } from 'react-redux';
import actions from '../redux/actions/users';
import application from '../css/application.css';


class login extends Component {
  constructor(){
    super();
  this.state = { customerUsername: '', customerPassword:'' ,  /*data: []*/}
  
  }

  

 
  componentDidMount() {
    //this.retrieveUsers();
   const {dispatch}=this.props;
   dispatch(actions.getUsers());
  }
  retrieveUsers = () => {
    getUsers().then(res => {
      this.setState({data: res});
      console.log(res);
    });
  }
 
  handleNameChange = event => {
    event.preventDefault();
    this.setState({ customerUsername: event.target.value });
  }
  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({ customerPassword: event.target.value });
  }

 
  
authenticator=(event)=>{
 
  const { customerUsername} = this.state;
  const { customerPassword } = this.state;
 //alert("Hi " +customerUsername);
 //this.props.history.push("/MainMenu");
    const contents = this.props.users.forEach((item,key) => {
if(customerPassword===item.customer_Password && customerUsername===item.customer_Username){
    alert("Hello "+item.customer_Firstname+" "+item.customer_Lastname+". Welcome to Advatange!");
    console.log(customerUsername);
  this.props.history.push("/MainMenu",{username:customerUsername});
}else{
  alert("Wrong username or password");
  alert("If you do not have an account at advantage, PLEASE register.")
}
}
    )
}
  render() {
   
    /*let users=this.props.users;
    console.log(users);*/


    return (
        <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Advantage </h1>
        
              <div className="form-group">
                <label htmlFor="username">  Username</label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  required
                  className="form-control"
                  onChange={this.handleNameChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.customer_Username : ' Enter Username'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="form-control"
                  onChange={this.handlePasswordChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.customer_Password : 'Enter Password'}
                />
              </div>
              <button type="submit"  onClick={this.authenticator} className="btn btn-danger btn-block">Login</button>
              <button type="googlelogin" className=" btn btn-secondary btn-block"> Login with Google </button>
              <button type="FBLogin" className=" btn btn-primary btn-block"> Login with Facebook </button>
            <p className="lead mt-4">
              SignUp? <Link to="/Registration">   Register </Link>
            </p>
        
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  users: state.userReducer.users,
})
export default connect(mapStateToProps)(login);
