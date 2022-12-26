import React, { useState } from 'react'
import './main.scss'
import 'App.scss'
import { Radio } from 'antd';

function MainPage() {
   const [value, setValue] = useState(1);
   const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
   };

   return (
      <main className='main-content'>
         <section className='first-section'>
            <div className="left-section">
               <div className="heading">
                  Kengaytirilgan qidiruv
               </div>
               <div className="left-content-container">
                  <span className='span'>Kim kerakligini tanlang</span>
                  {/* <input type="radio" name="radio" id="radio" value={'gid'} />
                  <label htmlFor="gid"></label>
                  <input type="radio" name="radio" id="radio" value={'tarjimon'} />
                  <label htmlFor="tarjimon"></label> */}
                  <Radio.Group onChange={onChange} value={value}>
                     <Radio value={1}>Gid</Radio>
                     <Radio value={2}>Tarjimon</Radio>
                  </Radio.Group>
               </div>
            </div>
            <div className="right-section">

            </div>
         </section>
      </main>
   )
}

export default MainPage