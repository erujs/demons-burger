import { Route, Routes } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<BurgerBuilder />} />
        <Route path="/orders" exact element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  );
}

export default App;
