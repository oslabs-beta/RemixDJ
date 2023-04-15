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
import mainStylesheetUrl from './styles/global.css';
import stylesheet from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: mainStylesheetUrl},
    {rel: 'stylesheet', href: stylesheet}
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
        <p>*This will be our permanent header</p>
        <Link
        to="/"
        className="text-xl text-blue-600 underline"
      >
        Home
      </Link>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}