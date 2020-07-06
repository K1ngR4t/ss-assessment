import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import swal2 from 'sweetalert2'
import { motion } from 'framer-motion'
import { useHistory } from "react-router-dom";

const UserDetail = ({ user }) => {

  // Convert returned to readable string
  const date = user.registered.date.toLocaleString().substring(0, 10)

  // Allow react router to return to user list
  const history = useHistory()

  // Add your chosen human to you cart
  const addHuman = () => {
    swal2.fire({
      title: 'Are you sure?',
      text: `You won't be able to return ${user.name.first}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, I want ${user.name.first}!`
    }).then((result) => {
      if (result.value) {
        swal2.fire(
          'Congratulations!',
          'Your human has been sedated and stuffed into a shipping container and will arrive at your door in 3 - 5 working days.',
          'success'
        )
        history.push("/userlist")
      }
    })
  }

  // Display single user profile in detail
  return (
    <DetailContainer 
      initial={{ x: '+100vw', opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 1, type: 'spring', stiffness: 85 }} >
      <Avatar src={user.picture.large} alt='' />
      <PrimaryInfo>
        <h2>{user.name.first} {user.name.last} ({user.dob.age})</h2>
        <h3 style={{ color: '#666', textTransform: 'uppercase', fontSize: '14px' }}>
          <FontAwesome
            name="map-marker"
            style={{ marginRight: '5px' }}
          />
          {user.location.city}, {user.location.country}
        </h3>
      </PrimaryInfo>
      <SecondaryInfo>
        <h4 style={{ margin: '5px' }}>
          <FontAwesome
            name="envelope-o"
            style={{ marginRight: '5px', padding: 0 }}
          />
          {user.email}
        </h4>
        <h4 style={{ margin: '5px' }}>
          <FontAwesome
            name="phone"
            style={{ marginRight: '5px' }}
          />
          {user.phone}
        </h4>
        <h5 style={{ textTransform: 'uppercase', color: '#666', fontSize: '12px', margin: '10px' }}>Dewormed and vaccinated : {date}</h5>
      
        <Button  
          transition={{ duration: 0.5, type: 'spring' }} 
          whileHover={{ scale: 1.1, boxShadow: '8px 12px 0px -7px rgba(0,0,0,0.09)' }} 
          onClick={() => addHuman()}>
          <FontAwesome
            name="cart-plus"
            style={{ marginRight: '5px' }}
          />
          Add {user.name.first} to Cart
        </Button>
      </SecondaryInfo>

    </DetailContainer>
  )
}

// Styles
const DetailContainer = styled(motion.div)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 100px auto 10px auto;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 13px 14px 0px -7px rgba(0,0,0,0.09);
  -moz-box-shadow: 13px 14px 0px -7px rgba(0,0,0,0.09);
  box-shadow: 13px 14px 0px -7px rgba(0,0,0,0.09);
`

const Avatar = styled.img`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 5px solid #fff;
  -webkit-box-shadow: 0px 0px 0px 5px rgba(220,68,69,1);
  -moz-box-shadow: 0px 0px 0px 5px rgba(220,68,69,1);
  box-shadow: 0px 0px 0px 5px rgba(220,68,69,1);
`

const Button = styled(motion.a)`
  border: 2px solid red;
  background-color: #fff;
  padding: 20px;
  margin-top: 40px;
  border-radius: 50px;
  color: red;
  font-size: 18px;
  font-family: 'Lato';
  cursor: pointer;
`
const PrimaryInfo = styled.div`
  background-color: #f2f2f2;
  padding: 100px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

const SecondaryInfo = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

export default UserDetail
