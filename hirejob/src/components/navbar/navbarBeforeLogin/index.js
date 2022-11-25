import React from 'react'
import styles from './index.module.css'
import icon from '../../../assets/iconPeeWorld.png'

const NavbarBeforeLogin = () => {
  return (
    <navbar>
        <div className={'drop-shadow-xl '+styles.body}>
            <div className='container mx-auto flex py-8'>
                <div className="wrapperimg">
                    <img src={icon} className='mt-2' alt="icon" />
                </div>
                <div className="list ml-auto flex">
                    <button className={'mr-5 font-semibold py-3 rounded-lg '+ styles.button}>Masuk</button>
                    <button className={'font-semibold py-3 rounded-lg text-white '+styles.button2}>Daftar</button>
                </div>
            </div>
        </div>
    </navbar>
  )
}

export default NavbarBeforeLogin