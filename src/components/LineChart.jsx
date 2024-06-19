// src/components/LineChart.jsx
import React, {  useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';


Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Popularity',
        data: data.map(item => item.popularity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return <Line ref={chartRef} data={chartData} />;
};

export default LineChart;
