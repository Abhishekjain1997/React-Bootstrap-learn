import React from 'react';
import './App.css';
import { Navbar,Container } from 'react-bootstrap';
import Register from './components/Register'

const App=()=>{
  return (
  <>
      <Navbar bg="dark" expand="sm" variant="dark">
         <Container>
              <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>

         </Container>
          
      </Navbar>
  {/*<Counter/>*/}
  <Register/>
  </> 
  );
}

export default App;
