import React from 'react'
import styles from './chat.module.css'
import chat from '../../assets/chat.png'


export default function Chat() {

    return (
        <div class={styles.container}>    
            <div class={styles.chat}>
                <div class={styles.box1}>
                    <p class="p-4 text-base font-semibold">Chat</p>
                    <hr/>
                    <img src={chat} class='p-16' alt=''/>
                </div>
                <div class={styles.box2}>
                <p class="p-7"></p>
                <hr/>
                </div>
            </div>
        </div>
    )}