import React from "react";
import "../App.scss";
import "./verify.scss";
import personImg from '.././assets/images/person.png'
import locationImg from '.././assets/images/location.svg'
import dataImg from '.././assets/images/data.svg'

function Verifyed({ onTabSwitch }) {
   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')} style={{ backgroundColor: '#326A32', color: 'white' }}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')}>Profil sozlamalari</button>
         </div>
         <div className="profile-container container">
            <img className="person-img" src={personImg} alt="person-img" />
            <div className="person-body">
               <div className="person-title">
                  Abdulaziz Keldiboyev
               </div>
               <div className="person-icons">
                  <div className="location">
                     <img src={locationImg} alt="location" />
                     <span>undefind, undefind</span>
                  </div>
                  <div className="data-icon">
                     <img src={dataImg} alt="location" />
                     <span>no data</span>
                  </div>
               </div>
            </div>
         </div>
      </main >
   );
}

export default Verifyed;
