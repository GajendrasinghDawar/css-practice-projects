import React from "react"
import { cva } from "class-variance-authority"

const button = cva("h-12 ", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
        "rounded",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    mysize: {
      small: ["w-2 text-sm", "py-1", "px-2"],
      medium: ["w-16 text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    { intent: "primary", mysize: "medium", class: "uppercase" },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
})

export const Button = ({ className, intent, mysize, ...props }) => (
  <button className={button({ intent, mysize, className })} {...props} />
)
