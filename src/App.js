import OrderBook from "./components/OrderBook";
import CandleCharts from "./components/CandleCharts";
import CandleFuncCharts from "./components/CandleFuncCharts";
import "./App.css";

const App = () => {
  return (
    <>
      <CandleFuncCharts />
      <OrderBook />
    </>
  );
};

export default App;
