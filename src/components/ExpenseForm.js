import {React, useState, useEffect} from 'react';
import { Button, Form,Row,Col } from "react-bootstrap"
import { DeleteExpence, EditExpense, NewExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';

export const ExpenseForm = ({expense, setIsEditing}) => {
    const descriptions = ['Groceries','Credit Card','Students Loans','Gas']
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);

    useEffect(()=> {
        if (expense !== undefined){
            setIsNewExpense(false);
            setAmount(expense.amount);
        }
        else{
            setIsNewExpense(true);
        }
    },[expense]);

    const dispatch = useDispatch();
    return (
    <Form
        onSubmit={ event => {
            event.preventDefault();
            if (isNewExpense){
                NewExpense(dispatch, {description:description,amount:amount});

            }else{
                EditExpense(dispatch, {id:expense.id ,description:description,amount:amount});
                setIsEditing(false);
            }
        }}
    >
        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as='select' 
                    onChange={event=> setDescription(event.target.value)}
                >
                    {descriptions.map((d, index) => <option key={index}>{d}</option>)}


                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control type='number' step='0.01' placeholder={amount} 
                    onChange={event => setAmount(event.target.value)}
                ></Form.Control>
            </Col>
            <Col style={{marginTop:'auto'}}>
                {isNewExpense
                ? <Button variant ='primary' type='submit'>Add</Button>
                : <div>
                    <Button style={{marginRight:'2px'}} variant ='danger' 
                    onClick={()=> DeleteExpence(dispatch,expense)}
                    >Delete</Button>
                    <Button style={{marginRight:'2px'}} variant ='success' type='submit'>Save</Button>
                    <Button style={{marginRight:'2px'}} variant ='default' onClick={()=> setIsEditing(false)}>Cancel</Button>
                </div>
            }
            </Col>
        </Row>
    </Form>
  )
}

export default ExpenseForm;