import React from 'react'
import styles from './chat.module.css'
// import Footer from '../../img/Group 114.png';
// import Person from '../../img/Mask Group.png';
// import Elip from '../../img/Elipse 295.png';
// import Vector from '../../img/Vector.png';
import chat from '../../img/chat.png'


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