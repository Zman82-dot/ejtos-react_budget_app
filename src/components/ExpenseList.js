import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses,currency } = useContext(AppContext);

    return (
        <table className='table' style={{background:'lightgrey', margin:20,marginRight:'5rem',borderRadius:30}}>
              <thead className="thead-light">
            <tr>
              <th scope="col"><b>Department</b></th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
           {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;



