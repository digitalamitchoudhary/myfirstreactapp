import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
 
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
