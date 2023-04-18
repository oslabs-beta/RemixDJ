import { Outlet, Link, LiveReload, useLoaderData } from "@remix-run/react"
import { json } from "@remix-run/node"
import type { Feedback } from "@prisma/client"
import { db } from "app/utils/db.server"

export const loader = async () => {
  return json({
    feedback: await db.feedback.findMany()
  })
}

export default function Testimonial() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Fans of our work:</h1>
      {data.feedback.map((elem, i) => {
        return <div key={`unique${i}`} ><br></br><h2>{elem.name}</h2><h3>{elem.content}</h3></div>
      })}
      <br />
      <Link
        to="feedback"
        className="text-xl text-blue-600 underline"
      >
        Want to give feedback?
      </Link>
      <Outlet />
      <LiveReload />
    </div>
  )
}
