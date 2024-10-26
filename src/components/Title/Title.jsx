/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Title.css'

function Title (props) {
  return (
    <div className='title'>
        <p>{props.subtitle}</p>
        <h2>
           {props.title}
        </h2>

    </div>
  )
}

export default Title