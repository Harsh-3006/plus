import React, {useState} from 'react'

export default function TextForm(promp) {

  const [text,setText]=useState('')  //i can also do like useState('enter your text here') to give a bydefalut value but i want a place holder
  // setText('changed text') //correct way to chng the textState

  const handleUpClick=()=>{
    if(text===""){
    promp.Alert("Empty text","warning")  
    return
    }
    console.log('uppercase was clicked'+text);
    let newText=text.toUpperCase()
    setText(newText)
    promp.Alert('Converted to uppercase','success')
  }

  const handleLoClick=()=>{
    if(text===""){
      promp.Alert("Empty text","warning")  
      return
    }
    console.log('Lowercase was clicked'+text);
    let newText=text.toLowerCase()
    setText(newText)
    promp.Alert('Converted to lowercase','success')

  }
  const clearText=()=>{
    if(text===""){
      promp.Alert("Empty text","warning")  
      return
    }
    setText('')
    promp.Alert('Text cleared','success')
  }

  // const handleCopy=()=>{
  //   var text=document.getElementById('mybox')
  //   text.select()
  //   navigator.clipboard.writeText(text.value)
  //   promp.Alert('Coppied to clipboard','success')

  // }
// console.log(text)
// console.log(text.length)
  const removeExtraSpace=()=>{if(text===""){
    promp.Alert("Empty text","warning")  
      return
    }
    let newText=text.split(/[ ]+/);
    setText(newText.join(' '))
    promp.Alert('Extra spaces removed','success')
  }

  //Most imp syntax
  const handleOnChange=(event)=>{
    console.log('onchage')
    setText(event.target.value)
  }


   
  console.log(promp.mode)
  // console.log(mode)
  const bcolor=(mode)=>{
    if(mode==='dark'){
      return 'btn-dark'
    }
    if(mode==='light'){
      return 'btn-outline-primary'
    }
    if(mode==='green'){
      return 'btn-success'
    }
    if(mode==='red'){
      return 'btn-danger'
    }
  }

  const setColor=(mode)=>{
    if(mode==='light'){
      return 'black'
    }
    if(mode==='dark'||'red'){
      return 'white'
    }
    if(mode==='green'){
      return 'black'
    }
}

const setbackgroundColor=(mode)=>{
  if(mode==='green'){
    return 'green'
  }
  if(mode==='red'){
    return 'red'
  }
  if(mode==='dark'){
    return 'black'
  }
  if(mode==='light'){
    return 'white'
  }
}
const setTextColor=(mode)=>{
  if(mode==='dark'||mode==='red'||mode==='green'){
    return 'white'
  }
  if(mode==='light'){
    return 'black'
  }
}

  return (
    <div className='container' style={{ color: setColor(promp.mode) }}>
        <h1>{promp.heading}</h1>
<div className="mb-3">
  <textarea style={{backgroundColor:setbackgroundColor(promp.mode),placeholder:setTextColor(promp.mode),color:setTextColor(promp.mode)}} className="form-control" placeholder='Enter your text here' value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<div className="container">

<button className={`btn ${bcolor(promp.mode)} mx-2 my-2`} onClick={handleUpClick} >Convert to uppercase</button>
<button className={`btn ${bcolor(promp.mode)} mx-2 my-2`} onClick={handleLoClick} >Convert to Lowercase</button>
<button className={`btn ${bcolor(promp.mode)} mx-2 my-2`} onClick={clearText} >Clear text</button>
{/* <button className={`btn ${bcolor(promp.mode)} mx-2 my-2`} onClick={handleCopy} >Copy text</button> */}
<button className={`btn ${bcolor(promp.mode)} mx-2 my-2`} onClick={removeExtraSpace} >Remove extra space</button>
{/* <button type="button" className={`btn btn-outline-light my-2 mx-2`}>Light</button> */}
</div>
<div className="container my-3">
  <h2>Your text details</h2>
  <p> {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
</div>

  </div>
  )
}
