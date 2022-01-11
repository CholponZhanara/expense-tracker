import React from 'react'
import ExpensesItem from './ExpensesItem'
import './Expenses.css'

function Expenses(props) {
	return (
		<Card>
			<ExpensesItem
				title={props.item[0].title}
				amout={props.item[0].amout}
				date={props.item[0].date}
			/>
			<ExpensesItem
				title={props.item[1].title}
				amout={props.item[1].amout}
				date={props.item[1].date}
			/>
			<ExpensesItem
				title={props.item[2].title}
				amout={props.item[2].amout}
				date={props.item[2].date}
			/>
			<ExpensesItem
				title={props.item[3].title}
				amout={props.item[3].amout}
				date={props.item[3].date}
			/>
			<ExpensesItem
				title={props.item[4].title}
				amout={props.item[4].amout}
				date={props.item[4].date}
			/>
		</Card>
	)
}
export default Expenses
