import React from 'react';
import './Header.css';
import people from '../../Assets/people.png';
import Ai from '../../Assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__pading' id='home'>
      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>
          ChatGPT is a language model developed 
        by OpenAI based on the GPT-3.5 architecture.</h1>
        <p>OpenAI has implemented safety and ethical measures in the deployment of ChatGPT,
           including moderation to filter out inappropriate content. Users are encouraged to provide
            feedback on problematic outputs to improve the system</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Email Address'/>
          <button type='button'> Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people_images" />
          <p>1,7000 people requested access a visit last 24 hours</p>
        </div>
        </div>
        
        <div className='gpt3__header-image'>
          <img src={Ai} alt="ai" />
        </div>
      
       
    </div>
  )
}

export default Header