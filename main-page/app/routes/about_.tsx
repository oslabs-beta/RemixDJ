import { Outlet, LiveReload } from "@remix-run/react";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <h3>Adam</h3>
      <h3>Matt</h3>
      <h3>Molly</h3>
      <h3>Tim</h3>
      <h3>Victoria</h3>
      <Outlet />
      <LiveReload />
    </div>
  )
}