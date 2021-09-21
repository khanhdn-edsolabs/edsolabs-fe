import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart(props) {
  return (
    <Bar
      data={{
        labels: ['Online', 'Meeting', 'Training', 'Coding'],
        datasets: [
          {
            label: props.label,
            data: [props.online, props.meeting, props.training, props.coding],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        indexAxis: 'y',
        barPercentage: 0.5,

        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
}
