/** Denne loginen er er hentent fra Marius Wallins' 
 * forelesning 'Leksjon 13' og er blitt modifisert litt for denne siden.
 */

import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header.jsx';

const Login = () => (
  <>
    <Header title="Logg inn" />
    <LoginForm />;
  </>
);

export default Login;
