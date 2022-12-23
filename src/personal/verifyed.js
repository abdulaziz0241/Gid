import React, { useEffect, useState } from "react";
import "../App.scss";
import "./verify.scss";
import personImg from 'assets/images/person.png'
import locationImg from 'assets/images/location.svg'
import dataImg from 'assets/images/data.svg'
import axios from 'axios'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { InputComponent } from "components/input";



function Verifyed({ onTabSwitch }) {
   const [value, setValue] = React.useState(0);
   const [info, setInfo] = useState({
      name: '',
      surname: '',
      middlename: '',
      phone_number: ''
   })
   const [personalInfo, setPersonalInfo] = useState(undefined)

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };


   // const handleInput = (e) => {
   //    setInfo(prevState => {
   //       return {
   //          ...prevState,
   //          [e.target.name]: e.target.value
   //       }
   //    })
   // }

   async function fetchUserData() {
      return await axios.get(`${process.env.REACT_APP_API_ROOT}/api/users/edit/`, {
         headers: {
            "Content-type": "application/json",
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
         }

      }).then((res) => {
         // console.log(res?.data, 'res');
         setPersonalInfo(res?.data)
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
      fetchUserData()
   }, [])

   const { name, surname, middlename, phone_number } = info
   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')} style={{ backgroundColor: '#326A32', color: 'white' }}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')}>Profil sozlamalari</button>
         </div>

         {/* <div className="tabs-box">

            <Box className="tabs-container" >
               <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                  className="tabs-wrapper"
                  TabIndicatorProps={{
                     sx: {
                        backgroundColor: 'transparent'
                     },
                  }}

                  sx={{
                     "& button.Mui-selected": { backgroundColor: '#326A32', transition: '0.5s', color: 'red' },
                  }}
               >
                  <Tab onClick={() => onTabSwitch('verify')} label="Profilni ko'rish" />
                  <Tab onClick={() => onTabSwitch('applications')} label="Arizalarim" />
                  <Tab onClick={() => onTabSwitch('data')} label="Ma'lumotlarni tahrirlash" />
                  <Tab onClick={() => onTabSwitch('settings')} label="Profil sozlamalari" />
               </Tabs>
            </Box>
         </div > */}


         <div className="profile-container container">
            <img className="person-img" src={personalInfo?.image} alt="person-img" />
            <div className="person-body">
               <div className="person-title">
                  {personalInfo?.first_name + ' ' + personalInfo?.last_name}
               </div>
               <div className="person-icons">
                  <div className="location">
                     <img src={locationImg} alt="location" />
                     <span>{personalInfo?.country_name?.uz + ', ' + personalInfo?.city_name?.uz}</span>
                  </div>
                  <div className="data-icon">
                     <img src={dataImg} alt="location" />
                     <span>{personalInfo?.company}</span>
                  </div>
               </div>
            </div>
         </div>
         {/* <InputComponent name='name' value={name} onChange={handleInput} />
         <InputComponent name='surname' value={surname} onChange={handleInput} />
         <InputComponent name='middlename' value={middlename} onChange={handleInput} />
         <InputComponent name='phone_number' value={phone_number} onChange={handleInput} /> */}
         <ToastContainer />
      </main >
   );
}

export default Verifyed;
