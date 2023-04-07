import { LiveReload, useLoaderData, Link } from "@remix-run/react"

export function loader({ params }) {
  return params.name;
}

export default function Team() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>{data}</h1>
      <Link
        to="/about"
        className="text-xl text-blue-600 underline"
      >
       Back to the team!
      </Link>
      <LiveReload />
    </div>
  )
}