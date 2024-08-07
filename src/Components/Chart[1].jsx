import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, title }) => {
  const options = {
    maintainAspectRatio: false,
  };

  const styles = {
    chartContainer: {
      width: '500px', 
      height: '300px', 
      margin: '35px',  
    },
  };

  return (
    <div style={styles.chartContainer}>
      <h2>{title}</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

const Chart = () => {
  const productionCostData = {
    labels: ['Production Cost', 'Sale'],
    datasets: [
      {
        label: 'Production Cost vs Sale',
        data: [300, 500],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const marketingData = {
    labels: ['Marketing', 'R&D', 'Operations'],
    datasets: [
      {
        label: 'Company Expenses',
        data: [200, 150, 100], 
        backgroundColor: ['#FFCE56', '#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FFCE56', '#FF6384', '#36A2EB'],
      },
    ],
  };

  const revenueData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Revenue Distribution',
        data: [400, 300, 200], 
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const costData = {
    labels: ['Fixed Costs', 'Variable Costs'],
    datasets: [
      {
        label: 'Cost Structure',
        data: [350, 450], 
        backgroundColor: ['#4BC0C0', '#FF6384'],
        hoverBackgroundColor: ['#4BC0C0', '#FF6384'],
      },
    ],
  };

  const styles = {
    dashboard: {
      display: 'flex',
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
    },
  };

  return (
    <div>
     
      <div style={styles.dashboard}>
        <PieChart data={productionCostData} title="Production Cost vs Sale" />
        <PieChart data={marketingData} title="Company Expenses" />
        <PieChart data={revenueData} title="Revenue Distribution" />
        <PieChart data={costData} title="Cost Structure" />
      </div>
    </div>
  );
};

export default Chart;
