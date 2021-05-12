import React, { useState, } from 'react';
import Navbar from '../components/navbar/navbar'
import Category from '../components/category/category'

function MainPage() {

const [show, setShow] = useState(true)

  return (
    <div className="page-container">
      <Navbar/>
      <div className='page-container__wrapper'>
      <div className='page-container__wrapper--form'>
         <button onClick={()=>setShow(!show)} className='page-container__wrapper--form--btn'>
           <i className="fas fa-sync-alt"></i>
         </button>          
      </div>
<Category show={show}/>
      </div>
    </div>
  );
}

export default MainPage;