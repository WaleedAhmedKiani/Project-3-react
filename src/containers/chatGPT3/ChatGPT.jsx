import React from 'react';
import './ChatGPT.css';
import { Feature } from '../../components/ref';

const ChatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='gpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={'What is GPT-3'} text={'ChatGPT is a language model developed by OpenAI based on the GPT-3.5 architecture. GPT stands for "Generative Pre-trained Transformer," and it represents a state-of-the-art natural language processing model.'}/>
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are beyond Your imagination</h1>
        
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title={'Chatbots'} text={'Chatbots are computer programs designed to simulate conversation with users, especially through text interfaces. They use natural language processing (NLP) and machine learning algorithms to understand and respond to user queries or prompts. Chatbots can be found in various applications and platforms, serving different purposes'}/>
        <Feature title={'Education'} text={'OpenAI may release user guides, tutorials, or specific documentation to help users understand how to get the most out of ChatGPT. These resources can provide insights into best practices, input techniques, and potential use cases.'}/>
        <Feature title={'Knowledgebase'} text={'For students learning programming or computer science, ChatGPT can answer coding-related queries, provide explanations for algorithms, and assist with problem-solving.'}/>
       
      </div>
    </div>
  )
}

export default ChatGPT
