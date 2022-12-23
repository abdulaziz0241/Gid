import React from 'react'
import './settings.scss'
import { GrCircleQuestion } from 'react-icons/gr'

function Settings({ onTabSwitch }) {
   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')} style={{ backgroundColor: '#326A32', color: 'white' }}>Profil sozlamalari</button>
         </div>
         <div className="settings-container">
            <div className="heading">
               <span>Telefon va e-mail</span>
               <span className='change-pas'>Parolni o'zgartirish</span>
            </div>
            <div className="inputs-container">
               <div className="left-section sections">
                  <div className="phone-wrapper wrapper">
                     <label htmlFor="phone">Telefon</label>
                     <input type="text" name="phone" id="phone" placeholder='+' />
                     <span>Telefon raqamingizni davlat kodi bilan kiriting:<GrCircleQuestion /></span>
                  </div>

                  <div className="wrapper">
                     <label htmlFor="email">E-mail</label>
                     <input type="text" name="email" id="email" placeholder='example@gmail.com' />
                  </div>
               </div>
               <div className="right-section sections">
                  <div className="pass-wrapper wrapper">
                     <label htmlFor="password">Hozirgi parolingiz</label>
                     <input type="text" name="password" id="password" placeholder='Joriy parol' />
                  </div>
                  <div className="wrapper">
                     <label htmlFor="newpassword">Yangi parol</label>
                     <input type="password" name="password" id="newpassword" placeholder='Yangi parolni kiriting' />
                  </div>
                  <div className="wrapper">
                     <label htmlFor="verifypassword">Parolni tasdiqlang</label>
                     <input type="password" name="password" id="verifypassword" placeholder='Yangi parolni qayta kiriting' />
                  </div>

                  <button className='save-btn'>Saqlash</button>
               </div>
            </div>
         </div>
      </main >
   )
}

export default Settings