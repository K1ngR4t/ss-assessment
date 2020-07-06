import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import './App.css';
import axios from 'axios'
import swal2 from 'sweetalert2'
import styled from 'styled-components'
import Header from './Components/Header'
import Home from './Routes/Home'
import UserList from './Routes/UserList'
import UserDetail from './Routes/UserDetail'


const App = () => {

  // Set up app state
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState([])

  // Get selected user before loading user detail page
  const setCurrentUser = (user) => {
    setSelectedUser(user)
    history.push("/userdetail")
  }

  // API call to get list of users
  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get('https://randomuser.me/api/?results=50').catch((error) => {
        swal2.fire({
          icon: 'error',
          title: 'Something went wrong...',
          text: `${error}`
        })
        console.warn('There was an error : ', error)
      })
      result ? setUsers(result.data.results) : console.log('no data loaded')
      setIsLoading(false)
    }
    getUsers()
  }, [])

  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/userlist">
            <UserList setCurrentUser={setCurrentUser} users={users} isLoading={isLoading}/>
          </Route>  
          <Route path="/userdetail">
            <UserDetail user={selectedUser}/>
          </Route>  
        </Switch>
      </Container>
    </div>
  );
}

// Styles
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export default App;
