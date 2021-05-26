import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import history from '../history';
import './card.css';

class Create extends Component {

  state = {
    name: '',
    image: null,
    categoryName:'',
    price:'',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('name', this.state.name);
    form_data.append('image', this.state.image);
    form_data.append('categoryName', this.state.categoryName);
    form_data.append('price', this.state.price);
    let url = 'http://localhost:8000/api/book/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="create" align="center">
        <form onSubmit={this.handleSubmit}>
            <input className="createinput" type="text" placeholder='Name' id='name' value={this.state.name} onChange={this.handleChange} required/><br/>
            <input className="createinput" type="text" placeholder='CategoryName' id='categoryName' value={this.state.categoryName} onChange={this.handleChange} required/><br/>
            <input className="createinput" type="file" id="image" accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/><br/>
            <input className="createinput" type="number" placeholder='Price' id='price' value={this.state.price} onChange={this.handleChange} required/><br/>
          <Button id="submit" variant="btn btn-success" onClick={()=> history.push('/Home')}>Create</Button>
        </form>
      </div>
    );
  }
}

export default Create;