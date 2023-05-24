import React from "react"

import ToggleButton from "../ToggleButton"
import ButtonRow from "../ButtonRow"

const ControlPane = ({
  title,
  type,
  options,
  currentOption,
  handleSelectOption,
}) => {
  return (
    <div className={`p-6 pt-[18px] bg-white rounded-lg mt-8`}>
      <h2 className={"m-0 mb-[-4px]"}>
        {title}

        <span className={`ml-4 text-sm font-normal text-[hsl(0deg,0%,30%)]`}>
          {options.length} options
        </span>
      </h2>
      <ButtonRow>
        {options.map(({ id, label, color, children }) => (
          <ToggleButton
            key={id}
            isSelected={currentOption === id}
            onClick={() => handleSelectOption(id)}
            label={label}
            color={color}
          >
            {children}
          </ToggleButton>
        ))}
      </ButtonRow>
    </div>
  )
}

export default ControlPane
