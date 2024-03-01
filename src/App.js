
import './App.css';
import { Brand, Cta, Navbar} from './components/ref';
import {Blog, ChatGPT3, Features ,Footer, Header, Possibility } from './containers/ref';

function App() {
  return (
  <div className='App'>
    <div className='gradient_bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <ChatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
  </div>
  )
}

export default App;
