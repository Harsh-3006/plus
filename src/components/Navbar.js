import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  // let textColor=()=>{
    // {
    // var textColor
    // if(props.mode==='dark'){
    //      textColor= 'Enable light mode'
    //   }
    // if(props.mode==='light'){
    //    textColor= 'Enable dark mode'
    //  }
    // } 
  // }

  var colorChanger=(mode)=>{
    if(mode==='green'||mode==='light'){
      return 'dark'
    }
    if(mode==='dark'||mode==='red'){
      return 'light'
    }
  }


  return (
    // to make navbar dark i have use dark property for light i can use light
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} text-${colorChanger(props.mode)}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${colorChanger(props.mode)}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${colorChanger(props.mode)}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${colorChanger(props.mode)}`} to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" value='hello' htmlFor="flexSwitchCheckDefault">{`${textColor}`}</label>
</div> */}

<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.toggleLMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className={`form-check-label `}>
    Enable light mode
  </label>
</div>

<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.toggleDMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className={`form-check-label `}  >
    Enable dark mode
  </label>
</div>


<div className="form-check mx-2">
  <input className="form-check-input" onClick={props.toggleGMode}  type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className={`form-check-label`} >
    Enable green mode
  </label>
</div>

<div className="form-check mx-2" >
  <input className="form-check-input  " onClick={props.toggleRMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className={`form-check-label `} >
    Enable red mode
  </label>
</div>



{/* text-${props.mode==='light'?'dark':'light'} */}



    </div>
  </div>
</nav>
)
}
Navbar.propTypes={ //esko hum rules bool skte props assign krne ke liye ab agar mai app.js mai jaake glti se number pass krdunga toh error show hoga
    title:PropTypes.string.isRequired, //es case mai error aajyega agar maine defaultprop ni banaya h toh
    aboutText:PropTypes.string
}

Navbar.defaultProps={ //agar hum value text .js mai pass ni krege toh fir yaha ki value pass ho jayenge
    title:'set title for this navbar',
    aboutText:'set about for this '
}

