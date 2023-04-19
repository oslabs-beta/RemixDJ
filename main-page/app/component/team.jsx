import React from 'react'
import { LiveReload } from '@remix-run/react'
import gitimg from '../images/sociallogos/github-mark.png'
import linkimg from '../images/sociallogos/linkedincropped.png'
import adam from '../images/adam.jpeg'
import matt from '../images/matt.jpeg'
import molly from '../images/molly.jpeg'
import tim from '../images/tim.jpeg'
import victoria from '../images/victoria.jpeg'

export function Team(props) {
  return (
    <div className='text-center'>
      <h1 className='p-3 sm:p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold'>Meet the Remix DJs</h1>
      <div className="grid xs:grid-cols-2 xs:gap-2 sm:grid-cols-3 sm:gap-1 m-10 md:grid-cols-5 md:gap-5 lg:grid-cols-5 lg:gap-4 xl:grid-cols-5 xl:gap-5 2xl:grid-cols-5 2xl:gap-6">
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={adam} />
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Adam Liang</p>
          <div className='group grid grid-cols-3 gap-0 justify-items-center'>
            <a href="https://github.com/adamsherpa" target="_blank"><img className='grayscale max-h-8 mt-1' src={gitimg} /></a>
            <div className='mt-2 p-2 invisible group-hover:visible'><p>👨‍🔧</p></div>
            <a href='https://www.linkedin.com/in/adamvliang/' target="_blank"><img className='grayscale max-h-8 mt-1' src={linkimg} /></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={matt} />
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Matthew Jackson</p>
          <div className='group grid grid-cols-3 gap-0 justify-items-center'>
            <a href="https://github.com/Mjax511" target="_blank"><img className='grayscale max-h-8 mt-1' src={gitimg} /></a>
            <div className='mt-2 p-2 invisible group-hover:visible'><p>🐟</p></div>
            <a href='https://www.linkedin.com/in/matthewjackson0/' target="_blank"><img className='grayscale max-h-8 mt-1' src={linkimg} /></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={molly} />
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Molly Greene</p>
          <div className='group grid grid-cols-3 gap-0 justify-items-center'>
            <a href="https://github.com/mollycgreene" target="_blank"><img className='grayscale max-h-8 mt-1' src={gitimg} /></a>
            <div className='mt-2 p-2 invisible group-hover:visible'><p>👨‍🎤</p></div>
            <a href='https://www.linkedin.com/in/mollycgreene/' target="_blank"><img className='grayscale max-h-8 mt-1' src={linkimg} /></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={tim} />
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Tim Muller</p>
          <div className='group grid grid-cols-3 gap-0 justify-items-center'>
            <a href="https://github.com/tmuller23" target="_blank"><img className='grayscale max-h-8 mt-1' src={gitimg} /></a>
            <div className='mt-2 p-2 invisible group-hover:visible'><p>&#x1F43F;</p></div>
            <a href='https://www.linkedin.com/in/timothy-muller-a0800b155/' target="_blank"><img className='grayscale max-h-8 mt-1' src={linkimg} /></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={victoria} />
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Victoria Dillman</p>
          <div className='group grid grid-cols-3 gap-0 justify-items-center'>
            <a href="https://github.com/victoriadillman" target="_blank"><img className='grayscale max-h-8 mt-1' src={gitimg} /></a>
            <div className='mt-2 p-2 invisible group-hover:visible'><p>&#x1F33B;</p></div>
            <a href='https://www.linkedin.com/in/victoria-dillman/' target="_blank"><img className='grayscale max-h-8 mt-1' src={linkimg} /></a>
          </div>
        </div>
      </div>
      <LiveReload />
    </div>
  )
}