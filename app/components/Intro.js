import React from 'react';
import styles from '../styles/intro.scss';

export default function Intro(props) {
    return (
        <div className='intro'>
          <h1 className='title'>Hi, I'm Princess</h1>
          <div className='section'>
            <p>I'm a software developer, Oracle Certified Associate, 3x codeschool alumna, and highschooler. You can find me on twitter and github @psamp. Some things I'm learning right now include: <a href='http://vapor.codes/' target='_blank'>Vapor</a>, <a href='https://facebook.github.io/react/'>React</a>, and <a href='https://github.com/typelift/SwiftCheck'>SwiftCheck</a>.</p>
            </div>
            <div className='section'></div>
        </div>
    )
}
