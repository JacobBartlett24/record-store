import React, { Component } from "react";
import styled from "styled-components";
import logo from "../images/sample-stamp-rubber-style-red-260nw-1811246308.png";
import { useState } from "react";


const axios = require('axios');

const AdminMenuStyle= styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const FormStyle = styled.div`
display: flex;
flex-direction: column;
height: 50%;
width: 50%;
align-items: center;
justify-content: center;
background-color: #f2f2f2;
border-radius: 3px;
input{
  margin: 1rem 0 1rem 0;
  display: block;
}
`

const ButtonStyle = styled.div`
  display: inline-block;
`

function Admin(props){

  const [value,setValues] = useState({
    name: '',
    imgLink: '',
    price: '',
  });

  function handleSubmit(event){
    let str = stringifyDictionary();
    alert('Vinyl Added' + str);
    axios.post('http://localhost:3002/api/insert', {
      name: value.name, 
      price: value.price
    }).then(() =>{
      alert('success');
    }
    )
    event.preventDefault();
  }

  function handleDelete(event){
    let str = stringifyDictionary();
    alert('Vinyl Deleted' + str);
    axios.post('http://localhost:3002/api/delete', {
      name: value.name, 
      price: value.price
    }).then(() =>{
      alert('success');
    }
    )
    event.preventDefault();
  }

  function stringifyDictionary() {
    let vinyl = {
      'name': value.name,
      'price': value.price,
      'imgLink': value.imgLink,
    };
    let str = JSON.stringify(vinyl, null, 4);
    return str;
  }

  function handleChangeLink(event){
    event.persist();
    setValues((value) => ({
      ...value,
      imgLink: event.target.value,
    }));
  }

  function handleChangeName(event){
    event.persist();
    setValues((value) => ({
      ...value,
      name: event.target.value,
    }));
  }

  function handleChangePrice(event){
    event.persist();
    setValues((value) => ({
      ...value,
      price: event.target.value,
    }));
  }

  return(
    <AdminMenuStyle>
      <FormStyle>
        <h1>Admin Menu</h1>
        <form 
          onSubmit={handleSubmit}>

          <label>
            Link to IMG:
          <input 
            type='text' 
            name={value.imgLink}
            onChange={handleChangeLink}/>  
          </label>

          <label>
            Artist Name:
            <input 
              type='text' 
              name={value.name}
              onChange={handleChangeName}/>
          </label>
          
          <label>
            Price:
            <input 
              type='text' 
              name={value.price}
              onChange={handleChangePrice}/>
          </label>

          <ButtonStyle>
            <input
            type = 'submit'
            value= 'Add Title'
            onSubmit={handleSubmit}/>
            <input
            type='button'
            value= 'Delete Title'
            onClick={handleDelete}
            />
          </ButtonStyle> 
        </form>
        
      </FormStyle>
    </AdminMenuStyle>
  )
}

export default Admin;