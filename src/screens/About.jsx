import React from 'react'
import about from '../img/about1.jpg'

const About = () => {
  return (
    <>
    <div className='container-fluid m-0 p-0'>
      <div className='text-head'>
        <h1 className='about-head'>ABOUT US</h1>
      </div>
      <img src={about} alt="about" width="100%" height="20%" className='about'/>
    </div>
    <div className='container'>
      <div className='text-center mt-4'>
        <h3>ABOUT US</h3>
        <p>Akssai believes in solving business issues for organizations. It has a very strong team of decades long experienced professionals CA, CS, CMA, Advocates, MBA, IT professionals, Retd. Bank officers and graduates. The team has worked in MNC’s, Big4’s, Govt companies and carry rich insights to navigate through challenging scenarios. The combined talent pool is available to help solving any business issues be it Finance related, IT related, tax related, legal issues, compliances, licensing, advisory, HR issues or any other domain of running a business. We have helped several foreign companies tap into the Indian markets over the years.</p>
        <h3 className='mt-4'>OUR VISSION</h3>
        <p>Read Our Global Annual Report, meet our global leadership team, discover our approach to corporate responsibility, our commitment to diversity and inclusion, and more.</p>
        <button class="btn btn-outline-success btn-style btn-style1  w-25 mt-4" type="submit">FOLLOW US ON TWITTER</button>
      </div>
      </div>
    </>
  )
}

export default About
