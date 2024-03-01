import React from 'react';
import './Possibility.css';
import PImage from '../../Assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__pading' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={PImage} alt="possibility" />
      </div>

      <div className='gpt3__possibility-content'>
        <h3>Get started For Early Access.</h3>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination.</h1>
        <p>Due to its generative nature and large-scale architecture, ChatGPT-3 can be used for creative content generation, such as writing poetry, stories, or other forms of creative text.</p>
        <h4>Get started For Early Access.</h4>
      </div>
    </div>
  )
}

export default Possibility