import { LiveReload, useLoaderData } from "@remix-run/react"

export function loader({ params }) {
  console.log(params.name)
  return params.name;
}

export default function Team() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>{data}</h1>
      <LiveReload />
    </div>
  )
}