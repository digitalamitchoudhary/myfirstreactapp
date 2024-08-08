import Navbar from './Component/Navbar';
import './App.css';
import TextForm from './Component/TextForm';

function App() {
  return (
   <>
  <Navbar title="New Navbars" aboutText ='About text'/> 
  
  <div className="container my-3">
        <TextForm heading="My Heading"/>
     
     </div> 
     </>
  );
}

export default App;
