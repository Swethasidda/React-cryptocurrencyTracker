// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = itemDetails
  return (
    <li className="crypto-container1">
      <li className="coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </li>
      <li className="usd-euro-info">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </li>
    </li>
  )
}

export default CryptocurrencyItem
