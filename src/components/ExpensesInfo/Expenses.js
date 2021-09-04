import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    let outputExpenses = props.expenseData;

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeExpensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const createOutputExpenses = (filteredYear) => {
        return props.expenseData.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
    }

    outputExpenses = createOutputExpenses(filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={changeExpensesFilterHandler} />
                {outputExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id} // Using key to let React identified which item is changed or add
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                    />
                ))}
            </Card>
        </div>
    );

}

export default Expenses;