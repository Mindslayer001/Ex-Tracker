import React from 'react'

interface Props{
    CartItemsCount: number
}
const Navbar = ({CartItemsCount}:Props) => {
  return (
      <div>Navbar: {CartItemsCount}</div>
  )
}

export default Navbar