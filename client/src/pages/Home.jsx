import React from 'react'
import home from '../images/home.svg'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='home-container'>
      <div className="row">
        <div className="col col-1">
          <h1>Welcome to Babble!</h1>
          <p className='bold-text'>A new and simple way to communicate!</p>
          <p>Babble helps you connect with collegues or friends from anywhere! You can use it for business or personal use.</p>
          <Link to='/signup'>
          <button className='btn'>
            Register
          </button>
          </Link>
        </div>
        <div className="col">
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home