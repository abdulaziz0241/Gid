import React from 'react'
import personImg from '../../assets/images/person.png'
import './data.scss'
import { AiOutlineCamera } from 'react-icons/ai'

function Datas({ onTabSwitch }) {
   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')} style={{ backgroundColor: '#326A32', color: 'white' }}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')}>Profil sozlamalari</button>
         </div>


         <div className="main-content">
            <div className="content-container">
               <div className="img-wrapper">
                  <img src={personImg} alt="personImg" />
                  <div className="icon-wrapper">
                     <AiOutlineCamera />
                  </div>
               </div>

               <div className="inputs-container">
                  <form >
                     <div className="name-username-wrapper">
                        <div className="name-wrapper">
                           <label htmlFor="name">Ism</label>
                           <input type="text" name="name" id="name" placeholder='Ismingizni yozing' />
                        </div>
                        <div className="surname-wrapper">
                           <label htmlFor="surname">Familiya</label>
                           <input type="text" name="surname" id="surname" placeholder='Familiyangizni yozing' />
                        </div>
                     </div>
                     <div className="company-wrapper">
                        <label htmlFor="company">Kompaniya</label>
                        <input type="text" name="company" id="company" placeholder='Kompaniya nomi' />
                     </div>

                     <div className="continent">
                        <div className="country">
                           <label htmlFor="countryname">Davlat</label>
                           <input type="text" name="countryname" list="countryname" placeholder="O'zbekiston" />
                           <datalist id="countryname">
                              <option selected value="O'zbekiston" />
                              <option value="Rossiya" />
                           </datalist>
                        </div>
                        <div className="City">
                           <label htmlFor="Cityname">Shahar</label>
                           <input type="text" name="Cityname" list="Cityname" placeholder="Tashkent" />
                           <datalist id="Cityname">
                              <option value="Tashkent" />
                              <option value="Samarqand" />
                           </datalist>
                        </div>
                     </div>

                     <button className="save-btn">
                        Saqlash
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </main >
   )
}

export default Datas