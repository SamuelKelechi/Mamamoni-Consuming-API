import React,{useState} from "react";
import './App.css'
import {FaBars, FaTimes} from "react-icons/fa"

function App() {

  const [click, setclick] = useState(false)
  const [names, setNames] = useState("")
  const [sexs, setSexs] = useState("")
  const [courses, setCourses] = useState("")
  const [ages, setAges] = useState("")

  const [state, setState] = useState([])


  const handClick = () => {
    setclick (!click)
  }

  console.log(names)
  console.log(sexs)
  console.log(courses)
  console.log(ages)

  const Post = () => {
    const Items = {
      id : state.length + 1,
      names : names,
      sex : sexs,
      course : courses,
      age : ages,
    }
    setState([...state, Items]);

    setNames('');
    setAges('');
    setCourses('');
    setSexs('');
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

      
    <div className= "App">
      <div className="Wrap">
        <input placeholder= "Name" value={names} onChange={(e) =>{
          setNames(e.target.value)
        }}/>
        <input placeholder= "Sex" value={sexs} onChange={(e) =>{
          setSexs(e.target.value)
        }}/>
        <input placeholder= "Course" value={courses} onChange={(e) =>{
          setCourses(e.target.value)
        }}/>
        <input placeholder= "Age" value={ages} onChange={(e) =>{
          setAges(e.target.value)
        }}/>
        <button onClick={Post}>POST</button>
      </div>
    </div>
      <wrapper className= "Cardwrapper">
        {state.map((el) =>{
          return(
            <div className="Card" key={el.id}>
            <span>{el.id}</span>
            <span>{el.name}</span>
            <span>{el.sex}</span>
            <span>{el.course}</span>
            <span>{el.age}</span>
        </div>
          )
        })}
       
      </wrapper>

    </div>

  );
}

export default App;