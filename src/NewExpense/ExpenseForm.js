import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');

    const titleChangeHAndler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const AmountChangeHAndler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const DateChangeHAndler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

    const expenseData = {
        title: enterTitle,
        amount: enterAmount,
        date: new Date(enterDate)
    }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount(''),
        setEnteredTitle(''),
        setEnteredDate('')
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type ='text' 
                value={enterTitle} 
                onChange={titleChangeHAndler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min= '0.01' step= '0.01' 
                value={enterAmount}
                onChange={AmountChangeHAndler}/>
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type='date' min= '2019-01-01' step= '2022-12-31' 
                value={enterDate}
                onChange = {DateChangeHAndler}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm;