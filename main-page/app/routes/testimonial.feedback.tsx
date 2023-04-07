import type { ActionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { db } from "../utils/db.server"

export const action = async ({request}: ActionArgs) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  if (
    typeof name !== "string" ||
    typeof content !== "string"
  ) {throw new Error('Fill out the form better')}
  const fields = { name, content };
  const feedback = await db.feedback.create({ data: fields });
  return redirect('/testimonial')
}

export default function Feedback() {
  return (
    <div>
      <p>Tell us what you think</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Feedback: <input type="text" name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}