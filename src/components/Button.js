import React from 'react'
import Buttonlist from './Buttonlist'
function Button() {
  let content=["All","Music","Cricket","Football","Kabadi","Action","React","Restaurant","Pune","Coding","Movies","Song"]
  return (
    <div className='flex'>
      <Buttonlist content={content}/>
      


    </div>
  )
}

export default Button