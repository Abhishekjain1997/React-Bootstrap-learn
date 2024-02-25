import React, { useState } from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';

const Counter=()=>{

       const [state,Setstate]=useState({
          count :0
       })

       const incr=()=>{
        Setstate({
           count: state.count+1
        })
       }

       const decre=()=>{
        Setstate({
           count: state.count-1
        })
       }


    return (
            <>
                <Container className='mt-3'>
                    <Row>
                       <Col xs={4}>
                          <Card className='shadow'>
                            <Card.Body>
                              <p className="display-2">{state.count}</p>
                               <Button onClick={incr} variant='success' className='m-1'>Increment</Button>
                               <Button onClick={decre} variant='warning' className='m-1'>Decrement</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                    </Row>
                </Container>
            </>
    )
}
export default Counter;