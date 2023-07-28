import React, { useContext } from 'react'
import { AuthContext } from './CONTEXT/AuthContext'
import PracticeNavbar from './PracticeNavbar';

const PracticeHome = () => {

  const {state} = useContext(AuthContext);

  return (
    <div>
      <PracticeNavbar/>
        <h1 style={{marginLeft:"700px", marginTop:"50px"}}>Home of {state?.user?.name}</h1>
        <img style={{marginLeft:"330px", marginTop:"50px"}} src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'/>
    </div>
  )
}

export default PracticeHome