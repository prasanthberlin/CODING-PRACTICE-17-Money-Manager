// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props

  const {income, expenses, balance} = moneyDetails

  return (
    <div className="money-indicator-container">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="app-icons"
        />
        <div className="updated-text-container">
          <p className="title-text-app">Your Balance</p>
          <p className="amount-text-app" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="app-icons"
        />
        <div className="updated-text-container">
          <p className="title-text-app">Your Income</p>
          <p className="amount-text-app" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="app-icons"
        />
        <div className="updated-text-container">
          <p className="title-text-app">Your Expenses</p>
          <p className="amount-text-app" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
