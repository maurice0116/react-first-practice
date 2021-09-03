import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseItems(props) {
    const expenseData = props.expenseData;
    const expenseItems = [];
    expenseData.forEach(element => {
        expenseItems.push(<ExpenseItem date={element.date} title={element.title} price={element.price} />);
    });

    /* */
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeExpensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={changeExpensesFilterHandler} />
                {expenseItems}
            </Card>
        </div>
    );

}

export default ExpenseItems;