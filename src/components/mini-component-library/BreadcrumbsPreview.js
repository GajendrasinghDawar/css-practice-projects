import React from "react"
import { Breadcrumbs, Crumb } from "@ui/Breadcrumbs"
export default function BreadcrumbsPreview() {
  return (
    <div className="h-12 w-full  border rounded">
      <Breadcrumbs>
        <Crumb href="/">Home</Crumb>
        <Crumb href="/living">Living Room</Crumb>
        <Crumb href="/living/couch">Couches</Crumb>
        <Crumb href="/living/couch/sectional" isCurrentPage={true}>
          Sectionals
        </Crumb>
      </Breadcrumbs>
    </div>
  )
}
