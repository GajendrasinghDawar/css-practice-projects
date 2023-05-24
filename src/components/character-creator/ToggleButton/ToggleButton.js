import React from "react"

const ToggleButton = ({ label, color, children, isSelected, ...delegated }) => {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={`w-[50px] h-[50px] border-[2px] border-solid border-[hsl(0deg,0%,5%)] text-lg font-bold bg-white outline-offset-2 "rounded-[1px] cursor-pointer mr-1 relative aria-pressed:bg-[hsl(0deg,0%,5%)] aria-pressed:text-white aria-pressed:border-[6px]`}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">{label}</span>
      {children}
    </button>
  )
}

export default ToggleButton
