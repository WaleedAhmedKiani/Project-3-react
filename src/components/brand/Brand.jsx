import React from 'react';
import './Brand.css';
import Brand1 from '../../Assets/atlassian.png';
import Brand2 from '../../Assets/dropbox.png';
import Brand3 from '../../Assets/google.png';
import Brand4 from '../../Assets/shopify.png';
import Brand5 from '../../Assets/slack.png';

const Brand = () => {
  return (
    <div className='gpt3__brand section__pading'>
      <div>
        <img src={Brand2} alt="brand2" />
      </div>

      <div>
        <img src={Brand1} alt="brand1" />
      </div>

      <div>
        <img src={Brand5} alt="brand5" />
      </div>

      <div>
        <img src={Brand4} alt="brand4" />
      </div>

      <div>
        <img src={Brand3} alt="brand3" />
      </div>
    </div>
  )
}

export default Brand