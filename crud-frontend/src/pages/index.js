import React, { Component } from 'react'
import axios from 'axios';
import {Container, Row, Card, Button} from 'react-bootstrap';
import './card.css';
import {FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import history from '../history';

export default class ViewSet extends Component{
    constructor(){
        super();
        this.state={
            book:[],
        };
        this.deleteBookData=this.deleteBookData.bind(this);
    };

    bookData(){
        fetch('http://127.0.0.1:8000/api/book/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                book:data
            });
        });
    }

    componentDidMount(){
        this.bookData();
    }

    deleteBookData(id){
        fetch('http://127.0.0.1:8000/api/bookDelete/'+(id)+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.bookData();
            }
        });
    }

    render(){
        return(
        <Container>
            <Row>
                {this.state.book.map(book=>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={book.image}  />
                        <Card.Body >
                            <Card.Title style={{color:"green"}}>{book.name}</Card.Title>
                            {/* <Card.Text>{book.categoryName}</Card.Text> */}
                            <Card.Text>Үнэ: {book.price}</Card.Text>
                            <Button variant="outline-info" onClick={() => history.push('/update/'+(book.id))}>Update<FiEdit3/></Button>&nbsp;
                            <Button variant="outline-danger" onClick={()=>this.deleteBookData(book.id)}> Delete<RiDeleteBin5Line/></Button>
                        </Card.Body>
                    </Card>
                )}
            </Row>
            <Button variant="btn btn-success" id="btn" onClick={() =>history.push('/create')}>Ном нэмэх</Button>
        </Container>
        );
    }
}