import ExpenseDate from './ExpenseDate'
import './ExpensesItem.css'
function ExpensesItem(props) {
	const expenseAmout = props.amout
	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			{/* <div>{String(props.date)}</div> */}
			<h2 className='expense-item__description'>{props.title}</h2>
			<div className='expense-item__price'>${expenseAmout}</div>
		</div>
	)
}
export default ExpensesItem
""