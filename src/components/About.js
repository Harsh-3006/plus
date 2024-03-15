import React, {useState}from 'react'

export default function About(promps) {
    const [myStyle,setMyStyle]=useState(null)

    // const [btnText,setBtnText]=useState('Enable light mode')
    // console.log(promps.mode)
    let aboutUsColor=(mode)=>{
        if(mode==='light'){
            return 'black'
        }
        if(mode==='dark'){
          return 'white'
        }
        if(mode==='green'){
          return 'black'
        }
        if(mode==='red'){
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
    let myStylecond=(mode)=>{
      if (mode==='light') {
        return { color: 'black', backgroundColor: 'white',border:'none' };
      }
      if (mode==='dark') {
        return { color: 'white', backgroundColor: 'black',border:'none' };
      }
      if (mode==='green') {
        return { color: 'black', backgroundColor: 'green',border:'none' };
      }
      if (mode==='red') {
        return { color: 'white', backgroundColor: 'red',border:'none' };
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
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStylecond(promps.mode)}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStylecond(promps.mode)}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStylecond(promps.mode)}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStylecond(promps.mode)}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</div> */}
</div>
</>
  )
}
