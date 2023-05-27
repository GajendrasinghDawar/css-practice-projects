import React from "react"
import { cva } from "class-variance-authority"

export const BarWrapper = cva("rounded overflow-hidden ", {
  variants: null,
  compoundVariants: null,
  defaultVariants: null,
})

const Bar = cva("bg-[hsl(240deg,80%,60%)] rounded-l", {
  variants: {
    size: {
      small: ["h-2 "],
      medium: ["h-3 "],
      large: ["h-4 "],
    },
  },
  compoundVariants: null,
  defaultVariants: { size: "small" },
})

const Wrapper = cva("bg-[hsl(0deg,0%,50%/0.15)] shadow-progressBar", {
  variants: {
    size: {
      small: ["p-0", "rounded"],
      medium: ["p-0", "rounded"],
      large: ["p-1", "rounded-lg"],
    },
  },
  compoundVariants: null,
  defaultVariants: { size: "small" },
})

const ProgressBar = ({ value = "99%", size, ...props }) => {
  return (
    <div
      className={Wrapper({ size })}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span className="visually-hidden">{value}%</span>
      <div className={BarWrapper()}>
        <div className={Bar({ size })} style={{ width: value }} />
      </div>
    </div>
  )
}

export default ProgressBar
