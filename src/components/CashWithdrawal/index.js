// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItems from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const text = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="logo-container">
            <div className="logo">{text}</div>
            <h1 className="heading">{name}</h1>
          </div>
          <div className="space-between-container">
            <p className="balance-description">Your Balance</p>
            <p className="number">{balance}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="withdraw-description">Withdraw</p>
          <p className="choose-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItems
                key={eachDenomination.id}
                denominationsDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
