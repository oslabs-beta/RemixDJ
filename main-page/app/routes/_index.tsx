import { Outlet, LiveReload, Link } from "@remix-run/react"
import { LinksFunction } from "@remix-run/node"

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
      <Link
        to="/tutorial"
        className="text-xl text-blue-600 underline"
      >
        Tutorial
      </Link>
      <br />
      <Link
        to="/testimonial"
        className="text-xl text-blue-600 underline"
      >
        Testimonials
      </Link>
      <br />
      <Link
        to="/about"
        className="text-xl text-blue-600 underline"
      >
        About the DJ Team (aka the jockeys)
      </Link>
      < Outlet />
      < LiveReload />
    </div>
  )
}