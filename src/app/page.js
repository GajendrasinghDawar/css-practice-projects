import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center ">
      <h1 className="font-bold text-xl">👇 Apps</h1>
      <Link href={"character-creator"} className="underline">
        {" "}
        character creator app
      </Link>
    </main>
  )
}
