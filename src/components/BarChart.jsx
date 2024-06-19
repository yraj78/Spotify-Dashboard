import React, { useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Popularity',
        data: data.map(item => item.popularity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top', 
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Songs',
          font: {
            weight: '800'
          },
          margin: {
            top: 10,
          }
        },
      },
      y: {
        title: {
          display: true,
          text: 'Popularity',
          font: {
            weight: '800'
          },
          margin: {
            right: 10,
          }
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar ref={chartRef} data={chartData} options={chartOptions} />;
};

export default BarChart;