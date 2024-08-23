import Navbar from './component/Navbar';
import './App.css';
// import About from './component/About';
import TextForm from './component/TextForm';
import React, { useState} from 'react'
import Alert from './component/Alert';

 
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({

      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enable", "success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enable", "success");
    }
  
   }


  return (
    <> 
      <Navbar title="New Navbars" aboutText ="About text" mode={mode} toggleMode={toggleMode}/>  
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert ={showAlert}heading="My Heading" mode={mode}/>
             
     </div>
     {/* <About/> */}
    </>
  );
}

export default App;