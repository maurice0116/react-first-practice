import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
    //Must be called directly in component function.
    //Calling 'useState' function will get back two values.
    //Value one is value itself. Value two is updating function. 
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        //Calling this state update function will cause this component function be called again
        setTitle('Updated');
        console.log(title);
    };


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;