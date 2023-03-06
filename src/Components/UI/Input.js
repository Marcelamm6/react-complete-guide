import React from 'react'
import styles from './Input.module.css'

const Input = React.forwardRef( (props, ref) => {
  return <div className={styles.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input}/>
    {/* {...props.input} ensures that all key values pairs in this input object are added to props as input */}
  </div>
})

export default Input