import React, { useState, } from 'react';
import Navbar from '../components/navbar/navbar'
import Category from '../components/category/category'
import './styles.css'

function MainPage() {

const [show, setShow] = useState(true)

  return (
    <div className="main_page-container">
      <Navbar/>
      <div className='main_page-wrapper'>
      <div className='main_form-wrapper'>
         <button onClick={()=>setShow(!show)} className='main_form-btn'>
           <i class="fas fa-sync-alt"></i>
         </button>          
      </div>
<Category show={show}/>
      </div>
    </div>
  );
}

export default MainPage;