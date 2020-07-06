import React from 'react'
import SingleUser from '../Components/SingleUser'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const UserList = ({ setCurrentUser, users, isLoading }) => {
  
  // Display grid list of returned users
  return isLoading ? <FontAwesome style={{ color: '#fff', textAlign: 'center', fontSize: '50px', position: 'absolute', top: '50%', left: '44%' }} name="spinner" spin /> : <div>
    <PageHeading>Guaranteed Free-range Humans from Across The Globe!</PageHeading>
  
      <ListContainer>
        {users.map(user => (
            <SingleUser setCurrentUser={setCurrentUser} user={user} key={user.login.uuid}/>
        ))}
        
      </ListContainer>
    </div>
  
}

// Styles
const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
`

const PageHeading = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Lato-light;
`

export default UserList
