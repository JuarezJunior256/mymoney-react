import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <nav className='navbar navbar-light bg-light'>
          <Link className='navbar-brand' to='/'>MyMoney</Link>
        </nav>
    )
}

export default Header