import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Search from './Search' 
const Main = () => {
  return (
    <div>
{/* <Header/>

<Filter/>
<Search/>
 */}
<Footer/>
<Outlet/>
<Header/>
<h1>Hello</h1>

    </div>
  )
}

export default Main