"use client"
import React from "react"

import {
  defaultClothesColor,
  defaultSkinColor,
} from "@constants/character-creator/constants"
import Character from "../Character"
import MaxWidthWrapper from "../MaxWidthWrapper"
import ControlPane from "../ControlPane"

import {
  bodyOptions,
  headOptions,
  faceOptions,
  accessoryOptions,
  skinColorOptions,
  clothesColorOptions,
} from "./CharacterEditor.helpers"

function CharacterEditor() {
  const [body, setBody] = React.useState(0)
  const [head, setHead] = React.useState(0)
  const [face, setFace] = React.useState(0)
  const [accessory, setAccessory] = React.useState(0)
  const [skinColor, setSkinColor] = React.useState(defaultSkinColor)
  const [clothesColor, setClothesColor] = React.useState(defaultClothesColor)

  return (
    <main className={`pt-[128px] pb-[64px]`}>
      <div className="fixed bg-[hsl(195deg,20%,86%)] top-[60%] h-[60%] w-full" />
      <MaxWidthWrapper className={"relative"}>
        <header className={`pb-16 w-[75%]`}>
          <h1 className={`text-4xl font-semibold mt-0 mb-4 tracking-[-0.5px`}>
            Create your Character
          </h1>
          <p className={`text-lg m-0`}>
            Customize your character&apos;s look and style using the controls
            below. What sort of adventure will you embark on?{" "}
          </p>
        </header>
        <div className={`w-[50%]`}>
          <ControlPane
            title="Bodies"
            options={bodyOptions}
            currentOption={body}
            handleSelectOption={setBody}
          />
          <ControlPane
            title="Heads"
            options={headOptions}
            currentOption={head}
            handleSelectOption={setHead}
          />
          <ControlPane
            title="Faces"
            options={faceOptions}
            currentOption={face}
            handleSelectOption={setFace}
          />
          <ControlPane
            title="Accessories"
            options={accessoryOptions}
            currentOption={accessory}
            handleSelectOption={setAccessory}
          />
          <ControlPane
            title="Skin Color"
            options={skinColorOptions}
            currentOption={skinColor}
            handleSelectOption={setSkinColor}
          />
          <ControlPane
            title="Clothing Color"
            options={clothesColorOptions}
            currentOption={clothesColor}
            handleSelectOption={setClothesColor}
          />
        </div>
      </MaxWidthWrapper>

      <div className={`fixed min-h-[500px] bottom-[5%] top-[15%] left-[60%]`}>
        <Character
          body={body}
          head={head}
          face={face}
          accessory={accessory}
          skinColor={skinColor}
          clothesColor={clothesColor}
        />
      </div>
    </main>
  )
}

export default CharacterEditor
