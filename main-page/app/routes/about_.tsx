import { Outlet, LiveReload, Link } from "@remix-run/react";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <Link
        to="Adam"
        className="text-xl text-blue-600 underline"
      >
        Adam
      </Link>
      <br />
      <Link
        to="Matt"
        className="text-xl text-blue-600 underline"
      >
        Matt
      </Link>
      <br />
      <Link
        to="Molly"
        className="text-xl text-blue-600 underline"
      >
        Molly
      </Link>
      <br />
      <Link
        to="Tim"
        className="text-xl text-blue-600 underline"
      >
        Tim
      </Link>
      <br />
      <Link
        to="Victoria"
        className="text-xl text-blue-600 underline"
      >
        Victoria
      </Link>
      <Outlet />
      <LiveReload />
    </div>
  )
}