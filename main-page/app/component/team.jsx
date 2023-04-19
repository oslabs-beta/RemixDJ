import React from 'react'
import { LiveReload } from '@remix-run/react'
import gitimg from '../images/githublogo.png'
import linkimg from '../images/linkedinlogo.png'
import adam from '../images/adam.jpeg'
import matt from '../images/matt.jpeg'
import molly from '../images/molly.jpeg'
import tim from '../images/tim.jpeg'
import victoria from '../images/victoria.jpeg'

export function Team(props) {
  return (
    <div className='text-center'>
      <h1 className='p-3 sm:p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold'>Meet the Remix DJs</h1>
      <div className="grid xs:grid-cols-3 gap-2 sm:grid-cols-3 gap-4 m-10 md:grid-cols-5 gap-4 lg:grid-cols-5 gap-4 xl:grid-cols-5 gap-5 2xl:grid-cols-5 gap-6">
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={adam} />
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Adam Liang</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/adamsherpa"><img className='invert max-h-8 mt-2' src={gitimg}/></a>
            <a href='https://www.linkedin.com/in/adamvliang/'><img className='invert max-h-12' src={linkimg}/></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={matt}/>
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Matthew Jackson</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/Mjax511"><img className='invert max-h-8 mt-2' src={gitimg}/></a>
            <a href='https://www.linkedin.com/in/matthewjackson0/'><img className='invert max-h-12' src={linkimg}/></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={molly}/>
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Molly Greene</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/mollycgreene"><img className='invert max-h-8 mt-2' src={gitimg}/></a>
            <a href='https://www.linkedin.com/in/mollycgreene/'><img className='invert max-h-12' src={linkimg}/></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={tim}/>
          </div>
          <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Tim Muller</p>
          <div className='grid grid-cols-2 justify-items-center'>
            <a href="https://github.com/tmuller23"><img className='invert max-h-8 mt-2' src={gitimg}/></a>
            <a href='https://www.linkedin.com/in/timothy-muller-a0800b155/'><img className='invert max-h-12' src={linkimg}/></a>
          </div>
        </div>
        <div>
          <div className='m-2 p-1 bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise rounded-full'>
            <img className="rounded-full" src={victoria} />
          </div>
            <p className='text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Victoria Dillman</p>
            <div className='grid grid-cols-2 justify-items-center'>
              <a href="https://github.com/victoriadillman"><img className='invert max-h-8 mt-2' src={gitimg}/></a>
              <a href='https://www.linkedin.com/in/victoria-dillman/'><img className='invert max-h-12' src={linkimg}/></a>
            </div>
        </div>
      </div>
      <LiveReload />
    </div>
  )
}