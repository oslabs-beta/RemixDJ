import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload
} from "@remix-run/react";
// @ts-expect-error
import stylesheet from './styles/tailwind.css';
import { Team } from './component/team.jsx'
import { Socials } from './component/socials.jsx'
import { Intro } from './component/intro'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesheet }
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
      <body >
        <header>RemixDJ</header>
        <Intro />
        <Team />
        <Socials />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}