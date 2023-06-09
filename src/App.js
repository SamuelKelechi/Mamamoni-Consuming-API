import React,{useState} from "react";
import './App.css'
import {FaBars, FaTimes} from "react-icons/fa"

function App() {
// State for our Toggle function
  const [click, setclick] = useState(false)

// States to capture input from users
  const [names, setNames] = useState("")
  const [sexs, setSexs] = useState("")
  const [courses, setCourses] = useState("")
  const [ages, setAges] = useState("")

// State for image upload
  const [avatar, setAvatar] = useState(null)

// Creating state for our JSON/Database
  const [state, setState] = useState([])

// Function for Toggle 
  const handClick = () => {
    setclick (!click)
  }

// Function to handle Image upload
  const uploadImage = (e) => {
    const file = e.target.files[0];
    const res = URL.createObjectURL(file);
    setAvatar(res)
  }

// Function to make post to our JSON/Database (state, setState)
  const Post = () => {
    const Items = {
      id : state.length + 1,
      names : names,
      sex : sexs,
      course : courses,
      age : ages,
      image : avatar,
      time : Date.now()
    }
    setState([...state, Items]);

// To empty input after sending post
    setNames('');
    setAges('');
    setCourses('');
    setSexs('');
  }

// Delete Function
const Delete = (id) => {
  const removeItem = state.filter((el) => el.id !== id)
  setState(removeItem)
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
          <input type="file"  onChange={uploadImage}/>
          <button onClick={Post}>POST</button>
        </div>
      </div>
      
      <wrapper className= "Cardwrapper">
        
{/* Mapping Datas to Card */}
        {state.map((el) =>{
          return(
          <div className="Card" key={el.id}>

              <p>{el.time}</p>
              <img src={el.image} alt="avatar" style={{width:'50px'}}/>

              <span>{el.id}</span>
              <span>{el.name}</span>
              <span>{el.sex}</span>
              <span>{el.course}</span>
              <span>{el.age}</span>
              <button onClick={() => {
                Delete(el.id) 
                }}>Delete</button>
          </div>
          )
        })} 
      </wrapper>
    </div>
  );
}

export default App;