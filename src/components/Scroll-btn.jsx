import React, { useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
export default function Scrollbtn() {


    const [show,setShow] = useState(false)

    window.addEventListener('scroll', function(){
        const scrollHeight = window.scrollY
        if(scrollHeight > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    })

    const topBtn = () => {
        window.scrollTo(({
            top: 0,
            right: 0,
            behavior: 'smooth'
        }))
    }
  return (<>
    {show ? <div onClick={topBtn} className='scroll-btn'>
    <AiOutlineArrowUp  />
  </div> : null}</>
  )
}
