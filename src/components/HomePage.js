import { ToastContainer } from "react-toastify";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseList } from "./ExpenseList"; 
export const HomePage = () => {
  return (
    <div style={{width: '60%', margin:'auto'}}>
     <ToastContainer/>
      <h3>New Expense</h3>
      <ExpenseForm/>
      <hr style ={{border:'1px solid grey'}}/>
      <h3>Your Expenses</h3>
      <ExpenseList/>
    </div>
  )
};

export default HomePage;
