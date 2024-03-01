import React from 'react';
import './Blog.css';
import { Article } from '../../components/ref';
import blogimg1 from '../../Assets/blog1.png';
import blogimg2 from '../../Assets/blog2.png';
import blogimg3 from '../../Assets/blog3.png';
import blogimg4 from '../../Assets/blog4.png';
import blogimg5 from '../../Assets/blog5.png';

const Blog = () => {
  return (
    <div className='gpt3__blog section__pading' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
           Read the Blog Section 
        </h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blogimg1} date='Aug 15, 2022' title='Open AI is the future.Lets explore how is it?'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blogimg2} date='Aug 15, 2022' title='Open AI is the future.Lets explore how is it?'/>
          <Article imgUrl={blogimg3} date='Aug 15, 2022' title='Open AI is the future.Lets explore how is it?'/>
          <Article imgUrl={blogimg4} date='Aug 15, 2022' title='Open AI is the future.Lets explore how is it?'/>
          <Article imgUrl={blogimg5} date='Aug 15, 2022' title='Open AI is the future.Lets explore how is it?'/>
          </div>
      </div>
    </div>
  )
}

export default Blog