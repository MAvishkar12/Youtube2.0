import React from 'react'
import { useDispatch } from 'react-redux'
import { tooglebtn } from '../redux/slices/toogleSbar';
function Header() {
  const dispatch=useDispatch();
  const handletoogle=()=>{
      dispatch(tooglebtn())
  }
  return (
      <div className='grid grid-flow-col p-3 shadow-lg'>
        <div className='flex col-span-1 cursor-pointer' >
            <img  onClick={handletoogle} className='h-12' src="https://miro.medium.com/v2/resize:fit:600/1*rddekGCO3PjhXqtePcIYIQ.png" alt="hamberge"></img>
        
            <img  className='h-12' src='https://www.citypng.com/public/uploads/preview/hd-youtube-yt-triangle-symbol-logo-icon-sign-png-701751695118564ln4ifqdive.png' alt="youtube icon"></img>
        </div>
        <div className='col-span-10'>
            <input className='p-2 w-1/2 border border-gray-400 shadow-inner  ' type='text' placeholder='Search'></input>
            <button className='p-2 shadow-inner  border border-gray-400 ' type='submit'>Search</button>
        </div>
        <div className='col-span-1'>
             <img className='h-16' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt='user'></img>
        </div>
      </div>
  )
}

export default Header