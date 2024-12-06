import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import ProductPrev from '../component/ProductPrev'
import About from '../component/About'
import Cost from '../component/Cost'
import Footer from '../component/Footer'

function LandingPage() {
  return (
    <div className='landing-page'>
<<<<<<< HEAD
        <Navbar/>
=======
      {/* <div className="navbar" style={{position:'sticky'}}>
        <Navbar/>
      </div> */}
>>>>>>> 02b6f5e (update 6 des)
        <Hero/>
        <ProductPrev/>
        <About/>
        <Cost/>
        <Footer/>
    </div>
  )
}

export default LandingPage