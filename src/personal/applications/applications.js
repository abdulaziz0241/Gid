import React, { useState } from 'react'
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AiOutlineSearch } from 'react-icons/ai'
import notFoundImg from '../../assets/images/data-not-found.svg'
import './application.scss'
import '../../App.scss'
import { countries } from 'constants/countries';


function Applications({ onTabSwitch }) {
   const country = [
      { label: 'O`zbekiston' }
   ];
   const onChange = (value) => {
      console.log(`${value}`);
      if (value) {
         console.log('ok');
      }
   };
   const onSearch = (value) => {
      console.log('search:', value);
   };

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
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={countries}
                     />
                  </div>

                  <div className="single-select">
                     <Select
                        showSearch
                        placeholder="Shaharni tanlang"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                           {
                              value: 'Toshkent',
                              label: 'Toshkent',
                           },
                           {
                              value: 'Farg`ona',
                              label: 'Farg`ona',
                           },
                           {
                              value: 'Andijon',
                              label: 'Andijon',
                           },
                           {
                              value: 'Buxoro',
                              label: 'Buxoro',
                           },
                           {
                              value: 'Jizzax',
                              label: 'Jizzax',
                           },
                           {
                              value: 'Qashqadaryo',
                              label: 'Qashqadaryo',
                           },
                           {
                              value: 'Navoiy',
                              label: 'Navoiy',
                           },
                           {
                              value: 'Namangan',
                              label: 'Namangan',
                           },
                           {
                              value: 'Samarqand',
                              label: 'Samarqand',
                           },
                           {
                              value: 'Surxondaryo',
                              label: 'Surxondaryo',
                           },
                           {
                              value: 'Sirdaryo',
                              label: 'Sirdaryo',
                           },
                           {
                              value: 'Shahrisabz',
                              label: 'Shahrisabz',
                           },
                           {
                              value: 'Toshkent viloyati',
                              label: 'Toshkent viloyati',
                           },
                           {
                              value: 'Xorazm',
                              label: 'Xorazm',
                           },
                           {
                              value: 'Qoraqalpog`iston Respublikasi',
                              label: 'Qoraqalpog`iston Respublikasi',
                           },
                        ]}
                     />
                  </div>
               </div>

               <div className="just-wrap">

                  <div className="space-wrapper">
                     <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                     </Space>
                  </div>
                  <div className="space-wrapper2">
                     <Space direction="vertical" size={12}>
                        <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                     </Space>
                  </div>

                  <div className="button-wrapper">
                     <button ><AiOutlineSearch /> Qidiruv</button>
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