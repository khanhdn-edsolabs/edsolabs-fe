import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ spentTimeEachTag }) => {
  const data = {
    labels: spentTimeEachTag.map((tag) => tag.name),
    datasets: [
      {
        label: 'Time do this tag (hours)',
        data: spentTimeEachTag.map((tag) => tag.total_time_spent),
        backgroundColor: [
          'rgb(44, 196, 219)',
          'rgb(232, 88, 170)',
          'rgb(224, 132, 34)',
          'rgb(20, 189, 8)',
        ],
        hoverOffset: 18,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
