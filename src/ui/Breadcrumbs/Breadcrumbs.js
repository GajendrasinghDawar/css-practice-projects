import Link from "next/link"

export const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb" className="p-2">
      <ol className="p-0 m-0 list-none">{children}</ol>
    </nav>
  )
}
export const Crumb = ({ href, isCurrentPage, children }) => {
  return (
    <li className="inline [&:not(:first-of-type)]:ml-3 [&:not(:first-of-type)]:before:content-['/'] before:opacity-25 before:mr-3">
      <Link
        className="text-inherit no-underline hover:underline "
        href={href}
        aria-current={isCurrentPage ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  )
}
