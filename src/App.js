import React,{useState} from "react";
import './App.css'
import {FaBars, FaTimes} from "react-icons/fa"

function App() {

  const [click, setclick] = useState(false)

  const [state, setState] = useState([
    {
      id: 1,
      name: 'chelsea',
      sex: 'male',
      course: 'web development',
      age: 18,
    },
    {
      id: 2,
      name: 'precious',
      sex: 'male',
      course: 'mobile development',
      age: 28,
    },
    {
      id: 3,
      name: "Rachael",
      sex: 'female',
      course: "cloud engineer",
      age: 25,
    },
    {
      id: 4,
      name: "Samuel",
      sex: 'Female',
      course: 'UI/UX',
      age: 25,
    },
    {
      id: 5,
      name: "Faith",
      sex: 'Female',
      course: 'mobile development',
      age: 25,
    },
    {
      id: 6,
      name: "Cynthia",
      sex: 'Female',
      course: 'Back-End Engineer',
      age: 25,
    },
    {
      id: 7,
      name: "Ayo",
      sex: 'Male',
      course: 'mobile development',
      age: 25,
    },
    {
      id: 8,
      name: "Faith",
      sex: 'Female',
      course: 'mobile development',
      age: 25,
    },
    {
      id: 9,
      name: "Femi",
      sex: 'Male',
      course: 'mobile development',
      age: 25,
    },
    {
      id: 10,
      name: "Hope",
      sex: 'Female',
      course: 'Full Stack Engineer',
      age: 25,
    }
  ])


  const handClick = () => {
    setclick (!click)
  }

  return (
    <div className="Container">
      <div className="Header-Contain">
        <div className="Header-Contain-Wrapper">
          <h1>LOGO</h1>
          <navs>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>CONTACT</li>
          </navs>
          <div className="Icon" onClick={handClick}>
            {click ? <FaTimes/> : (<FaBars/>)}
            {/* {click ? <div>Its my turn</div> : <h2>No, No... </h2>} */}   
          </div>
        </div>
        
      </div>
      <wrapper className= "Cardwrapper">
        {state.map((el) =>{
          return(
            <card className= "Card">
            <span>{el.id}</span>
            <span>{el.name}</span>
            <span>{el.sex}</span>
            <span>{el.course}</span>
            <span>{el.age}</span>
        </card>
          )
        })}
       
      </wrapper>

    </div>
  );
}

export default App;