import { ActionCreators } from "../app/expensesReducer";
import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'https://localhost:7063/Expenses'
});
export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const { data } = await axiosInstance.get(); 
        dispatch(ActionCreators.setExpenses(data));
    }
    catch{
        console.log('Error');
    }
}

export const NewExpense = async(dispatch,expense) =>{
    try{
        // api call
        const { data } = await axiosInstance.post('',expense);
        dispatch(ActionCreators.newExpenses(data));
    } catch{
        console.log('Error!');
    }
}

export const EditExpense = async(dispatch, expense) =>{
    try {
        await axiosInstance.put('',expense);

        dispatch(ActionCreators.editExpense(expense));
    }catch{
        console.log('Error!');
    }
}

export const DeleteExpence  = async (dispatch,expense) => {
    try{
        await axiosInstance.delete('', { data : {...expense} } );
        dispatch(ActionCreators.deleteExpense(expense));
    }catch (e){
        console.log('Error',e);
    }
}