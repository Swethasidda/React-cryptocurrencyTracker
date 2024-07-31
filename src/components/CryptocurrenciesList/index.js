// Write your JS code here
import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoListDetails} = props
  return (
    <div className="crypto-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-image"
      />
      <div className="cryptoList-container">
        <div className="table-row">
          <div className="coin-type-container">
            <p className="coin">Coin</p>
            <p className="coin type">Type</p>
          </div>
          <div className="usd-euro-info">
            <p className="type coin">USD</p>
            <p className="euro coin">EURO</p>
          </div>
        </div>
        <ul>
          {cryptoListDetails.map(eachItem => (
            <CryptocurrencyItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
