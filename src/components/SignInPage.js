import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignIn } from '../services/authentication';
import { Form, FormControl, InputGroup,Button } from 'react-bootstrap';
import ThirdPartySignInsComponent  from './ThirdPartySignInsComponent';

export const SignInPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();

  return (
    <div style={{width:'30rem',margin:'auto',paddingTop:'8px'}}>
        <Form onSubmit={event=> {
            event.preventDefault();
            SignIn(dispatch,{username,password,email});
        }}>
            <h4 style={{textAlign:'center'}}>Welcome back</h4>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Username'
                    onChange={event => setUsername(event.target.value)}
                ></FormControl>
            </InputGroup>
            <InputGroup className='mb-3'>
                <FormControl placeholder='Password' type='password'
                    onChange={event => setPassword(event.target.value)}
                ></FormControl>
            </InputGroup>
            <Button type='submit' variant='primary' style={{margin:'auto',display:'block',width:'10rem'}}>
                Sign In
            </Button>
        </Form>
        <ThirdPartySignInsComponent/>
    </div>
  )
};

export default SignInPage;
