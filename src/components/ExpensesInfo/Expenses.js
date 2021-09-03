import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    /* */
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeExpensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={changeExpensesFilterHandler} />
                {props.expenseData.map((expense) => (
                    <ExpenseItem date={expense.date} title={expense.title} price={expense.price} />
                ))}
            </Card>
        </div>
    );

}

export default Expenses;