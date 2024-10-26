import React from 'react'

function Buttonlist({content}) {
  console.log(content);
  
  return (
    <>
    {
      content.map((e,index)=>{
       return <div className='px-3 py-1  m-2 border rounded-lg border-gray bg-gray-200 ' key={index}>{e}</div>
      })
    }
   </>
  )c
}

export default Buttonlist