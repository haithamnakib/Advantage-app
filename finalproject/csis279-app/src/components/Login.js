import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { getUsers} from "../actions/actions";
//import Table1 from "../components/Table1";
import Calculator from "../components/Calculator";
import { connect } from 'react-redux';
import actions from '../redux/actions/users';


class login extends Component {
  constructor(){
    super();
  this.state = { Username: '', Password:'' ,  /*data: []*/}
  
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
    this.setState({ Username: event.target.value });
  }
  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({ Password: event.target.value });
  }

 
  
authenticator=(event)=>{
 
  const { Username } = this.state;
  const { Password } = this.state;
 alert("Hi " +Username)
 this.props.history.push("/Calculator");
    /*const contents = this.state.data.forEach((item, key) => {
if(Password===item.user_password && Username===item.user_name){
    //alert("im here");
  this.props.history.push("/Calculator");
}else{
  alert("Wrong username or password");
}
}
    )*/
}
  render() {
   
    let users=this.props.users;
    console.log(users);


    return (
        <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  BMI CALCULATOR </h1>
        
              <div className="form-group">
                <label for="username">  Username</label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  className="form-control"
                  onChange={this.handleNameChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.user_name : ' Enter Username'}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={this.handlePasswordChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.user_password : 'Enter Password'}
                />
              </div>
              <button type="submit"  onClick={this.authenticator} class="btn btn-danger btn-block">Login</button>
              <button type="googlelogin" class=" btn btn-secondary btn-block"> Login with Google </button>
              <button type="FBLogin" class=" btn btn-primary btn-block"> Login with Facebook </button>
            <p className="lead mt-4">
              SignUp? <Link to="/registration">   Register </Link>
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
