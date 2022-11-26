import React from 'react'
import styles from './notif.module.css'
import gambar1 from '../../assets/1.png'
import gambar2 from '../../assets/2.png'
import gambar3 from '../../assets/3.png'
import gambar4 from '../../assets/4.png'

export default function Notifikasi() {
    return (
        <div class={styles.container}>
            <div class={styles.top}>
                <h1 class="text-white text-3xl font-bold"> Top Job</h1>
            </div>
            <div class={styles.content}>
                <input type="text" class="pl-4 form-control mb-6 py-2 w-full" placeholder='Search for any skill'/>
                <div class={styles.box}>
                    <img src={gambar1} class="m-4" alt=""/>
                    <div class="pl-6 mb-1">
                        <h2 class="mb-2 text-xl text-base font-semibold">Louis Tomlinson</h2>
                        <p class="text-sm text-slate-400 mb-2">Web Developer</p>
                        <p class="text-sm text-slate-400 mb-2">Lorem ipsum</p>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">PHP</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">Javascript</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">HTML</button>
                    </div>
                </div>
                <div class={styles.box}>
                    <img src={gambar2} class="m-4" alt=""/>
                    <div class="pl-6 ">
                        <h2 class="mb-2 text-xl text-base font-semibold">Harry Styles</h2>
                        <p class="text-sm text-slate-400 mb-2">Web Developer</p>
                        <p class="text-sm text-slate-400 mb-2">Lorem ipsum</p>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">PHP</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">Javascript</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">HTML</button>
                    </div>
                </div>
                <div class={styles.box}>
                    <img src={gambar3} class="m-4" alt=""/>
                    <div class="pl-6">
                        <h2 class="mb-2 text-xl text-base font-semibold">Niall Horan</h2>
                        <p class="text-sm text-slate-400 mb-2">Web Developer</p>
                        <p class="text-sm text-slate-400 mb-2">Lorem ipsum</p>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">PHP</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">Javascript</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">HTML</button>
                    </div>
                </div>
                <div class={styles.box}>
                    <img src={gambar4} class="m-4" alt=""/>
                    <div class="pl-6">
                        <h2 class="mb-2 text-xl text-base font-semibold">Liam Payne</h2>
                        <p class="text-sm text-slate-400 mb-2">Web Developer</p>
                        <p class="text-sm text-slate-400 mb-2">Lorem ipsum</p>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">PHP</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">Javascript</button>
                        <button type='submit' class="p-1 font-semibold mr-4 bg-yellow-400 text-white">HTML</button>
                    </div>
                </div>

            </div>
        </div>
    )
}