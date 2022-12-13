import React from 'react'

function Settings({ onTabSwitch }) {
   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')} style={{ backgroundColor: '#326A32', color: 'white' }}>Profil sozlamalari</button>
         </div>
         setting
      </main >
   )
}

export default Settings