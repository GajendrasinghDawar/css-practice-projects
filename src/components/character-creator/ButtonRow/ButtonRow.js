import React from "react"

const ButtonRow = ({ children }) => {
  return (
    <div
      className={`
    relative
    overflow-auto 
    whitespace-nowrap
    mx-[-22px] 
    mb-[-22px]
    p-[22px] 
     `}
    >
      {children}
    </div>
  )
}

export default ButtonRow
