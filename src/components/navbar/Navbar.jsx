import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineMenuUnfold, AiFillCloseCircle  } from "react-icons/ai";
import logo from '../../Assets/logo.png';


const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
        <p><a href="#home">Home</a></p>
        <p><a href="#gpt3">About GPT</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
        </div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        
        <div className='gpt3__navbar-menu'>
          {toogleMenu ? <AiFillCloseCircle color='#fff' size={30}
           onClick={()=> setToogleMenu(false)}/>: <AiOutlineMenuUnfold color='#fff' size={30}
          onClick={()=> setToogleMenu(true)}/>}
          {toogleMenu && (
            <div className='gpt3__navbar-menu_container slide-fwd-center '>
              <div className='gpt3__navbar-menu_container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#gpt3">About GPT</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
              <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
              </div>
             
                </div> 
              </div>
          )}
        </div>
      
    </div>
  )
}

export default Navbar