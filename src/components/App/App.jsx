import './App.scss';
import Banner from '../Banner/Banner.jsx'; 
import Controle from "../Controle/Controle.jsx";
import { useSelector } from "react-redux"; 
// pour lire les données du store : 


function App() {

  const police = useSelector((state) => state.pageCommand.fontButton); 
  console.log ("le result de police est", police); 
  
  let resultPolice; 
  if (police==="Protest Revolution") {
    resultPolice = "protestRevolution"
  } else if(police==="Edu SA Beginner") { 
    resultPolice = "eduSaBeginner"
  }; 


  

  return (
  <div className={resultPolice} >
    <Banner />
    <Controle />
  
  </div>)
  ;
}

export default App;
