import React from 'react';
import styles from './chat.module.css';
import chat from '../../assets/chat.png';


export default function Chat() {

    return (
        <div className={styles.container}>    
            <div className={styles.chat}>
                <div className={styles.box1}>
                    <p className="p-4 text-base font-semibold">Chat</p>
                    <hr/>
                    <img src={chat} className='p-16' alt=''/>
                </div>
                <div className={styles.box2}>
                <p className="p-7"></p>
                <hr/>
                </div>
            </div>
        </div>
    )}