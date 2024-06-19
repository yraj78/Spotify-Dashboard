// src/components/PieChart.jsx
import React, {  useRef } from 'react';
import { Chart, PieController, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


Chart.register(PieController, ArcElement, Title, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Popularity',
        data: data.map(item => item.popularity),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie ref={chartRef} data={chartData} />;
};

export default PieChart;
