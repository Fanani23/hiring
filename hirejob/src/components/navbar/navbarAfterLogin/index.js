import React from 'react'
import icon from '../../../assets/iconPeeWorld.png'
import iconNotif from '../../../assets/notif.png'
import iconMail from '../../../assets/mail.png'
import iconUser from '../../../assets/icon user.jfif'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const NavbarAfterLogin = () => {
  return (
    <navbar>
        <div className={'drop-shadow-xl '+styles.body}>
            <div className='container mx-auto flex py-8'>
                <div className="wrapperimg">
                    <img src={icon} alt="icon" />
                </div>
                <div className="list ml-auto flex">
                <Link>
                    <img src={iconNotif} className={'my-auto mr-16 '+styles.icon} alt="notif" />
                </Link>
                <Link>
                    <img src={iconMail} className={'my-auto mr-16 '+styles.icon} alt="mail" />
                </Link>
                <Link>
                    <div className={'border-2 border-slate-400 rounded-full overflow-hidden '+styles.wrapperimg}>
                    <img src={iconUser} className={'my-auto '+styles.iconUser} alt="mail" />
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </navbar>
  )
}

export default NavbarAfterLogin