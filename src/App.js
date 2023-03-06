import { Fragment } from "react";
import Chocolates from "./Components/Chocolates/Chocolates";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Chocolates/>
      </main>
    </Fragment>
  );
}

export default App;
