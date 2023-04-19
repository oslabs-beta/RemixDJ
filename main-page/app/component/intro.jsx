import React from 'react'
import treeimg from '../images/treecrop.png'
import { Link } from '@remix-run/react'

export function Intro(props) {
    return (
        <div className='grid-cols-1 p-3 m-3 xs:columns-1 sm:columns-2 md:columns-2 lg:columns-2 xl:columns-2 2xl:columns-2 gap-y-40'>
            <div className='flex flex-col place-content-center aspect-square'>
                <h1 className='p-3 sm:p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold'>A visualizer for Remix routes</h1>
                <p className='p-3 text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>Your roadmap to Remix. Visualize the nested component structure of any Remix site as a tree chart, drop-down list, or raw JSON object. <Link to='https://medium.com/@remixdj.dev/remix-dj-a-dev-tool-for-remix-482eee5db3ff' className='underline hover:text-magenta' target="_blank">Learn more.</Link > </p>
                <Link className='self-center' to='https://github.com/oslabs-beta/remixDJ' target="_blank"><button className='p-4 mt-4 text-xl font-extrabold rounded-2xl w-40 bg-gradient-to-tr active:ring-4 active:ring-magenta from-yellow via-turquoise to-green text-black hover:from-turquoise hover:via-green hover:to-yellow'>Get it now.</button></Link>

            </div>
            <div className='m-3 p-3 aspect-square bg-gradient-to-tr from-magenta via-green to-turquoise hover:from-green hover:via-turquoise hover:to-magenta rounded-2xl flex place-content-center place-items-center'>
                <img src={treeimg} className='p-5 rounded-3xl aspect-square'></img>
            </div>
        </div>
    )
}