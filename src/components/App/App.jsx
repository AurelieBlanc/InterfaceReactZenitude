import './App.scss';
import Banner from '../Banner/Banner.jsx'; 
import Controle from "../Controle/Controle.jsx";
import { useSelector } from "react-redux"; 
// pour lire les données du store : 


function App() {

  const police = useSelector((state) => state.pageCommand.fontButton); 
  
  // {police ? "police1" : "police2"}
  
  let resultPolice; 
  if (police===true) {
    resultPolice = "police1"
  } else { 
    resultPolice = "police2"
  }; 


  

  return (
  <div className={resultPolice} >
    <Banner />
    <Controle />
  
  </div>)
  ;
}

export default App;
