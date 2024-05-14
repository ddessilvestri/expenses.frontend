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