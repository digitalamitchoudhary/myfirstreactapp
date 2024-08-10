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
  const handleSentenseclick = ()=>{
    
    let sentences = text.match(/[^.!?]+[.!?]*/g) || [];
    // console.log(sentences)
    const firstWords = sentences.map(sentence => {
      // Split the sentence into words and get the first word
      const words = sentence.trim().split(' ').filter(Boolean);
     if (words.length > 0) {
            words[0] = words[0].charAt(0).toUpperCase()+ words[0].slice(1).toLowerCase(); // Capitalize the first word

            for (let i = 1; i < words.length; i++) {
              words[i] = words[i].toLowerCase();
          }
        }
        return words.join(' ');

    });
    const paragraph = firstWords.join(' ');
    setText(paragraph);
    
    
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
   
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }
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
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
  <button onClick={handleSentenseclick} className="btn btn-warning mx-2 my-2" id="toggle">Sentense Case</button>

  
   
 
  <div className="container my-3"><h2>Your Text Summary s</h2>
  <p> {wordCount} words and {text.length} characters</p>
  <p> {0.0008*wordCount} Minutes read</p>

  <h2>Preview</h2>
  <p>{text}</p>


  
  </div>
    </div>

  
  )
}
