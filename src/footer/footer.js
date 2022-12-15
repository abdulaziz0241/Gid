import React from 'react'
import './footer.scss'
import '../App.scss'
import Telegram from '../assets/images/tg.svg'
import Facebook from '../assets/images/fb.svg'
import Instagram from '../assets/images/insta.svg'
import { useLocation } from 'react-router-dom'

function Footer() {
   const { pathname } = useLocation()

   return (
      <>
         {
            pathname !== '/' &&
            (<footer>
               <div className="footer-container">
                  <ul>
                     <div>
                        Bizning xizmatlar
                     </div>
                     <li>
                        <a>Platforma haqida</a>
                        <a>Gid yoki tarjimonni tanlash</a>
                        <a>Gid va tarjimonlar uchun</a>
                        <a>Blog</a>
                     </li>
                  </ul>
                  <ul>
                     <div>
                        Aloqa
                     </div>
                     <li>
                        <a>info@gits.uz</a>
                        <a>+998 99 006 02 41</a>
                        <a>Savol va takliflar</a>
                     </li>
                  </ul>
                  <ul>
                     <div>
                        Huquqiy ma'lumotlar
                     </div>
                     <li>
                        <a>Foydalanish shartlari</a>
                        <a>Maxfiylik siyosati va ommaviy oferta</a>
                     </li>
                  </ul>
               </div>
               <div className="img-wrapper">
                  <img src={Telegram} alt="telegram" />
                  <img src={Facebook} alt="telegram" />
                  <img src={Instagram} alt="telegram" />
               </div>
               <div className="footer-bottom">
                  All rights reserved. Created by the   QWERTY AL-FAJR  Compniy  | Tashkent,Uzbekistan.
               </div>
            </footer>)
         }

      </>

   )
}

export default Footer