import React from 'react'
import { LiveReload } from '@remix-run/react'

export function Team(props) {
  return (
    <div>
      <h1>Meet the Remix DJs</h1>
      <div className="grid grid-cols-5 gap-4 m-10">
        <img className="rounded-full max-h-20" src="https://media.licdn.com/dms/image/D4E03AQE8Nj0kohzJRw/profile-displayphoto-shrink_200_200/0/1681509623291?e=1687392000&v=beta&t=pqKqk7WfMWPVl2VEMEKsQfW8q13kjV5W4Xz-7Rj9h48"/>
        <img className="rounded-full max-h-20" src="https://media.licdn.com/dms/image/C5603AQEAbYj4n6wrIQ/profile-displayphoto-shrink_200_200/0/1552801293923?e=1687392000&v=beta&t=HdY1KUePTdSYnXSie_FtMMDjs7zaqX4vDd9B93z8Veo"/>
        <img className="rounded-full max-h-20" src="https://media.licdn.com/dms/image/C4E03AQHhXal_tDr0_w/profile-displayphoto-shrink_200_200/0/1624919749905?e=1687392000&v=beta&t=SktldJI48mfSizqVHZh_sLnByUjWJ1VEKdb3ux9lqxg"/>
        <img className="rounded-full max-h-20" src="https://media.licdn.com/dms/image/C4D03AQHMCgH3RznSuQ/profile-displayphoto-shrink_200_200/0/1594285340475?e=1687392000&v=beta&t=eFvi1DXJ0I2ZRfBwtI_1YZkyub6WzzeuOjrRGbZBBfA"/>
        <img className="rounded-full max-h-20" src="https://media.licdn.com/dms/image/C4D03AQGB9p0jLo4OMQ/profile-displayphoto-shrink_200_200/0/1517504038557?e=1687392000&v=beta&t=0U1MeEinfOwheiYfdp8E3Tkd61L7jRaXfTOX5ANQCDw" />
      </div>
      <LiveReload />
    </div>
  )
}