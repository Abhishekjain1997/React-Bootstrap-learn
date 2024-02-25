import React,{useEffect, useState} from 'react'
import { UserService } from '../services/UserService'
import { Container,Row,Col,Table } from 'react-bootstrap'
const UserList=()=>{
     let [state,setState]=useState({
         users :[]
     })
     useEffect(()=>{
        UserService.getALluser().then((response)=>{
         setState({
            ...state,
            users: response.data
         })
        }).catch((err)=>{
           console.log(err)
        })
     },[])

    return (
        <>
           <Container className='mt-3'>
              <Row>
                  <Col>
                       <h3 className='text-primary'>User List</h3>
                       <p>lorem data is dummy data we use to learn any course so we use dummy data </p>
                  </Col>
              </Row>
              <Row>
                  <Col>
                        <Table striped bodered hover classname="shadow-lg text-center">
                        <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Location</th>

                          </tr>
                            </thead>
                            <tbody>
                                 {
                                    state.users.length>0 &&
                                    state.users.map(user=>{
                                          return(
                                            <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.address.city}</td>


                                               
                                            </tr>
                                          )
                                    })
                                 }
                             
                            </tbody>
                        </Table>
                  </Col>
              </Row>
           </Container>
        </>
    )
}
export default UserList