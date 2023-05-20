import React from 'react';
import '../styles/HeroSection.css';
import Gt3RsImg from '../assets/gt3rs.png';
import PText from './PText';
import { Link } from 'react-router-dom';
import '../styles/Button.css';
import ScrollDownArrow from '../assets/scroll-down-arrow.svg';
import { RiSendPlaneFill } from 'react-icons/ri';

export default function HeroSection() {
  return (
    <div className='hero'>
        <div className='container'>
            <h1 className='hero-heading'>
                <span>Hello, This is</span>
                <span className='hero-name'>Jonathan Ortiz</span>
            </h1>
            <div className='hero-img'>
                <img src={Gt3RsImg} alt=''/>
            </div>
            <div className='hero-info'>
                <PText>I'm a front-end dev I love makeing 
                    desgins doing plumbing and driving cars
                </PText>
                <Link className='button' to='/contact'>
                    Say Hello 
                </Link> 
            </div>
            <div className='hero-scroll'>
                <p>Scroll</p>
                <img src={ScrollDownArrow}/>
            </div>
        </div>
    </div>
  )
}
