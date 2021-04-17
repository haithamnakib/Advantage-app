import React, { Component } from 'react'
import Table from '../css/Table.css'
import{Link} from "react-router-dom";
import {getAccount} from "../actions/actions";
import actions from '../redux/actions/users';
import usersActions from '../redux/actions/users';
import { connect } from 'react-redux';
class MyAccount extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         account: [
            { customerID: '', customerFirstname: '', customerLastname: '',username:'',number:'',email:''}
            
         ]

      }
      this.name="";
   }
   componentDidMount() {
      //this.retrieveAccount();
      const {name}=this.props.location.state;
      console.log(name);
      let data={data:name};
      let response=this.props.dispatch(actions.getAccount(data));
      this.setState({response});
      
     }
     async retrieveAccount () {
      let response=await this.props.dispatch(usersActions.getAccount());
      this.setState({response});
      /*this.retrieveAccount = () => {
         getAccount().then(res => {
           this.setState({data: res});
           console.log(res);
         });
       }*/
 
     }
 

   renderTableData() {
    return this.props.account.map((account, index) => {
       const {customer_ID, customer_Firstname, customer_Lastname,customer_Username ,customer_Number,customer_Email} = account //destructuring
       return (
          <tr key={customer_ID}>
             <td>{customer_ID}</td>
             <td>{customer_Firstname}</td>
             <td>{customer_Lastname}</td>
             <td>{customer_Username}</td>
             <td>{customer_Number}</td>
             <td>{customer_Email}</td>

           
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.account[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
 render() {
    const {name}=this.props.location.state;
    this.name=name;
    return (
        <div>
             <p className="lead mt-4" >
               <Link to={{
                  pathname:'/MainMenu',
                  state:{username:this.name}
               }} >   Back to MainMenu? </Link>
            </p>
           <h1 id='title'>My Account at Advantage!</h1>
           <table id='customers'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
    )}
}
const mapStateToProps = state =>({
   account: state.userReducer.account,
 })
 export default connect(mapStateToProps)(MyAccount);