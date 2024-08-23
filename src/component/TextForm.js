import React, {useState} from 'react'

 

export default function TextForm(props) {

  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(Boolean).length;






  const handleUpclick = ()=>{
    if (text.trim() === "") {
      props.showAlert("Error: Input is empty", "danger");  // Show error alert
      return;
    }
    // console.log("click up ")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper the Text", "success");
  }





  const handleLowclick = ()=>{
    if (text.trim() === "") {
      props.showAlert("Error: Input is empty", "danger");  // Show error alert
      return;
    }

    // console.log("click up ")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower the Text", "success");
  }





  const handleClearclick = ()=>{
    if (text.trim() === "") {
      props.showAlert("Error: Input is empty", "danger");  // Show error alert
      return;
    }
    // console.log("click Clear ")
    let newText = ""
    setText(newText);
    props.showAlert("Clear Text", "success");
  }




  const handleSentenseclick = ()=>{
    if (text.trim() === "") {
      props.showAlert("Error: Input is empty", "danger");  // Show error alert
      return;
    }
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
    
    props.showAlert("Convert in Sentence case", "success");
    } 
  const handleUpChange = (event)=>{
    // console.log("change up")
    setText(event.target.value)
  }
  const handleCapitalcase = ()=>{
      
    if (text.trim() === "") {
      props.showAlert("Error: Input is empty", "danger");  // Show error alert
      return;
    }
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

                props.showAlert("Convert in Capital case", "success");
              
  }
   
  const speak = () => {

    if (text.trim() === "") {
      props.showAlert("Error: Input is empty", "danger");  // Show error alert
      return;
    }   
    let msg = new SpeechSynthesisUtterance(text);

 // Reset the button text when the speech ends
 msg.onend = () => {
  const toggle = document.getElementById('toggle');
  toggle.innerHTML = "Speak";
};


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
    props.showAlert("Speak Succesfully", "success");
  }
 
  return (
    <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1 className='mb-4'>{props.heading}</h1>

   {/* form start here */}

    
   
   <div>
    {/* Embedded style for placeholder */}
    <style>
        {`
          #myBox::placeholder {
            color: ${props.mode === 'dark' ? 'white' : 'black'};
          }
        `}
      </style>
  
             <textarea className="form-control" placeholder="Enter your text here..." value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'#134e7d':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="12"></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-3" onClick={handleUpclick}>Convert to Upper case</button>
  <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lower case</button>
  <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear text</button>
  < button className="btn btn-primary mx-1" onClick={handleCapitalcase}>Captial Case</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
  <button onClick={handleSentenseclick} className="btn btn-warning mx-2 my-2" id="toggle">Sentense Case</button>

  
   
 
  <div className=" my-3"><h2 style={{ color: props.mode==='dark'?'white':'#042743'}}>Your Text Summary </h2>
  <p style={{ color: props.mode==='dark'?'white':'#042743'}}> {wordCount} words and {text.length} characters</p>
  <p style={{ color: props.mode==='dark'?'white':'#042743'}}> {0.0008*wordCount} Minutes read</p>

  <h2 style={{ color: props.mode==='dark'?'white':'#042743'}}>Preview</h2>
  <p style={{ color: props.mode==='dark'?'white':'#042743'}}>{text}</p>


  
  </div>
    </div>

  
  )
}
