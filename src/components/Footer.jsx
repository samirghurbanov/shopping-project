import React from 'react'
import '../assets/styles/footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className='footer '>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-lg-6">
            <h2>Social</h2>
            <div className='d-flex flex-column '>
            <p><FaFacebook /> Facebook</p>
            <p><AiFillInstagram /> Instagram</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Contact</h2>
            <p><BsFillTelephoneFill /> <a className='ms-2' href="tel:+994555727552">0555727552</a></p>
            <p><MdEmail /> <a href="mailto:qurbanovsamir111@gmail.com">qurbanovsamir111@gmail.com</a></p>
            <p><ImLocation2 /><span className='ms-2'>Sumgait city</span></p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

