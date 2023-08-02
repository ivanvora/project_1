import React from 'react'
import {LogoPic} from './logo-pic'
import './index.css';

export function Logo({showTitle}) {

  return (
    <div className='logo-body' >
        <LogoPic/>
        {showTitle? <div> SUN! </div>:null }
    </div>
  )
}
