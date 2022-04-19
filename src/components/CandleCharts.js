import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import classes from "./CandleCharts.module.css";
import { optionsData, queryParams } from "../constants/CandleConstants";
import { timeDurationValues } from "../constants/CandleConstants";
import { getApiData } from "../constants/GlobalConstants";
import useApi from '../hooks/useApi';

const CandleCharts = () => {
  const [candleStickData, setCandleStickData] = useState([]);
  const [candleStickSeries, setCandleStickSeries] = useState([]);
  const [duration, setDuration] = useState("12h");
  const {_1Day,_1hour,_1month,_1week,_30minutes}=timeDurationValues

  const pathParams = `candles/trade:${duration}:tBTCUSD/hist`;
  const options = optionsData;
  const {fetchCandleChartApi}=useApi()
  useEffect(() => {
    async function fetchCandleChartApi() {
      try {
        const resp = await getApiData(pathParams, queryParams);
        setCandleStickData(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    // const data=fetchCandleChartApi(pathParams,queryParams);
    // console.log(data);
    // setCandleStickData(data)
    const interval = setInterval(fetchCandleChartApi, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const OHLC = candleStickData.map((val) => {
      const [date, open, close, high, low] = val;
      return {
        x: new Date(date),
        y: [
          Math.floor(open),
          Math.floor(high),
          Math.floor(low),
          Math.floor(close),
        ],
      };
    });
    const updatedSeriesData = [
      {
        data: OHLC,
      },
    ];
    setCandleStickSeries(updatedSeriesData);
  }, [candleStickData]);

  return (
    <div className={classes["chart-wrapper"]}>
      <div id="chart">
        <h1 className={classes.title}>
          <span className={classes["bitfinex-text"]}>BITFINEX</span>
        </h1>
        <h3 className={classes.title}>Chart: BTC/USD</h3>
        <ReactApexChart
          options={options}
          series={candleStickSeries}
          type="candlestick"
          height={350}
        />
        <button onClick={() => setDuration(_1Day)}>
          1Day
        </button>
        <button onClick={() => setDuration(_30minutes)}>
          30minutes
        </button>
        <button onClick={() => setDuration(_1hour)}>
          1hour
        </button>
        <button onClick={() => setDuration(_1month)}>
          1month
        </button>
        <button onClick={() => setDuration(_1week)}>
          1Week
        </button>
      </div>
    </div>
  );
};

export default CandleCharts;
