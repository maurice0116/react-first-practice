import React, { useState } from 'react';

import Expenses from "./components/ExpensesInfo/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2021, 6, 1),
    title: 'Car Insurance',
    price: 235.4
  },
  {
    id: 'e2',
    date: new Date(2021, 3, 9),
    title: 'Computer',
    price: 1099.87
  },
  {
    id: 'e3',
    date: new Date(2020, 2, 21),
    title: 'Pencil',
    price: 10.32
  },
  {
    id: 'e4',
    date: new Date(2021, 4, 17),
    title: 'Switc',
    price: 877.99
  },
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // 將原本的Expense解構並將新增的Expense資料放入
    setExpenses(prevExpenses=> {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;
