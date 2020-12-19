import React, { Component } from 'react';
//import{Link} from "react-router-dom";
import { getUsers,register} from "../actions/actions";
import { connect } from 'react-redux';
import actions from '../redux/actions/users';

class Registration extends Component {
  constructor(){
    super();
    this.state = { 
        username: '',
        password:'' ,
        number:0,
        email:'',
        data: []
    }
  
  }
  registerUsers = () => {
    register().then(res => {
      this.setState({data: res});
      console.log(res);
    });
  }

  

 
  componentDidMount() {}
   RegisterClickHandler=()=>{
       const { user_name }=this.state;
       const {user_password}=this.state;
       const {user_number}=this.state;
       const {user_email}=this.state;

       let data={
           username:user_name,
           password:user_password,
           email:user_email,
           number:user_number,
       }
        const {dispatch}=this.props;
        dispatch(actions.register(data));
       
       register(data).then((res)=>{
           try{
            this.props.history.push("Calculator");
           }catch(error){
               console.log("Error in registration! "+ error);
           }
          
       });
   };
   registrations=(event)=>{
 
    const { Username } = this.state;
    const { Password } = this.state;
    const { Number } = this.state;
    const { Email} =this.state;
   //alert("Hi " +Username)
      const contents = this.state.data.forEach((item, key) => {
  if(Password===item.user_password && Username===item.user_name){
      //alert("im here");
    this.props.history.push("/Calculator");
  }else{
    alert("Wrong username or password");
  }
  }
      )
  }
   
  
  /*retrieveUsers = () => {
    getUsers().then(res => {
      this.setState({data: res});
      console.log(res);
    });
  }*/
 
  handleNameChange = event => {
    event.preventDefault();
    this.setState({ username: event.target.value });
  }
  handlePasswordChange = event => {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }
  handleEmailChange = event => {
      event.preventDefault();
      this.setState({email:event.target.value});
  }
  handleNumberChange = event => {
      event.preventDefault();
      this.setState({number:event.target.value});
  }
 
  
/*authenticator=(event)=>{
 
  const { Username } = this.state;
  const { Password } = this.state;
 alert("Hi " +Username)
    const contents = this.state.data.forEach((item, key) => {
if(item.user_password===Password &&item.user_username===Username){
  this.props.history.push("/Table1");
}else{
  alert("Wrong username or password");
}
    })
 
}*/
  render() {
   


    return (
        <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Welcome! </h1>
        
              <div classname="form-group">
                <label for="username">  Username</label>
                <input
                  type="username"
                  //id="username"
                  //name="username"
                  className="form-control"
                  onChange={this.handleNameChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.user_name : ' Enter Username'}
                />
              </div>
              <div class="form-group">
                <label for="password"> Password</label>
                <input
                  type="password"
                  //id="password"
                  //name="password"
                  className="form-control"
                  onChange={this.handlePasswordChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.user_password : 'Enter Password'}
                />
              </div>
              <div classname="form-group">
                <label for="number">  Phone Number</label>
                <input
                  type="number"
                  //id="username"
                  //name="username"
                  className="form-control"
                  onChange={this.handleNumberChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.user_number : ' Enter Number'}
                  />
                  </div>
                  <div classname="form-group">
                <label for="email"> Email</label>
                <input
                  type="address"
                  //id="username"
                  //name="username"
                  className="form-control"
                  onChange={this.handleEmailChange}
                  placeholder={(this.props.location.state !== undefined) ? this.props.location.state.user_address : ' Enter your email'}
                  />
                  </div>
              
              <button 
              id="1"
              name="btn"
              type="submit"  
              onClick={
                //this.RegisterClickHandler()
                this.registerUsers
              } 
              class="btn btn-danger btn-block">
            

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
