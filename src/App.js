import "./App.css";
import React, { Component } from 'react';

import BarChart from "./components/BarChart";

class App extends Component {

  constructor(){
    super()
    this.state={
      chartData:{}
    }
  }

componentWillMount(){
  this.getChartData();
}

getChartData(){
  this.setState({
    chartData :{
      labels: [
        'Boston',
        'Worcester',
        'Springfield',
        'Lowell',
        'Cambridge',
        'New Bedford',
      ],
      datasets: [
        {
          label: 'Population',
          data: [
                617594,
                181045, 
                153060,
                106519, 
                105162, 
                95072
              ],
               backgroundColor: [
               'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
               'rgba(75,192,192,0.6)',
              'rgba(153,102,255,0.6)',
            'rgba(255,159,64,0.6)',
            'rgba(255,99,132,0.6)'
          ]
        }
      ]
    
    }
  });
}

  render(){
  return (
    <div className="App Header">
      <BarChart  chartData={this.state.chartData} LegendPosition="bottom"/>
    </div>
  );
}
};

export default App;
