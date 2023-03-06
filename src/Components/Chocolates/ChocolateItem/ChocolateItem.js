import { useContext } from 'react'
import CartContext from '../../../Store/cart-context'
import styles from './ChocolateItem.module.css'
import ChocolateItemForm from './ChocolateItemForm'

const ChocolateItem = props => {
  const cartCtx = useContext(CartContext)

  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return <li className={styles.chocolate}>
    <div>
      <h3>{props.name}</h3>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{price}</div>
    </div>
    <div>
      <ChocolateItemForm id={props.id} onAddToCart={addToCartHandler}/>
    </div>
  </li>
}

export default ChocolateItem