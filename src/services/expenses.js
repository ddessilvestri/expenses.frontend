// import { ActionCreators } from "../app/expensesReducer";
import { setExpenses, newExpense, editExpense, deleteExpense } from '../app/expensesSlice';

import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'https://localhost:7063/Expenses'
});
export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const { data } = await axiosInstance.get(); 
        dispatch(setExpenses(data));
    }
    catch{
        console.log('Error');
    }
}

export const NewExpense = async(dispatch,expense) =>{
    try{
        // api call
        const { data } = await axiosInstance.post('',expense);
        dispatch(newExpense(data));
    } catch{
        console.log('Error!');
    }
}

export const EditExpense = async(dispatch, expense) =>{
    try {
        await axiosInstance.put('',expense);

        dispatch(editExpense(expense));
    }catch{
        console.log('Error!');
    }
}

export const DeleteExpence  = async (dispatch,expense) => {
    try{
        await axiosInstance.delete('', { data : {...expense} } );
        dispatch(deleteExpense(expense));
    }catch (e){
        console.log('Error',e);
    }
}