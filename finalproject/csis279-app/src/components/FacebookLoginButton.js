import { response } from 'express';
import React,{Component}from 'react';
import '../css/application.css';

class FacebookLoginButton extends Component {
    componentDidMount(){
        (function(d,s,id){
            var js,fjs= d.getElementsByTagName(s)[0];
            if(d.getElementById(id)){
                return;
            }
            js=d.createElement(s);
            js.id=id;
            js.src="https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js,fjs);
            (document,'script','facebook-jssdk');
        })
        window.fbAsyncInit=()=>{
            FB.init({
                appId:'999999999999999',//changes withy the change of the facebook id
                autoLogAppEvents:true,
                xfbml:true,
                version:'v3.0'
            });
            FB.Event.subscribe('auth.statusChange',response=>{
                if(response.authResponse){
                    this.checkLoginState()
                }else{
                    console.log('[FacebookLoginButton] User canceled login or did not fully authorize');
                }
            });
        };
    }
    checkLoginState(){
        FB.getLoginStatus(function(response){
            this.statusChangeCallback(response);
        }.bind(this));
    }
    login(){
        FB.login(this.checkLoginState(),{
            scope:'email'
        });
    }
    statusChangeCallback(response){
        if(response.status==='connected'){
            this.testAPI();
        }else if(response.status==='not_authorized'){
            console.log("[FacebookLoginButton] Person is Logged into Fcebook but not your app");
        }else{
            console.log("[FacebookLoginButton] Person is not logged into Facebook");
        }
        }
    testAPI(){
        FB.api('/se',function(response){
            console.log('[FacebookLoginButton] Successful login for',response);
        });
    }
    render(){
        return(
            <button className="btn btn-block btn-fb"
            onClick={
                ()=>this.login()}>
            <i className="fa fa-facebook"/> Login with Facebook 
                </button>
        )
    }
        }
    export default FacebookLoginButton;