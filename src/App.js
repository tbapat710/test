import OrderBook from "./components/OrderBook";
import CandleCharts from "./components/CandleCharts";
import "./App.css";

const App = () => {
  return (
    <>
      <CandleCharts />
      <OrderBook />
    </>
  );
};

export default App;
