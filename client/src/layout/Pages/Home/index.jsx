import React from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Navbar'
import WelcomeSection from '../../../components/WelcomeSection'
import OurProducts from '../../../components/OurProducts'
import WinesFor from '../../../components/WinesFor'
import UsersSection from '../../../components/UsersSection'
import BlogSection from '../../../components/BlogSection'
import Footer from '../../Footer'

const Home = () => {
  return (
    <div>
     <Helmet>
        <title>Home</title>
     </Helmet>

     <Navbar></Navbar>


     <main>
      <WelcomeSection></WelcomeSection>
      <OurProducts></OurProducts>
      <WinesFor></WinesFor>
      <UsersSection></UsersSection>
      <BlogSection></BlogSection>
     </main>
     <Footer></Footer>

    </div>
  )
}

export default Home