import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
// import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData:props.chartData
    
  }
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    LegendPosition: "right",
  };

  render() {
    return (
      <div className="BarChart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest cities in The country",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.LegendPosition,
            },
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest cities in The country",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.LegendPosition,
            },
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest cities in The country",
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.LegendPosition,
            },
          }}
        />
      </div>
    );
  }
}
export default BarChart;
