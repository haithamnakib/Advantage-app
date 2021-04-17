import React, { Component } from 'react';
import{Link} from "react-router-dom";
import { createUser} from "../actions/actions";
import { connect } from 'react-redux';
//import actions from '../redux/actions/users';
import actions from '../redux/actions/users';
import usersActions from '../redux/actions/users';


class Registration extends Component {
  constructor(props){
    super(props);
    this.UserRegistrationFunction = this.UserRegistrationFunction.bind(this);
    this.state = { 
        Firstname: '',
        Lastname:'',
        Password:'' ,
        Username:'',
        CNumber:0,
        Email:'',
        data: []
    }
  
  }
  componentDidMount() {
   const {dispatch}=this.props;
   dispatch(actions.createUser());
  }

  UserRegistrationFunction = (event) => {
    event.preventDefault();
    const{Firstname}=this.state;
    const{Lastname}=this.state;
    const{Username}=this.state;
    const{Password}=this.state;
    const{CNumber}=this.state;
    const{Email}=this.state;

    let data={CustomerFirstname:Firstname,
       CustomerLastname:Lastname,
       CustomerPassword:Password,
       CustomerUsername:Username,
       CustomerNumber:CNumber,
       CustomerEmail:Email}

       

/*let result= await this.props.dispatch(usersActions.createUser(data));
this.setState({result});
if(this.props.didCreate){
  this.props.history.push("/MainMenu");
}*/

       console.log(Firstname);
       console.log(Lastname);
       console.log(Username);
       console.log(Password);
       console.log(CNumber);
       console.log(Email);

    if (this.props.location.state === undefined) {
      //add User
     createUser({Firstname,Lastname,Username,Password,Email,CNumber})
        .then((res) => {
          this.props.history.push("/Login");
        })

    } else {
      
          alert("im here");
    
  };
}
 
  handleUsernameChange = event => {
    event.preventDefault();
    this.setState({ Username: event.target.value });
  }
  handleFirstnameChange = event => {
    event.preventDefault();
    this.setState({ Firstname: event.target.value });
  }
  handleLastnameChange = event => {
    event.preventDefault();
    this.setState({ Lastname: event.target.value });
  }
  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({ Password: event.target.value });
  }
  handleEmailChange = event => {
      event.preventDefault();
      this.setState({Email:event.target.value});
  }
  handleNumberChange = event => {
      event.preventDefault();
      this.setState({CNumber:event.target.value});
  }
  render() {
    return (
        <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
          <p className="lead mt-4" >
               <Link to="/Login" >   Back to Login? </Link>
            </p>
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Welcome! </h1>

            <div className="form-group">
                <label htmlFor="firstname">  Firstname</label>
                <input
                  type="firstname"
                  className="form-control"
                  onChange={this.handleFirstnameChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Firstname : ' Enter Firstname'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname">  Lastname</label>
                <input
                  type="lastname"
                  className="form-control"
                  onChange={this.handleLastnameChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Lastname : ' Enter Lastname'}
                />
              </div>
        
              <div className="form-group">
                <label htmlFor="username">  Username</label>
                <input
                  type="username"
                  className="form-control"
                  onChange={this.handleUsernameChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Username : ' Enter Username'}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"> Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={this.handlePasswordChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Password : 'Enter Password'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">  Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={this.handleNumberChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.CNumber : ' Enter Number'}
                  />
                  </div>
                  <div className="form-group">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={this.handleEmailChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.Email : ' Enter your Email'}
                  />
                  </div>
              <p>    </p>
              <button 
              id="1"
              name="btn"
              type="submit" 
              method="POST" 
              onClick={
                this.UserRegistrationFunction
                
              } 
              
              className="btn btn-danger btn-block">
            

              Registration
              </button>
            
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  users: state.userReducer.users,
})
export default connect(mapStateToProps)(Registration);
//export default Registration;
