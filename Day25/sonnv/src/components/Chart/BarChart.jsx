import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const chartData = [
  {
    label: "Online",
    value: "290",
  },
  {
    label: "Meeting",
    value: "260",
  },
  {
    label: "Training",
    value: "180",
  },
  {
    label: "Coding",
    value: "140",
  },
];

const chartConfigs = {
  theme: "fusion",
  type: "bar2d", // The chart type
  width: "100%", // Width of the chart
  height: "350", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Most Forked",
      yAxisName: "Forks",
      xAxisName: "Repos",
      xAxisNameFontSize: 16,
      yAxisNameFontSize: 16,
      showCanvasBorder: 0,
      showAlternateVGridColor: 0,
      usePlotGradientColor: 0,
      valueFontSize: 16,
      placeValuesInside: 0,
      divLineColor: "#102a42",
      divLineAlpha: 15,
      captionFontColor: "#102a42",
      captionFontBold: 0,
      captionFontSize: 20,
      captionFont: "Roboto",
      baseFont: "Open Sans",
      baseFontSize: 12,
      baseFontColor: "#617d98",
      smartLineColor: "#617d98",
      showShadow: 0,
      showPlotBorder: 0,
      paletteColors:
        "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
      bgColor: "#FFFFFF",
      showBorder: 0,
    },
    // Chart Data
    data: chartData,
  },
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const BarChart = () => {
  return <ReactFC {...chartConfigs} />;
};

export default BarChart;
