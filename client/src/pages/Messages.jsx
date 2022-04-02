import React from 'react'
import styled from "styled-components"

function Messages() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-25'>
          <ul>
            <li>
              <p>User email</p>
              <p>User Username</p>
            </li>
          </ul>
        </div>
        <div className='col'>
          chat box
        </div>
      </div>
    </div>
  )
}

export default Messages;

