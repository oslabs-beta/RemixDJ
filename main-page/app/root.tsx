// import * as React from 'react'
// import { Scripts } from '@remix-run/react'

// export default function App() {
//   const [count, setCount] = React.useState(0)
//   return (
//     <html>
//       <head>
//         <title>Remix DJ</title>
//       </head>
//       <body>
//         <p>Welcome to DJ Remix - THE devtool for RemixJS</p>
//         <button onClick={() => setCount(c => c + 1)}>{count}</button>
//         <Scripts />
//       </body>
//     </html>
//   )
// }
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload
} from "@remix-run/react";
// @ts-expect-error
import mainStylesheetUrl from './styles/global.css'

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: mainStylesheetUrl}
  ]
}

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        <title>Remix DJ</title>
      </head>
      <body>
        <h1>Welcome to Remix DJ-THE devtool for RemixJS*</h1>
        <h2>*This is going to be the permanent header</h2>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}