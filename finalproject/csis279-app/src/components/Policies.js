import React, { Component } from 'react'
import Table from '../css/Table.css'
import{Link} from "react-router-dom";
import{Scrollbars}from 'react-custom-scrollbars';
import {getPolicies} from "../actions/actions";
import usersActions from '../redux/actions/users';
import { connect } from 'react-redux';

class Policies extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         users: [
            { Policy_id: 1, Policy_name: '', Policy_description: "", Policy_price: '',Add_Policy_to_Account:'Add' },
            { Policy_id: 2, Policy_name: '', Policy_description: "",Policy_price: '' },
            { Policy_id: 3, Policy_name: '', Policy_description: "", Policy_price: '' },
            { Policy_id: 4, Policy_name: '', Policy_description: "", Policy_price: '' }
         ]
      }
      this.name = "";
   }
   componentDidMount() {
     this.retrievePolicies();
    }
    async retrievePolicies () {
     let response=await this.props.dispatch(usersActions.getPolicies());
     this.setState({response});

    }

   renderTableData() {
    return this.props.users.map((users, index) => {
       const { policy_ID, policy_Name, policy_Description, policy_Price,Add_Policy_to_Account} = users //destructuring
       return (
          <tr key={policy_ID}>
             <td>{policy_ID}</td>
             <td>{policy_Name}</td>
             <td>{policy_Description}</td>
             <td>{policy_Price+ "$"}</td>
             <td><button id="add" >Add</button></td>
            
          </tr>
          
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.users[0])
    return header.map((key, index) => {
   return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    const {name} = this.props.location.state;
    this.name = name;
    return (
       
        <div>
           
            <p className="lead mt-4" >
               <Link to={{
                  pathname:'/MainMenu',
                  state:{username:this.name}
               }} >   Back to MainMenu? </Link>
               </p>
           <h1 id='title'>Here You Can Explore All Policies Available at Advantage!</h1>
          
           <table id='customers'>
              <tbody>
              <Scrollbars style={{width:1200,height:500}}>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
                 </Scrollbars>
              </tbody>
           </table>
          
        </div>
     )
 }
}
const mapStateToProps = state =>({
   users: state.userReducer.users,
 })
 export default connect(mapStateToProps)(Policies);