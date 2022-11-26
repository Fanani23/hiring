import React from 'react'
import styles from './index.module.css'
import logo from '../../assets/iconPeeWorld2.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={"footerwrapper py-16 "+styles.wrapperfooter}>
        <div className="container mx-auto">
            <img src={logo} alt="logo" />
            <div className={"address mt-8 "+styles.address}>
                <p className='text text-left text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti, dignissimos animi perspiciatis suscipit iste.</p>
            </div>
            <hr className='my-12' />
            <div className="wrappertext flex">
                <p className='text-left text-xl text-gray-50'>2020 Pewworld. All right reserved</p>
                <div className="button flex ml-auto">
                    <Link className='text-xl mr-16 text-gray-50'>Phone</Link>
                    <Link className='text-xl text-gray-50'>Email</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer