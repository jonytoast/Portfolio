import React from 'react';
import '../styles/PText.css';

export default function PText(props) {
  return (
    <div className='p-text'>
        <p>{props.children}</p>
    </div>
  )
}
