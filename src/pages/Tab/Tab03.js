import React from 'react';
import xyPoint from "./data2.js";
import { faker } from '@faker-js/faker';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = [];
const yData = [];
xyPoint.map(v => {
  labels.push(v.x);
  yData.push(v.y);
});



export const data = {
  labels,
  datasets: [
    {
      label: 'asdfsfsf',
      data: yData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

function Tab03() {

  return (
    <div>
      <h1>RiskParity</h1>
      <Line options={options} data={data} />
    </div>
  )
}

export default Tab03;
