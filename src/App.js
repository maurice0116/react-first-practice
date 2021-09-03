import Expenses from "./components/ExpensesInfo/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseItems = [
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

  const addExpenseHandler = expense => {
    console.log('In App.js.');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseData={expenseItems} />
    </div>
  );
}

export default App;
