import React, { useState } from 'react'

export default function About(promps) {
  const [myStyle, setMyStyle] = useState(null)

  // const [btnText,setBtnText]=useState('Enable light mode')
  // console.log(promps.mode)
  let aboutUsColor = (mode) => {
    if (mode === 'light') {
      return 'black'
    }
    if (mode === 'dark') {
      return 'white'
    }
    if (mode === 'green') {
      return 'black'
    }
    if (mode === 'red') {
      return 'white'
    }

    //   if(mode==='dark'){
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor:'black',
    //         border:'1px solid white'
    //     })
    //   // if(mode==='dark'){
    //   //   return 'black'  
    //   // }
    // }
  }
  let myStylecond = (mode) => {
    if (mode === 'light') {
      return { color: 'black', backgroundColor: 'white', border: 'none' };
    }
    if (mode === 'dark') {
      return { color: 'white', backgroundColor: 'black', border: 'none' };
    }
    if (mode === 'green') {
      return { color: 'black', backgroundColor: 'green', border: 'none' };
    }
    if (mode === 'red') {
      return { color: 'white', backgroundColor: 'red', border: 'none' };
    }
  }
  return (
    <>
      <div className='container my-2' style={{ color: aboutUsColor(promps.mode) }} >
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" style={myStylecond(promps.mode)}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStylecond(promps.mode)}>
                My description
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Hello:</strong> My name is Harsh Saxena a MERN stack developer.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStylecond(promps.mode)}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStylecond(promps.mode)}>
                Contact
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Email:</strong> harshsaxena427@gmail.com<br/>
                <strong>Github:</strong> https://github.com/30Harsh01<br/>
                <strong>Linkedn:</strong> www.linkedin.com/in/harshsaxena30<br/>
              </div>
            </div>
          </div>
        </div>
        {/* <div onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</div> */}
      </div>
    </>
  )
}
