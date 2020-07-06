import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { motion } from 'framer-motion'
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory()
  const goHome = () => {
    history.push("/home")
  }

  return (
    <HeaderContainer  
      initial={{y: -250}}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
    >
      <div style={{ cursor: 'pointer', display: 'inline-block' }} onClick={() => goHome()}>
        <FontAwesome
          name="user-plus"
          size="2x"
          style={{ marginRight: '5px' }}
        />
        <span>Own-a-Human<small style={{ fontSize: '10px' }}>.com</small></span>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(motion.h1)`
  color: #fff;
  font-size: 23px;
  font-family: 'Bio';
  border-bottom: 1px solid #fff;
`

export default Header
