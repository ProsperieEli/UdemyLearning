import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem() {
  const expenses = {
    date: new Date(2022, 6, 11).toLocaleDateString('en-US'),
    payment: 'Car Insurance',
    amount: 300
  }
  console.log(expenses.date)
  // const date = new Date(2022, 6, 11)
  // const amount = 300
  // const payment = 'Car Insurance'

  return (
  <div className='expense-item'>
    <div>{expenses.date.toString()}</div>
    <div className='expense-item__description'>{expenses.payment}</div>
    <h3 className='expense-item__price'>{expenses.amount}</h3>
    </div>
    )
}
