import React,{useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from 'react-router-dom'
const Header = () => {
    // State for our Toggle function
  const [click, setclick] = useState(false)

  // Function for Toggle 
  const handClick = () => {
    setclick (!click)
  }

  return (
    <div className="Header-Contain">
        <div className="Header-Contain-Wrapper">
          <h1>LOGO</h1>
          <div className="navs">
           <Link to='/'><li>HOME</li></Link> 
            <Link to='/shop'><li>SHOP</li></Link>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </div>

          <div className="Icon" onClick={handClick}>
            {click ? <FaTimes/> : (<FaBars/>)}
            {/* {click ? <div>Its my turn</div> : <h2>No, No... </h2>} */}   
          </div>
        </div>
      </div>
  )
}

export default Header