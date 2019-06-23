import React from 'react';
import './CoinPicker.css';

const CoinPicker = (props)=>(
	<div className='CoinPicker'>
		<label>
			From CoinPicker: 
			<select value={props.fromCoin}
					onChange={props.setFromCoin}>
			<option value=''>Select Coin to convert from </option>
			<option value='USD'>USD</option>
       		<option value='EUR'>EUR</option>
       		<option value='ILS'>ILS</option>
        	<option value='BTC'>BTC</option>
        	<option value='ETH'>ETH</option>
        	<option value='WINGS'>WINGS</option>
			</select>
		</label>

		<label>
			To CoinPicker:
			<select value={props.toCoin}
					onChange={props.setToCoin}>
			<option value=''>Select Coin to convert to </option>
			<option value='USD'>USD</option>
        	<option value='EUR'>EUR</option>
        	<option value='ILS'>ILS</option>
        	<option value='BTC'>BTC</option>
        	<option value='ETH'>ETH</option>
        	<option value='WINGS'>WINGS</option>
			</select>
		</label>
	</div>
);


export default CoinPicker;