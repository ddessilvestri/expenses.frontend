import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
    try{
        //api call
        const expenses = [
            { id:1, description:'Groceries', amount: 23.6 },
            { id:2, description:'Gas', amount: 12.6 },
            { id:3, description:'Student Loans', amount: 58.4}
        ];

        dispatch(ActionCreators.setExpenses(expenses));
    }
    catch{
        console.log('Error');
    }
}

export const NewExpense = async(dispatch,expense) =>{
    try{
        // api call
        dispatch(ActionCreators.newExpenses({id:10,description:expense.description,amount:expense.amount}));
    } catch{
        console.log('Error!');
    }
}

export const EditExpense = async(dispatch, expense) =>{
    try {
        dispatch(ActionCreators.editExpense(expense));
    }catch{
        console.log('Error!');
    }
}

export const DeleteExpence  = async (dispatch,expense) => {
    try{
        console.log("delete expense",dispatch,expense);
        dispatch(ActionCreators.deleteExpense(expense));
    }catch{
        console.log('Error');
    }
}