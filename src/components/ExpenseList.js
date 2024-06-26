import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetExpenses } from '../services/expenses';
import { Row,Button,Col } from 'react-bootstrap';
import { ExpenseForm } from './ExpenseForm';


export const ExpenseList = () => {
  
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesSlice.expenses);

    useEffect(() => {
      GetExpenses(dispatch);
    }, []);

    return expenses.map(e=>
        <div key={e.id} style={{marginBottom:'1rem'}}>
            <ListRow expense={e} key={e.id}/>
        </div>
    )
    
}


const ListRow = ({expense}) =>{
    const [isEditing, setIsEditing] = useState(false);
    return(
     isEditing ?   <ExpenseForm expense={expense} setIsEditing ={setIsEditing} />
     :
    <>
        <div>
            <Row>
                <Col>{expense.description}</Col>
                <Col>${expense.amount}</Col>
                <Col>
                <Button variant="warning" onClick={()=> setIsEditing(!isEditing)}>Edit</Button>
                
                </Col>
            </Row>
                <hr/>
        </div>
    
    </> 
    )
}

export default ExpenseList;