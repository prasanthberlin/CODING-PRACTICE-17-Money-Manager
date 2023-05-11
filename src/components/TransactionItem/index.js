// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteButton} = props
  const {title, amount, type, transId} = eachTransaction
  const deleteTransaction = () => {
    deleteButton(transId)
  }

  return (
    <li className="each-transaction-list">
      <hr className="horizontal-line" />
      <div className="each-transaction-item">
        <p className="table-column-spacing">{title}</p>
        <p className="table-column-spacing">{`Rs ${amount}`}</p>
        <p className="table-column-spacing">{type}</p>
        <button
          type="button"
          className="delete-button"
          onClick={deleteTransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
