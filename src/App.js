import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const [user, setUser] = useState({});
  return (
    <GoogleOAuthProvider clientId="924104507344-il7n3cpre0kjl7pna5bncbipidsrdcno.apps.googleusercontent.com">
    <div>hola dfme cagofgsfgsfgsdfg en toocvcvzcvdf</div>
    </GoogleOAuthProvider>


  );
}

export default App;
