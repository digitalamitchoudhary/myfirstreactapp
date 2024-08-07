import React, {useState} from 'react'

 

export default function TextForm(props) {
  const handleUpclick = ()=>{
    // console.log("click up ")
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleUpChange = (event)=>{
    // console.log("change up")
    setText(event.target.value)
  }

  
  const [text, setText] = useState('Enter your text here');
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return (
    <div>
   <h1>{props.heading}</h1>

   {/* form start here */}
   
   <div className="mb-3">
  
             <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="12"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpclick}>Convert to upper case</button>
  <div className="container my-3"><h2>Your Text Summary</h2>
  <p> {wordCount} words and {text.length} characters</p>

  
  </div>
    </div>

  
  )
}