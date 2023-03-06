import styles from './ChocolateItem.module.css'

const ChocolateItem = props => {
  const price = `$${props.price.toFixed(2)}`

  return <li className={styles.chocolate}>
    <div>
      <h3>{props.name}</h3>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{price}</div>
    </div>
    <div></div>
  </li>
}

export default ChocolateItem