import React, { useState } from 'react'

interface Props{
    children: string,
    maxChars?: number,
    limit?: boolean
}
const ExpandableText = ({ children, maxChars = 2000 ,limit =true}: Props) => {
    
    const [isExpandable, setExpandable] = useState(false);
    const text = isExpandable ? children : children.substring(0, maxChars);
    
  return (
      <div>
          <p>{text}</p>
          <button onClick={() => {
              setExpandable(!isExpandable)
          }}>{isExpandable? 'less' : 'more' }</button>
    </div>
  )
}

export default ExpandableText