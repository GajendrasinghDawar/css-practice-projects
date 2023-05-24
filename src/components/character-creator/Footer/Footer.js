import React from "react"

const Footer = () => {
  return (
    <footer
      className={`relative p-16 bg-[hsl(0deg,0%,5%)] text-white text-center`}
    >
      All character assets taken from{" "}
      <a
        href="https://www.openpeeps.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-inherit underline"
      >
        Open Peeps
      </a>
      , by Pablo Stanley
    </footer>
  )
}

export default Footer
