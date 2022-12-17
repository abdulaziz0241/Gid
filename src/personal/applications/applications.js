import React, { useState } from 'react'
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AiOutlineSearch } from 'react-icons/ai'
import notFoundImg from '../../assets/images/data-not-found.svg'

function Applications({ onTabSwitch }) {
   const country = [
      { label: '' },
      { label: 'Ozarbayjon' },
      { label: 'Armaniston' },
      { label: 'Belorussiya' },
      { label: 'Gruziya' },
      { label: 'Qozog`iston' },
      { label: 'Qirg`iziston' },
      { label: 'Rosiya' },
      { label: 'Tojikiston' },
      { label: 'Turkmaniston' },
      { label: 'Ukraina' },
   ];
   const onChange = (value) => {
      console.log(`${value}`);
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
         <div className="body-container">
            <div className="input-wrapper">
               <Select
                  showSearch
                  placeholder="Davlatni tanlang"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                     {
                        value: 'O`zbekiston',
                        label: 'O`zbekiston',
                     },
                     {
                        value: 'Armaniston',
                        label: 'Armaniston',
                     },
                     {
                        value: 'Belorussiya',
                        label: 'Belorussiya',
                     },
                     {
                        value: 'Gruziya',
                        label: 'Gruziya',
                     },
                     {
                        value: 'Qozog`iston',
                        label: 'Qozog`iston',
                     },
                     {
                        value: 'Qirg`iziston',
                        label: 'Qirg`iziston',
                     },
                     {
                        value: 'Rosiya',
                        label: 'Rosiya',
                     },
                     {
                        value: 'Tojikiston',
                        label: 'Tojikiston',
                     },
                     {
                        value: 'Turkmaniston',
                        label: 'Turkmaniston',
                     },
                     {
                        value: 'Ukraina',
                        label: 'Ukraina',
                     },
                  ]}
               />

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

               <Space direction="vertical" size={12}>
                  <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                  <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
               </Space>

               <button><AiOutlineSearch /> Qidiruv</button>

               {/* <img src={notFoundImg} alt="img" /> */}
            </div>
         </div>
      </main >
   )
}

export default Applications