import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios'
import './login.css'
function Signup() {
    const [name , setName] =useState()
    const [email, setEmail] =useState()
    const [pass , setPass] =useState()
const handlesubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3002/register',{name , email , passwar:pass}).then (result=>console.log(result))
    .catch(err=>console.log(err))
}



  return (
    <section className='login'>
        <h1 className='text'>Sign Up</h1>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)}/>

        </Form.Group>

        <Form.Group className="mb-2" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formEmail">
          <Form.Label>Passward</Form.Label>
          <Form.Control type="passward" placeholder="passward" onChange={(e)=>setPass(e.target.value)}/>
        </Form.Group>

       

        <Button className='Button' type='submit'>
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default Signup;
