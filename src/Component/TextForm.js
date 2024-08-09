import React, {useState} from 'react'

 

export default function TextForm(props) {

  const [text, setText] = useState('Enter your text here');
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  const handleUpclick = ()=>{
    // console.log("click up ")
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowclick = ()=>{
    // console.log("click up ")
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearclick = ()=>{
    // console.log("click Clear ")
    let newText = ""
    setText(newText);
  }
  const handleUpChange = (event)=>{
    // console.log("change up")
    setText(event.target.value)
  }
  const handleCapitalcase = ()=>{
      
      let sentence = text;
      let words = sentence.split(' ');
      let capitalizedWords = [];
      for (let i = 0; i < words.length; i++) {
        let firstChar = words[i][0].toUpperCase()
        // console.log(firstChar)
        let remainingChars = words[i].substring(1).toLowerCase();
        // console.log(remainingChars);
        let capitalizedWord = firstChar + remainingChars;
        // console.log(capitalizedWord); 
        capitalizedWords.push(capitalizedWord);
      }
     let capitalizedSentence = capitalizedWords.join(' ');
                setText(capitalizedSentence);
  }
   
  
  
 
  return (
    <div>
   <h1>{props.heading}</h1>

   {/* form start here */}
   
   <div className="mb-3">
  
             <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="12"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Upper case</button>
  <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear text</button>
  < button className="btn btn-primary mx-1" onClick={handleCapitalcase}>Captial Case</button>
   
 
  <div className="container my-3"><h2>Your Text Summary</h2>
  <p> {wordCount} words and {text.length} characters</p>
  <p> {0.0008*wordCount} Minutes read</p>

  <h2>Preview</h2>
  <p>{text}</p>


  
  </div>
    </div>

  
  )
}
