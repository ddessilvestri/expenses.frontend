import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignUp } from '../services/authentication';
import { Form, FormControl, InputGroup,Button } from 'react-bootstrap';
import ThirdPartySignInsComponent  from './ThirdPartySignInsComponent';

export const SignUpPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();

  return (
    <div style={{width:'30rem',margin:'auto',paddingTop:'8px'}}>
        <Form onSubmit={event=> {
            event.preventDefault();
            SignUp(dispatch,{username,password,email});
        }}>
            <h4 style={{textAlign:'center'}}>Sign Up</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Username'
                    onChange={event => setUsername(event.target.value)}
                ></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Email'
                    onChange={event => setEmail(event.target.value)}
                ></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)}
                ></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Confirm Pssword' type='password'
                    onChange={event => setConfirmPassword(event.target.value)}
                ></FormControl>
            </InputGroup>
            <Button disabled={password != confirmPassword || password.length <= 0} type='submit' variant='success' style={{margin:'auto',display:'block',width:'10rem'}}>
                Sign Up
            </Button>
        </Form>
        <ThirdPartySignInsComponent/>
    </div>
  )
};

export default SignUpPage;
