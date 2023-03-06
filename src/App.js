import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Chocolates from "./Components/Chocolates/Chocolates";
import Header from "./Components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Chocolates/>
      </main>
    </Fragment>
  );
}

export default App;
