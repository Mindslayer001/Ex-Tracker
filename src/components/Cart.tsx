import React from 'react'
interface Props{
    cartItems: String[];
    onClear: () => void;
}

const cart = ({ cartItems, onClear }:Props) => {
  return (<>
      <div>cart</div>
      <ul>
          {
              cartItems.map(item => <li key={item}>{item}</li>)
          }
      </ul>
      <button onClick={onClear}>Clear</button>
      </>
  )
}

export default cart