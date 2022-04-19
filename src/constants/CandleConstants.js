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

export const timeDurationValues={
    _1Day:"1D",
    _30minutes:"30m",
    _1hour:"1h",
    _1month:'1m',
    _1week:'1W'

}
export const queryParams = "limit=150";
