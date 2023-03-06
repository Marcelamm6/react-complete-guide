import styles from './Input.module.css'

const Input = props => {
  return <div className={styles.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input}/>
    {/* {...props.input} ensures that all key values pairs in this input object are added to props as input */}
  </div>
}

export default Input