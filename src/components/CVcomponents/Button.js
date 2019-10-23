import React from 'react'

const Button = ({name}, props) => {
  return (
  <button className={props.className} onClick={props.onClick}>
    {name}
    {props.children}
  </button>
  )
}

export default Button
