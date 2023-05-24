import React from "react"

const MaxWidthWrapper = ({ children, className = "", ...delegated }) => {
  return (
    <div
      className={` max-w-screen-lg px-8 mx-auto ${className}`}
      {...delegated}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
