import { Outlet, LiveReload } from "@remix-run/react"
import type { LinksFunction } from "@remix-run/node"

// @ts-expect-error
import stylesUrl from '../styles/index.css'

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: stylesUrl}
  ]
}

export default function Main() {
  return (
    <div>
      <h1>This will be the landing page</h1>
      < Outlet />
      < LiveReload />
    </div>
  )
}