import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import classes from "./CandleFuncCharts.module.css";
import axios from "axios";
import { optionsData, queryParams } from "../constants/CandleConstants";
import { baseUrl } from "../constants/GlobalConstants";

const CandleFuncCharts = () => {
  const [options, setOptions] = useState(optionsData);
  const [value, setValue] = useState([]);
  const [series, setSeries] = useState([]);
  const [duration, setDuration] = useState("12h");

  const pathParams = `candles/trade:${duration}:tBTCUSD/hist`;

  useEffect(() => {
    axios.get(`${baseUrl}/${pathParams}?${queryParams}`).then(
      (response) => {
        setValue(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [value]);

  useEffect(() => {
    const OHLC = value.map((val) => {
      return {
        x: new Date(val[0]),
        y: [
          Math.floor(val[1]),
          Math.floor(val[3]),
          Math.floor(val[4]),
          Math.floor(val[2]),
        ],
      };
    });
    const updatedSeriesData = [
      {
        data: OHLC,
      },
    ];
    setSeries(updatedSeriesData);
  }, [value]);

  return (
    <div className={classes["chart-wrapper"]}>
      <div id="chart">
        <h1 className={classes.title}>
          <span className={classes["bitfinex-text"]}>BITFINEX</span>
        </h1>
        <h3 className={classes.title}>Chart: BTC/USD</h3>
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
        <button onClick={() => setDuration("1D")}>1D</button>
        <button onClick={() => setDuration("30m")}>30m</button>
        <button onClick={() => setDuration("1h")}>1h</button>
        <button onClick={() => setDuration("1m")}>1m</button>
        <button onClick={() => setDuration("1W")}>1W</button>
      </div>
    </div>
  );
};

export default CandleFuncCharts;
