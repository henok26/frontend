import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
{/* <Header/>


<Search/>
 */}
<Footer/>

<Outlet/>
<Header/>



    </div>
  )
}

export default Main