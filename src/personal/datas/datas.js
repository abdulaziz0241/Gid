import React, { useEffect, useState } from 'react'
import personImg from '../../assets/images/person.png'
import './data.scss'
import { AiOutlineCamera } from 'react-icons/ai'
import axios from 'axios'
import { toast } from 'react-toastify'

function Datas({ onTabSwitch }) {
   const [userInfo, setUserInfo] = useState(undefined)
   const [editValue, setEditValue] = useState({
      name: '',
      surname: '',
      company: '',
      country: '',
      city: 'Toshkent',
      img: ''
   })

   console.log(editValue, 'img');
   async function fetchUserDatas() {
      return await axios.get(`${process.env.REACT_APP_API_ROOT}/api/users/edit/`, {
         headers: {
            "Content-type": "application/json",
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
         }

      }).then((res) => {
         setUserInfo(res?.data)
         console.log(res.data, 'res');
      }).catch(error => {
         toast(error?.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
         })
      })
   }

   useEffect(() => {
      fetchUserDatas()
   }, [])

   async function editUserDatas(e) {
      e.preventDefault()
      console.log(editValue, 'value');
      return await axios.put(`${process.env.REACT_APP_API_ROOT}/api/users/edit/`, editValue).then((response) => {
         // setUserInfo(res?.data)
         console.log(response, 'response');
      }).catch((err) => {
         console.log(err);
      })
   }


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
                     <input onChange={(e) => setEditValue({ ...editValue, img: e.target.files })} className='fileinp' type={'file'} title={'rasm tanlang'} />
                  </div>
               </div>

               <div className="inputs-container">
                  <form onSubmit={editUserDatas}>
                     <div className="name-username-wrapper">
                        <div className="name-wrapper">
                           <label htmlFor="name">Ism</label>
                           <input onChange={(e) => setEditValue({ ...editValue, name: e.target.value })} defaultValue={userInfo?.first_name} type="text" name="name" id="name" placeholder='Ismingizni yozing' />
                        </div>
                        <div className="surname-wrapper">
                           <label htmlFor="surname">Familiya</label>
                           <input onChange={(e) => setEditValue({ ...editValue, surname: e.target.value })} defaultValue={userInfo?.last_name} type="text" name="surname" id="surname" placeholder='Familiyangizni yozing' />
                        </div>
                     </div>
                     <div className="company-wrapper">
                        <label htmlFor="company">Kompaniya</label>
                        <input onChange={(e) => setEditValue({ ...editValue, company: e.target.value })} defaultValue={userInfo?.company} type="text" name="company" id="company" placeholder='Kompaniya nomi' />
                     </div>

                     <div className="continent">
                        <div className="country">
                           <label htmlFor="countryname">Davlat</label>
                           <input onChange={(e) => setEditValue({ ...editValue, country: e.target.value })} defaultValue={userInfo?.country_name?.uz} type="text" name="countryname" list="countryname" placeholder="O'zbekiston" />
                           <datalist id="countryname">
                              <option value="O'zbekiston" />
                              {/* <option value="Rossiya" /> */}
                           </datalist>
                        </div>
                        <div className="City">
                           <label htmlFor="Cityname">Shahar</label>
                           <input onChange={(e) => setEditValue({ ...editValue, city: e.target.value })} type="text" name="Cityname" list="Cityname" placeholder="Tashkent" />
                           <datalist id="Cityname">
                              <option value="Tashkent" />
                              <option value="Samarqand" />
                           </datalist>
                        </div>
                     </div>

                     <button type='submit' className="save-btn">
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