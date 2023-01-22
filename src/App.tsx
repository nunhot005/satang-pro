import { Provider } from "react-redux";
import { ExchangeTickerScreen } from "./pages/exchangeticker";
import { myStore } from "./sagas/createMiddleware";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "antd";

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExchangeTickerScreen />}>
            <Route path="/market/:symbol" element={<ExchangeTickerScreen />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
