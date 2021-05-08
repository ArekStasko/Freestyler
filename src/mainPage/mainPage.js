import React, { useState, } from 'react';
import Navbar from '../components/navbar/navbar'
import Text from '../components/text/text'
import Graphic from '../components/graphic/graphic'
import './styles.css'

function MainPage() {

const [show, setShow] = useState()

const handleSubmit = (e) => {
    setShow(!show)
    e.preventDefault()
    console.log(show)
}

  return (
    <div className="main_page-container">
      <Navbar/>
      <div className='main_page-wrapper'>
      <form className='main_form-wrapper' onSubmit={handleSubmit}>
         <button className='main_form-btn' type='submit'>
           <i class="fas fa-sync-alt"></i>
         </button>          
      </form>
      {
          show ? (
<Text/>
          ) : (
<Graphic/>
          )
      }
      </div>
    </div>
  );
}

export default MainPage;