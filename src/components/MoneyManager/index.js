import {Component} from 'react'

import {v4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    income: 0,
    expenses: 0,
  }

  changeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  changeTypeInput = event => {
    if (event.target.value === 'INCOME') {
      this.setState({type: 'Income'})
    } else {
      this.setState({type: 'Expenses'})
    }
  }

  addTransactionButton = event => {
    event.preventDefault()

    const {title, amount, type} = this.state

    if (type === 'Income') {
      this.setState(prevState => ({income: prevState.income + Number(amount)}))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + Number(amount),
      }))
    }

    const newTransaction = {transId: v4(), title, amount, type}

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    }))
  }

  deleteButton = transId => {
    const {transactionList} = this.state

    const filterTransaction = transactionList.filter(
      eachTransaction => transId !== eachTransaction.transId,
    )
    const deletedTransaction = transactionList.filter(
      eachTransaction => transId === eachTransaction.transId,
    )
    console.log(deletedTransaction)

    this.setState({transactionList: filterTransaction})

    if (deletedTransaction[0].type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income - Number(deletedTransaction[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - Number(deletedTransaction[0].amount),
      }))
    }
  }

  render() {
    const {transactionList, title, amount, type, income, expenses} = this.state

    console.log(this.state)

    const balance = income - expenses

    const moneyDetails = {income, expenses, balance}

    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="header-text-container">
            <h1 className="user-name-heading">Hi, Richard</h1>
            <p className="heading-description">
              Welcome back to your
              <span className="heading-special-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails moneyDetails={moneyDetails} />
          <div className="add-history-container">
            <div className="adding-transaction-container">
              <form onSubmit={this.addTransactionButton}>
                <h1 className="add-transaction-heading">Add Transaction</h1>
                <div className="user-input-container">
                  <label htmlFor="titleUserInput" className="text-coloring">
                    TITLE
                  </label>
                  <input
                    type="text"
                    id="titleUserInput"
                    value={title}
                    placeholder="TITLE"
                    className="user-input-value"
                    onChange={this.changeTitleInput}
                  />
                </div>
                <div className="user-input-container">
                  <label htmlFor="amountUserInput" className="text-coloring">
                    AMOUNT
                  </label>
                  <input
                    type="text"
                    value={amount}
                    id="amountUserInput"
                    placeholder="AMOUNT"
                    className="user-input-value"
                    onChange={this.changeAmountInput}
                  />
                </div>
                <div className="user-input-container">
                  <label htmlFor="selectFromOptions" className="text-coloring">
                    TYPE
                  </label>
                  <select
                    value={type}
                    id="selectFromOptions"
                    className="user-input-value"
                    onChange={this.changeTypeInput}
                  >
                    <option value={transactionTypeOptions[0].optionId}>
                      {transactionTypeOptions[0].displayText}
                    </option>
                    <option value={transactionTypeOptions[1].optionId}>
                      {transactionTypeOptions[1].displayText}
                    </option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="submit-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="transaction-history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-sub-container">
                <div className="heading-history-container">
                  <p className="table-column-spacing">Title</p>
                  <p className="table-column-spacing">Amount</p>
                  <p className="table-column-spacing">Type</p>
                </div>
                <ul className="transaction-list-container">
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.transId}
                      eachTransaction={eachTransaction}
                      deleteButton={this.deleteButton}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
