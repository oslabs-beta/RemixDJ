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
// @ts-expect-error
import logo from './images/croppedlogo.png'

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
        <link rel='icon' href='.favicon.ico'></link>
      </head>
      <body className='bg-black text-white'>
        <header className='inline-flex flex-row place-items-start p-3 m-3'>
          <div className='flex-1'>
            <h1 className='text-7xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-extrabold 
            bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise inline-block text-transparent bg-clip-text'>RemixDJ</h1>
          </div>
          <div className="flex-1 max-h-16">
            <img src={logo} className='max-h-16 sm:max-h-16 md:max-h-24 lg:max-h-32 xl:max-h-32 2xl:max-h-32' />
          </div>
        </header>
        < Intro />
        <Team />
        <Socials />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html >
  );
}