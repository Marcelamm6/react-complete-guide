import { Fragment } from "react"
import ChocolatesSummary from "./ChocolatesSummary"
import AvailableChocolates from "./AvailableChocolates"

const Chocolates = () => {
  return <Fragment>
    <ChocolatesSummary/>
    <AvailableChocolates/>
  </Fragment>
}

export default Chocolates