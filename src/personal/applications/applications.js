import React, { useState } from 'react'
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AiOutlineSearch } from 'react-icons/ai'
import notFoundImg from '../../assets/images/data-not-found.svg'
import './application.scss'
import '../../App.scss'
import { countries, cities } from 'constants/countries';
import axios from 'axios';

function Applications({ onTabSwitch }) {
   const [country, setCountry] = useState('O`zbekiston')
   const [city, setCity] = useState('')
   const [dateAfter, setDateAfter] = useState('')
   const [dateBefore, setDateBefore] = useState('')

   const onCoutry = (value) => {
      setCountry(value)
   };

   const onCity = (value) => {
      setCity(value)
      console.log(cities.indexOf(value));
   };

   const onSearch = (value) => {
      console.log('search:', value);
   };

   const onAfterDate = (value) => {
      setDateAfter(value.format('YYYY-MM-DD'))
   }

   const onBeforeDate = (value) => {
      setDateBefore(value.format('YYYY-MM-DD'))
   }

   async function fetchData() {
      return await axios.get(`${process.env.REACT_APP_API_ROOT}/api/users/self/application/?country=1&city=1&date_after=${dateAfter}&date_before=${dateBefore}`, {
         headers: {
            "Content-type": "application/json",
            Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
         }
      }).then((res) => {
         // setPersonalInfo(res?.data)
         console.log(res?.data);
      })
   }

   dayjs.extend(customParseFormat);
   const { RangePicker } = DatePicker;
   const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

   return (
      <main className="main-content">
         <div className="tab-container">
            <button onClick={() => onTabSwitch('verify')}>Profilni ko'rish</button>
            <button onClick={() => onTabSwitch('applications')} style={{ backgroundColor: '#326A32', color: 'white' }}>Arizalarim</button>
            <button onClick={() => onTabSwitch('data')}>Ma'lumotlarni tahrirlash</button>
            <button onClick={() => onTabSwitch('settings')}>Profil sozlamalari</button>
         </div>
         <div className="body-container container">
            <div className="input-wrapper">
               <div className="select-wrapper">
                  <div className="single-select">
                     <Select
                        showSearch
                        placeholder="Davlatni tanlang"
                        optionFilterProp="children"
                        onChange={onCoutry}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={countries}
                     // defaultValue={'o`zbekiston'}
                     />
                  </div>

                  <div className="single-select">
                     <Select
                        showSearch
                        placeholder="Shaharni tanlang"
                        optionFilterProp="children"
                        onChange={onCity}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={cities}
                     />
                  </div>
               </div>

               <div className="just-wrap">

                  <div className="space-wrapper">
                     <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])}
                           format={dateFormatList}
                           onChange={onAfterDate} />
                     </Space>
                  </div>
                  <div className="space-wrapper2">
                     <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])}
                           format={dateFormatList}
                           onChange={onBeforeDate} />
                     </Space>
                  </div>

                  <div className="button-wrapper">
                     <button onClick={fetchData} ><AiOutlineSearch /> Qidiruv</button>
                  </div>
               </div>

            </div>
            <div className="not-found-wrapper">
               <img src={notFoundImg} alt="img" />
               <span>M'alumot topilmadi</span>
            </div>
         </div>
      </main >
   )
}

export default Applications