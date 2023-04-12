import React from 'react'
import Header from './components/Header'
import User from './components/User'
import About from './components/About'
import { useSelector } from 'react-redux'
import Sigin from './components/Modals/Sigin'
const App = () => {
  const user = useSelector(state => state.auth.user)
  console.log(user)
  return (
    <div>
      {JSON.stringify(user) === '{}' &&
        <Sigin />}
      <Header />
      <User />
      <About />
    </div>
  )
}

export default App
