import "./characterCreator.css"
export const metadata = {
  title: "Character Creator",
  description: "Character Creator ",
}

export default function CharacterCreatorLayout({ children }) {
  return (
    <>
      <div className={`bg-[hsl(180deg,25%,92%)] h-full `}>{children}</div>
    </>
  )
}
