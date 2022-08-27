import React from "react";
import {Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import data from '../data';
import '../styles/styles.css';
export function Product(){
    // setting state to update values
    // const [state, setState]= useState("")
    return(
        <Row>
            {data.map(product=>{
                return(
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Card className='my-3 p-3'>
                            <Card.Img src={product.Image}/>
                                    <Card.Body>
                                        <Card.Title as="div" className='productText semi-bold'> <strong>{product.productName}</strong> </Card.Title>
                                        <div className=' productText semi-bold mb-2'>
                                        <strong>{product.price}</strong> Rupees
                                        </div>
                                        <Card.Text as="p">
                                            <strong>Stock in count: <i>{product.StockCount}</i></strong><br/>
                                        </Card.Text>
                                    </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}