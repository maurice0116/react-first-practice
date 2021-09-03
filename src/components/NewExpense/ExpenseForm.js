import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Method 1      
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Method 2
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        //Method 1
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
        //Method 2
        // setUserInput({
        //     enteredTitle: event.target.value,
        //     ...userInput
        // });

        //Method 2_1
        /* Pass a function into Set function.
        Using this method react will guarantee the prevState will always be the latest data snapshot */
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }

    const amountChangeHandler = (event) => {
        //Method 1
        setEnteredAmount(event.target.value);

        //Method 2
        // setUserInput({
        //     enteredAmount: event.target.value,
        //     ...userInput
        // });

        //Method 2_1
        /* Pass a function into Set function.
       Using this method react will guarantee the prevState will always be the latest data snapshot */
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // })


    }

    const dateChangeHandler = (event) => {
        //Method 1
        setEnteredDate(event.target.value);

        //Method 2
        // setUserInput({
        //     enteredDate: event.target.value,
        //     ...userInput
        // });

        //Method 2_1
        /* Pass a function into Set function.
       Using this method react will guarantee the prevState will always be the latest data snapshot */
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // })
    }

    const submitHandler = (event) => {
        //prevent the default sending request event.
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('I\'m default');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;