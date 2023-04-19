import React from 'react'
import { Link } from '@remix-run/react'
import github from '../images/sociallogos/github-mark.png'
import linkedin from '../images/sociallogos/linkedincropped.png'
import gmail from '../images/sociallogos/gmail.png'
import medium from '../images/sociallogos/mediumsquare.png'
import twitter from '../images/sociallogos/twittersocial.png'


export function Socials(props) {
  return (
    <div className='flex flex-row p-3 justify-center border-t mx-6 mt-5'>
      <div className='w-12 h-12 m-1.5 flex place-content-center place-items-center hover:bg-turquoise rounded-lg'>
        <Link to='mailto:remixdj.dev@gmail.com'>
          <img src={gmail} className='w-10 h-10 grayscale hover:grayscale-0'></img>
        </Link>
      </div>
      <div className='w-12 h-12 m-1.5 flex place-content-center place-items-center hover:bg-green rounded-lg'>
        <Link to='https://www.linkedin.com/company/remix-dj/about/' target="_blank">
          <img src={linkedin} className='w-10 h-10 grayscale hover:grayscale-0'></img>
        </Link>
      </div>
      <div className='w-12 h-12 m-1.5 flex place-content-center place-items-center hover:bg-magenta rounded-lg'>
        <Link to='https://github.com/oslabs-beta/remixDJ' target="_blank">
          <img src={github} className='w-10 h-10 grayscale hover:grayscale-0'></img>
        </Link>
      </div>
      <div className='w-12 h-12 m-1.5 flex place-content-center place-items-center hover:bg-yellow rounded-lg'>
        <Link to='https://twitter.com/RemixDJDev' target="_blank">
          <img src={twitter} className='w-10 h-10 grayscale hover:grayscale-0'></img>
        </Link>
      </div>
      <div className='w-12 h-12 m-1.5 flex place-content-center place-items-center hover:bg-red rounded-lg'>
        <Link to='https://medium.com/@remixdj.dev' target="_blank">
          <img src={medium} className='w-10 h-10 grayscale hover:grayscale-0'></img>
        </Link>
      </div>
    </div>
  )
}