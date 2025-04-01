import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Profile Photo</h2>
      <div class ="profile_photo">
        <img src="./assets/profile.svg"/>
        <div class = "profile_button">
          <Button text = 'Upload Photo'/>
          <Button text = 'remove'/>
        </div>
      </div>
      <div class = "user_details">
        <h2>User Details</h2>
        <div class = "container">
          <Input/>
          <Input/>
        </div>
        <Input/>
        <Input/>
        <Input/>
        <div class = "buttons">
          <Button text = "Back"/> 
          <Button text = "Continue"/> 
        </div>
      </div>
    </>
  )
}

export default App
