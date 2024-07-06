<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chatbot from './Chatbot.jsx';

// import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
// import TalkButton from './talkbutton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="talkie-gen-z.us.auth0.com"
  //   clientId="YkdnPqgJnF1HcArmTcu3E7FaxHWWEWKV"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
  <Chatbot>
    <App />
   </Chatbot >
  // </Auth0Provider>,
);

reportWebVitals();
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
// import TalkButton from './talkbutton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="talkie-gen-z.us.auth0.com"
    clientId="YkdnPqgJnF1HcArmTcu3E7FaxHWWEWKV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    {/* <TalkButton /> */}
  </Auth0Provider>,
);

reportWebVitals();
>>>>>>> 9a3ccf96297d78fb1458993a40f60365af762958
