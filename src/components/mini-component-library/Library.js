"use client"

import React from "react"
import BreadcrumbsPreview from "./BreadcrumbsPreview"
import ProgressBar from "@/ui/ProgressBar"
import { Button } from "@/ui/Buttons"

export default function Library() {
  return (
    <main className={` ml-auto mr-auto mt-4 max-w-2xl flex flex-col`}>
      <section className="text-center">
        <h1 className="text-xl font-bold my-2">Mini Component Library</h1>
      </section>
      <section>
        <BreadcrumbsPreview />
      </section>
      <div className="mt-6 p-2">
        <ProgressBar size="medium" value="50%" />
      </div>
    </main>
  )
}
