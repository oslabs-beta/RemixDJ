import React from 'react'
import treeimg from '../images/treecrop.png'

export function Intro(props) {
    return (
        <div className='grid-cols-2'>
            <div>
                <h1>Intro</h1>
            </div>
            <div><img src={treeimg}></img></div>
        </div>
    )
}