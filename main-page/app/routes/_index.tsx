import { Outlet, LiveReload } from "@remix-run/react"
export default function Main() {
  return (
    <div>
      <h1>This will be the landing page</h1>
      < Outlet />
      < LiveReload />
    </div>
  )
}