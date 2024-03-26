import './App.scss';
import Banner from '../Banner/Banner.jsx'; 
import Controle from "../Controle/Controle.jsx";
import Slider from "../Slider/Slider.jsx";
import { useSelector } from "react-redux"; 
// pour lire les données du store : 


function App() {

  const police = useSelector((state) => state.pageCommand.fontButton); 
  
const appStyle = {
  fontFamily: police
}

console.log(appStyle); 

  return (
  <div
  className="App"
   style={appStyle} >
    <Banner />
    <Controle />
    <Slider />
  </div>)
  ;
}

export default App;
