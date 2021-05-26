import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './card.css';

class Update extends Component{
    constructor(){
        super();
        this.state={
                name: '',
                image: null,
                categoryName:'',
                price:'',
        };  
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    
    bookData(id){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/bookUpdate/'+id+'/')
        .then(response=>response.json())
        .then((book)=>{
            this.setState({
                id:book.id,
                name:book.name,
                image:book.image,
                categoryName:book.categoryName,
                price:book.price,
            });
        });
    }
    componentDidMount(){
        this.bookData();
    }

    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[1]
        })
      };

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    submitForm(id){
        // var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/api/bookUpdate/'+(id)+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }
    render(){
        return (
            <div className="create" align="center">
                <input className="createinput" value={this.state.name} name="name" onChange={this.changeHandler} type="text" placeholder="Номын нэр"/>
                <br/>
                <input className="createinput" type="file" id="image" accept="image/png, image/jpeg"  onChange={this.handleImageChange} placeholder="Зураг"/>
                <br/>
                <input className="createinput" value={this.state.price} name="price" onChange={this.changeHandler} type="number" placeholder="Үнэ"/>
                <br/>
                <input className="createinput" value={this.state.categoryName} name="categoryName" onChange={this.changeHandler} type="text" placeholder="Категорийн нэр"/>
                <br/>
                <Button id="submit" type="submit" onClick={this.submitForm(this.state.id)} className="btn btn-info">Update</Button>
            </div>
        );
    }
}

export default Update;