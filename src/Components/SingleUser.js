import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { motion } from 'framer-motion'

const SingleUser = ({setCurrentUser, user }) => {

  // Single user card view displaying the user avatar, name and location
  return (
    
      <UserItem 
        initial={{ x: '-100vw', opacity: 0.8 }} 
        animate={{ x: 0 }} 
        transition={{ duration: 0.5, type: 'spring' }} 
        whileHover={{ scale: 1.2, opacity: 1 }}
        onClick={() => setCurrentUser(user)}>
        <Avatar src={user.picture.thumbnail} alt=''/>
        <div>
          <UserName>{user.name.first} {user.name.last}</UserName>
          <UserLocation>
            <FontAwesome
              name="map-marker"
              style={{ marginRight: '5px' }}
            />
            {user.location.city}, {user.location.country}
          </UserLocation>
        </div>
      </UserItem>
    
  )
  
}

// Styles
const UserItem = styled(motion.li)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  padding: 15px 10px;
  margin: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  width: 29%;
  cursor: pointer;
  -webkit-box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.24);
  -moz-box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.24);
  box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.24);
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`

const UserName = styled.h4`
  margin: 0;
`

const UserLocation = styled.small`
  color: #acacac;
  font-size: 11px;
  text-transform: uppercase;
`

export default SingleUser
