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
<<<<<<< HEAD
      <button>About the DJ Team (aka the jockeys)</button>
=======
>>>>>>> 67711852fa467e9b9af1588c90a608f7c7805b6a
      < Outlet />
      < LiveReload />
    </div>
  )
}