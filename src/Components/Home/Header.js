import React from 'react'
import Search from './Search'
const Header = () => {
  return (
    <>
      <nav className='header row sticky-top'>
<img src='public/assets/logo.png/ alt="logo' className='logo'/> 
      
      <div className='search-filter'>
      <Search/>
      </div>
      <span className="material-symbols-outlined web_logo">
account_circle
</span>
</nav>

    </>
  )
}

export default Header