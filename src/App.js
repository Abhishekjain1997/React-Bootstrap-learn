import React from 'react';
import './App.css';
import { Navbar,Container } from 'react-bootstrap';
import UserList from './components/UserList'


const App=()=>{
  return (
  <>
      <Navbar bg="dark" expand="sm" variant="dark">
         <Container>
              <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>

         </Container>
          
      </Navbar>
  {/*<Counter/>*/}
  {/*<Register/>*/}
  <UserList/>
  {/*<Register/>*/}
  </> 
  );
}

export default App;
