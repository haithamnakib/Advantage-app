import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import { useGoogleLogout } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    onAutoLoadFinished,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    autoLoad,
    isSignedIn,
    fetchBasicProfile,
    redirectUri,
    discoveryDocs,
    onFailure,
    uxMode,
    scope,
    accessType,
    responseType,
    jsSrc,
    onRequest,
    prompt
  })
  const { signOut, loaded } = useGoogleLogout({
    jsSrc,
    onFailure,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    fetchBasicProfile,
    discoveryDocs,
    uxMode,
    redirectUri,
    scope,
    accessType,
    onLogoutSuccess
  })
 
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);
ReactDOM.render(
    <GoogleLogout
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logout}
  
  />,
    document.getElementById('googleButton')
  );
 export default GoogleLogin;
 