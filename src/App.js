import OrderBook from "./components/OrderBook";
import CandleCharts from "./components/CandleCharts";
import "./App.css";
import WebsocketOrderBook from "./components/WebsocketOrderBook";

const App = () => {
  return (
    <>
      <WebsocketOrderBook/>
      <CandleCharts />
      <OrderBook />
    </>
  );
};

export default App;
