import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';




const Login = () => {
  
  const {Signin} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handle = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);
    Signin(email, password)
    .then(res =>{
      const user = res.user 
      console.log(user);
      form.reset()
      navigate(from, {replace:true})
    })
  }



  return (
    <div className='container w-50 mt-5 pt-5'>
      <Form onSubmit={handle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='d-flex' >Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='d-flex' >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <p>New to here <Link to='/signup'>Signup</Link></p>
      <Button variant="primary" type="submit" className='d-flex '>
        Login
      </Button>
    </Form>
    </div>
  );
};

export default Login;