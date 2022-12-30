import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Singup = () => {
  const navigate = useNavigate()
  const {createUser, veriFy} = useContext(AuthContext)

  const handle = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password);
    createUser( email, password)
    .then( res => {
      const user = res.user 
      console.log(user);
      form.reset()
      handleEmail()
      toast.success('check email for verify')
      navigate('/')
    })
    .catch(error => console.error(error))
  
  }

  const handleEmail =()=>{
    veriFy()
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <div className='container w-50 mt-5 pt-5'>
      <Form onSubmit={handle}>
      <Form.Group className="mb-3" >
        <Form.Label className='d-flex' >Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='d-flex' >Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='d-flex' >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <p>Already have an account <Link to='/login'>Login</Link></p>
      <Button variant="primary" type="submit" className='d-flex '>
        Register
      </Button>
    </Form>
    </div>
  );
};

export default Singup;