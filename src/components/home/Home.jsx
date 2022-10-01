import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import pg1_bg_1 from '../../assets/pg1_bg-1.svg';
import pg1_bg_2 from '../../assets/pg1_bg-2.svg';
import pg1_bg_3 from '../../assets/pg1_bg-3.svg';
import pg1_bg_4 from '../../assets/pg1_bg-4.svg';
import pg1_bg_5 from '../../assets/pg1_bg-5.svg';
import pg1_bg_6 from '../../assets/pg1_bg-6.svg';
import pg1_bg_7 from '../../assets/pg1_bg-7.svg';
import pg1_bg_8 from '../../assets/pg1_bg-8.svg';
import footer_bg from '../../assets/footer-bg.svg';

function Home() {
  return (
    <>
      <div className='home'>
        <img className='pg1_bg_1' src={pg1_bg_1} />
        <img className='pg1_bg_2' src={pg1_bg_2} />
        <img className='pg1_bg_3' src={pg1_bg_3} />
        <img className='pg1_bg_4' src={pg1_bg_4} />
        <img className='pg1_bg_5' src={pg1_bg_5} />
        <img className='pg1_bg_6' src={pg1_bg_6} />
        <img className='pg1_bg_7' src={pg1_bg_7} />
        <img className='pg1_bg_8' src={pg1_bg_8} />
        <div className="home_inner">
          <span className='headline'>
            Convert text to emoji and turn words to emoticons
          </span>
          <span className='description'>
            Make your message feel special and send it to your friend or impress your crush.
          </span>
          <Link style={{textDecoration: 'none'}} to='/translate'><div className="start-btn"><span>Get started</span><i className="fa-solid fa-arrow-right"></i></div></Link>
        </div>
      </div>
      <div className='footer'><span>© 2022 TEMOJI | <a target="_blank" href="https://millborneportfolio.netlify.app/">Millborne Galamiton</a> All rights reserved.</span></div>
    </>
  )
}

export default Home