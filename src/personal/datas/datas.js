import React from 'react'

function Datas({ onTabSwitch }) {
   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')} style={{ backgroundColor: '#326A32', color: 'white' }}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')}>Profil sozlamalari</button>
         </div>
         data
      </main >
   )
}

export default Datas