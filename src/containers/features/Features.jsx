import React from 'react';
import './Features.css';
import { Feature } from '../../components/ref';


const Features = () => {
  return (
   <div className='gpt3__features section__pading' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        You Need To Realize & Make It Happen
      </h1>
    </div>
    <div className='gpt3__features-container'>

        <div className='c_2-title'>
          <p className='p_title'>Versatility</p>
          <p className='p_text'>ChatGPT-3 is designed to be versatile and applicable to a wide range of natural language processing tasks. It can be used for chatbots.</p>
        </div>

        <div className='c_2-title'>
          <p className='p_title'>Massive Scale</p>
          <p className='p_text'>GPT-3.5 makes it one of the largest language models developed, allowing it intricate patterns and dependencies in language.</p>
        </div>

        <div className='c_2-title'>
          <p className='p_title'>Web-Based API Access</p>
          <p className='p_text'>OpenAI provides API access to GPT-3, allowing developers to integrate the model into their applications and services. </p>
        </div>

      

        <div className='c_2-title'>
        <p className='p_title'>Complex Task Handling</p>
        <p className='p_text'>Due to its generative nature and large-scale architecture, ChatGPT-3 can be used for creative content generation.</p>
        </div>
      
    </div>
   </div>
  )
}

export default Features