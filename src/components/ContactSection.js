import React from 'react';
import ContactInfoItem from './ContactInfoItem';
import { SiGmail } from 'react-icons/si';
import { TiLocation } from 'react-icons/ti';
import { RiInstagramFill } from 'react-icons/ri';
import ContactForm from './ContactForm';
import '../styles/ContactSection.css'

export default function ContactSection() {
  return (
    <div>
        <div className='container'>
            <h4>Get in touch</h4>
            <h1>Contact</h1>
            <div className='contactsection-wrapper'>
                <div className='left'>
                    <ContactInfoItem icon={<SiGmail/>}
                    text='jonathanortiz1007@gmail.com'
                    />
                    <ContactInfoItem icon={<RiInstagramFill/>}
                    text='Jonyboy.noob'
                    />
                    <ContactInfoItem icon={<TiLocation/>}
                    text='New York City, NY'
                    />
                </div>
                <div className='right'>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  )
}
