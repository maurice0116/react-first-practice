# The process of learning React
這是一個React相關的學習紀錄

## RenderLists&ConditionalContent
This Section is about Rendering Lists and Conditional Content.


* 使用 Array.prototype.map() 來達到動態產生 Expenses 中的 ExpenseItem。
```
    {props.expenseData.map((expense) => (
        <ExpenseItem date={expense.date} title={expense.title} price={expense.price} />
    ))}
```

* 於 App.js 中，賦予 Expense 資料 State，經由 React 的 State 可以做到新增 Expense 項目的時候，重新渲染 Expenses 區塊。
```
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses=> {
      return [expense, ...prevExpenses];
    });
  }
```
