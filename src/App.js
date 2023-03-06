import { Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Chocolates from "./Components/Chocolates/Chocolates";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header/>
      <main>
        <Chocolates/>
      </main>
    </Fragment>
  );
}

export default App;
