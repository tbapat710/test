export const optionsData = {
  chart: {
    type: "candlestick",
    height: 350,
    background: "#172d3e",
    zoom: {
      enabled: true,
    },
  },
  title: {
    text: "BTC/USD Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#fff",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
      },
    },
    formatter: (value) => Math.floor(value),
    min: undefined,
    max: undefined,
    tooltip: {
      enabled: true,
    },
  },
};

export const queryParams = "limit=150";
