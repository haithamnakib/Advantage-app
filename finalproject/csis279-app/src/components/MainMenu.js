import React, { Component } from 'react';
import{Link} from "react-router-dom";
import { connect } from 'react-redux';
//import actions from '../redux/actions/users';

class MainMenu extends Component {
  constructor(props) {
    super(props)  
    this.state = {

    }
    this.name="";
 }
  
gotoMyAccount=(event)=>{
  const {username}=this.props.location.state;
  console.log(username);
    this.props.history.push("/MyAccount",{name:username});
}
gotoPolicies=(event)=>{
  const {username}=this.props.location.state;
    this.props.history.push("/Policies",{name:username});
}
gotoOnlinePayment=(event)=>{
    this.props.history.push("/OnlinePayment");
}
gotoUpdates=(event)=>{
  const {username}=this.props.location.state;
    this.props.history.push("/Updates",{name:username});
}
gotoLogin=(event)=>{
  this.props.history.push("/Login");
}
  render() {
   const {username}=this.props.location.state;
   this.name=username;
  console.log(username)

    return (
       
        <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Main Menu </h1>
              <div className="form-group">
              <button 
              id="1"
              name="btn"
              type="button"  
              onClick={
                this.gotoMyAccount
              } 
              className="btn btn-dark btn-block">
            

              My Account
              </button>
              <p>        </p>
              </div>
              <div className="form-group">
              <button 
              id="2"
              name="btn"
              type="button"  
              onClick={
                this.gotoPolicies
              } 
              className="btn btn-dark btn-block">
            

              Policies
              </button>
              <p>   </p>
              </div>
              <div className="form-group">
              <button 
              id="3"
              name="btn"
              type="button"  
              onClick={
                this.gotoOnlinePayment
              } 
              className="btn btn-dark btn-block">
            
              Online Payment
              
              </button>
              
                  </div>
                  <p>      </p>
                  <div className="form-group">
                  <button 
              id="4"
              name="btn"
              type="button"  
              onClick={
                this.gotoUpdates
              } 
              className="btn btn-dark btn-block">
            
              Updates and News
              </button>
                  </div>
                  <p className="lead mt-4">
                  <Link to={{
                  pathname:'/Login',
                  state:{username:this.name}
               }} >   Back to Login? </Link>
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
export default connect(mapStateToProps)(MainMenu);
//export default Registration;
