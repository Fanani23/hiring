import React from 'react'
import styles from './index.module.css'
import logo from '../../assets/tokped.png'

const PengalamanKerja = () => {
  return (
    <div>
        <div className="wrapper mx-20">
            <div className="content flex my-20">
                <div className="wrapperimg">
                    <img src={logo} className={styles.img} alt="" />
                </div>
                <div className="wrappertext-content w-1/2 text-start ml-7">
                    <p className='text-2xl font-semibold mt-4'>Enginner</p>
                    <p className='text-xl my-2'>Tokopedia</p>
                    <p className='text-md text-gray-400 my-2'>July 2020 - Desember 2020 6 Months</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat exercitationem animi adipisci culpa numquam asperiores 
                        qui voluptatibus similique eligendi autem, eius doloremque ad quidem aut ipsum? 
                        Nostrum illo accusantium, repellendus qui alias placeat ducimus quaerat nobis obcaecati odio iure!</p>
                </div>
            </div>
            <div className="content flex my-20">
                <div className="wrapperimg">
                    <img src={logo} className={styles.img} alt="" />
                </div>
                <div className="wrappertext-content w-1/2 text-start ml-7">
                    <p className='text-2xl font-semibold mt-4'>Enginner</p>
                    <p className='text-xl my-2'>Tokopedia</p>
                    <p className='text-md text-gray-400 my-2'>July 2020 - Desember 2020 6 Months</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat exercitationem animi adipisci culpa numquam asperiores 
                        qui voluptatibus similique eligendi autem, eius doloremque ad quidem aut ipsum? 
                        Nostrum illo accusantium, repellendus qui alias placeat ducimus quaerat nobis obcaecati odio iure!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PengalamanKerja