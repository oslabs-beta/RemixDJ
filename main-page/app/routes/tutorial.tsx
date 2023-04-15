import { Outlet, LiveReload, Link } from "@remix-run/react"
import { LinksFunction } from "@remix-run/node"

// @ts-expect-error
import stylesUrl from '../styles/global.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl }
  ]
}

export default function Tutorial() {
  return (
    <div>
      <div>
        <h1>Getting Started with Remix DJ</h1>
      </div>
      <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <p>Remix DJ will be available on the Chrome Web Store soon!
            Register to be updated when it's available for download, or see below for instructions on installing from Github.  </p>
          <details>
            <summary>
              Launching RemixDJ from our repo
            </summary>
            <ul>
              <li>Clone our repo</li>
              <li>In Chrome's extensions drop-down, navigate to "Manage Extensions"</li>
              <li>Turn on "Developer mode"</li>
              <li>In "Load Unpacked" select the remixDJ/chrome-extension/build folder</li>
            </ul>
          </details>
        </div>
      </div>
      <div>
        <img src='https://www.collinsdictionary.com/images/thumb/kitten_101801980_250.jpg?version=4.0.306'></img>
      </div>
    </div>
  )
}