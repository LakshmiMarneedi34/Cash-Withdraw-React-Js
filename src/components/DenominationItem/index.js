// Write your code here

import './index.css'

const DenominationItems = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const onDeleteValue = () => {
    updateBalance(value)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={onDeleteValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItems
