import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeExpensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenseData.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} // Using key to let React identified which item is changed or add
                date={expense.date}
                title={expense.title}
                price={expense.price}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={changeExpensesFilterHandler} />
                {expenseContent}
            </Card>
        </div>
    );

}

export default Expenses;