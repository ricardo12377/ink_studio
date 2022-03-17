import React from 'react';
import './App.scss';
import Form from './components/form/Form'
import Navbar from './components/navbar/Navbar';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';





function App() {
  return (
    <div className="App">

      <Navbar
      home="Home"
      jobs="Jobs"
      contato="Contate-nos"
      />

     <Form />

       <Sobre
       h1="Presamos pela higiene e segurança"
       p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi numquam rem excepturi quam tempore aspernatur mollitia digni
       ssimos deserunt illum id eveniet, voluptatum"
       />
       <Contato 
       instagram="Instagram"
       twitter="Twitter"
       linkedin="Linkedin"
       youtube="Youtube"
       />
    </div>
  );
}

export default App;
