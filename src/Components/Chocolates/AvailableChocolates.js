import Card from '../UI/Card';
import styles from './AvailableChocolates.module.css'
import ChocolateItem from './ChocolateItem/ChocolateItem';

const DUMMY_CHOCOLATES = [
  {
    id: 'm1',
    name: 'Sweet',
    description: 'Finest sweet chocolate',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Belgian',
    description: 'A belgian specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Crunchy Chocolate',
    description: 'nut, sweet, crunchy',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Dark Chocolate',
    description: 'Healthy...and delicious...',
    price: 18.99,
  },
];

const AvailableChocolates = () => {
  const chocolatesList = DUMMY_CHOCOLATES.map(chocolate => (
    <ChocolateItem 
      key={chocolate.id} 
      name={chocolate.name} 
      description={chocolate.description} 
      price={chocolate.price}
    />
  ))

  return <section className={styles.chocolates}>
    <Card>
    <ul>
      {chocolatesList}
    </ul>
    </Card>
  </section>
}

export default AvailableChocolates