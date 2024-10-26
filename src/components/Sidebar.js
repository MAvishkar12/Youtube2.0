import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {
  const isMenuOpen=useSelector(store=>store.sideBar.isMenuOpen)
  console.log(isMenuOpen);
  
  // if(!isMenuOpen) return null;
  return !isMenuOpen? null :(
    <div className='p-5 border border-gray-400  shadow-inner w-44'>
        <p className='font-semibold'>Home</p>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Food</li>
            <li>Education</li>
        </ul>
        <p className='font-semibold mt-4'>Liked Videos</p>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Food</li>
            <li>Education</li>
        </ul>
        <p className='font-semibold mt-4'>Watch Later</p>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Food</li>
            <li>Education</li>
        </ul>
    </div>
  )

}

export default Sidebar