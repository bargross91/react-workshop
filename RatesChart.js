import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const RatesChart = (props)=> (
  <LineChart
  width={400}
  height={400}
  data={props.exchangeData}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="high" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey='low' stroke="#387908" yAxisId={1} />
</LineChart>
);


export default RatesChart;
