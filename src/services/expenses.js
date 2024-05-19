import { setExpenses, newExpense, editExpense, deleteExpense } from '../app/expensesSlice';
import { setExpensesError, editExpenseError,newExpenseError,deleteExpenseError } from '../app/expensesSlice';
import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}/Expenses`
});
export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const { data } = await axiosInstance.get(); 
        dispatch(setExpenses(data));
    }
    catch{
        dispatch(setExpensesError());
    }
}

export const NewExpense = async(dispatch,expense) =>{
    try{
        // api call
        const { data } = await axiosInstance.post('',expense);
        dispatch(newExpense(data));
    } catch{
        dispatch(newExpenseError());

    }
}

export const EditExpense = async(dispatch, expense) =>{
    try {
        await axiosInstance.put('',expense);

        dispatch(editExpense(expense));
    }catch{
        dispatch(editExpenseError());
    }
}

export const DeleteExpence  = async (dispatch,expense) => {
    try{
        await axiosInstance.delete('', { data : {...expense} } );
        dispatch(deleteExpense(expense));
    }catch (e){
        dispatch(deleteExpenseError());
    }
}