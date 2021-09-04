import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
    //Must be called directly in component function.
    //Calling 'useState' function will get back two values.
    //Value one is value itself. Value two is updating function. 
    // const [title, setTitle] = useState(props.title);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;