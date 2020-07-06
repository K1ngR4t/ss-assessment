import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Home = () => {
  return (
  <Link to="/userlist" style={{ textDecoration: 'none' }}>
    <HomeContainer>
      <Button 
        initial={{ x: '-100vw' }} 
        animate={{x: 0}} 
        transition={{ duration: 0.5, type: 'spring' }} 
        whileHover={{ scale: 1.3 }} >
          Browse Livestock
      </Button>
    </HomeContainer>
  </Link>  
  )
}

// Styles
const HomeContainer = styled(motion.div)`
  width: 100%;
  height: 80vh;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Button = styled(motion.div)`
  border: 2px solid #fff;
  background-color: transparent;
  padding: 20px;
  border-radius: 50px;
  color: #fff;
  font-size: 18px;
  font-family: 'Lato';
  cursor: pointer;
  text-decoration: none;
  outline: none;
`


export default Home
