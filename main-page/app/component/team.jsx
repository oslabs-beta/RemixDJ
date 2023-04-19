import React from 'react'
import { LiveReload } from '@remix-run/react'

export function Team(props) {
  return (
    <div className='text-center'>
      <h1 className='p-3 sm:p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold'>Meet the Remix DJs</h1>
      <div className="grid grid-cols-5 gap-4 m-10">
        <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
          <img className="rounded-full" src="https://media.licdn.com/dms/image/D4E03AQE8Nj0kohzJRw/profile-displayphoto-shrink_200_200/0/1681509623291?e=1687392000&v=beta&t=pqKqk7WfMWPVl2VEMEKsQfW8q13kjV5W4Xz-7Rj9h48"/>
        </div>
        <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
          <img className="rounded-full" src="https://media.licdn.com/dms/image/C5603AQEAbYj4n6wrIQ/profile-displayphoto-shrink_200_200/0/1552801293923?e=1687392000&v=beta&t=HdY1KUePTdSYnXSie_FtMMDjs7zaqX4vDd9B93z8Veo"/>
        </div>
        <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
          <img className="rounded-full" src="https://media.licdn.com/dms/image/C4E03AQHhXal_tDr0_w/profile-displayphoto-shrink_200_200/0/1624919749905?e=1687392000&v=beta&t=SktldJI48mfSizqVHZh_sLnByUjWJ1VEKdb3ux9lqxg"/>
        </div>
        <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
          <img className="rounded-full" src="https://media.licdn.com/dms/image/C4D03AQHMCgH3RznSuQ/profile-displayphoto-shrink_200_200/0/1594285340475?e=1687392000&v=beta&t=eFvi1DXJ0I2ZRfBwtI_1YZkyub6WzzeuOjrRGbZBBfA"/>
        </div>
        <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
          <img className="rounded-full" src="https://media.licdn.com/dms/image/C4D03AQGB9p0jLo4OMQ/profile-displayphoto-shrink_200_200/0/1517504038557?e=1687392000&v=beta&t=0U1MeEinfOwheiYfdp8E3Tkd61L7jRaXfTOX5ANQCDw" />
        </div>
        <div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Adam Liang</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/adamsherpa"><img className='invert max-h-8 mt-2' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
            <a href='https://www.linkedin.com/in/adamvliang/'><img className='invert max-h-12' src='https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png'/></a>
          </div>
        </div>
        <div>
          <p>Matthew Jackson</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/Mjax511"><img className='invert max-h-8 mt-2' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
            <a href='https://www.linkedin.com/in/matthewjackson0/'><img className='invert max-h-12' src='https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png'/></a>
          </div>
        </div>
        <div>
          <p>Molly Greene</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/mollycgreene"><img className='invert max-h-8 mt-2' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
            <a href='https://www.linkedin.com/in/mollycgreene/'><img className='invert max-h-12' src='https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png'/></a>
          </div>
        </div>
        <div>
          <p>Tim Muller</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/tmuller23"><img className='invert max-h-8 mt-2' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
            <a href='https://www.linkedin.com/in/timothy-muller-a0800b155/'><img className='invert max-h-12' src='https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png'/></a>
          </div>
        </div>
        <div>
          <p>Victoria Dillman</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/victoriadillman"><img className='invert max-h-8 mt-2' src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
            <a href='https://www.linkedin.com/in/victoria-dillman/'><img className='invert max-h-12' src='https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png'/></a>
          </div>
        </div>
      </div>
      <LiveReload />
    </div>
  )
}