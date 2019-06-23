import React from 'react';
import './App.css';

import CoinPicker from './CoinPicker';
import RatesChart from './RatesChart';

class App extends React.Component {

  state = {
    fromCoin: 'USD',
    toCoin: 'WINGS',
  }

  setFromCoin = (event)=> {
    this.setState({
      fromCoin: event.target.value, 
    })
  }

  setToCoin = (event)=> {
    this.setState({
      toCoin: event.target.value, 
    })
  }

  componentDidUpdate(prevProps, prevState){
    if( this.state.toCoin && this.state.fromCoin &&
        ( (this.state.fromCoin !== prevState.fromCoin ) ||
          (this.state.toCoin !== prevState.toCoin ) ) ) {
          fetch(`https://min-api.cryptocompare.com/data/histoday?`+`fsym=${this.state.fromCoin}&tsym=${this.state.toCoin}&limit=10`)
            .then(response=> response.json())
            .then(exchangeData=> this.setState({ exchangeData: exchangeData.Data }))
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setFromCoin}>SET</button>
        <CoinPicker fromCoin={this.state.fromCoin} 
                    setFromCoin={this.setFromCoin}
                    toCoin={this.state.toCoin}
                    setToCoin={this.setToCoin}/>
      </div>
    );
  }
}

export default App;
