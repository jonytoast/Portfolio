import React from 'react';
import { SiGmail } from 'react-icons/si';
import PText from './PText';
import '../styles/ContactInfoItem.css';

export default function ContactInfoItem({
    icon = <SiGmail />,
    text = 'this is an info',
}) {
  return (
    <div className='bar-style'>
        <div className='icon'>{icon}</div>
        <div className='info'>
            <PText>{text}</PText>
        </div>
    </div>
  )
}
