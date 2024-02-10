import "./Controle.scss"
import { useDispatch, useSelector } from "react-redux"; 
import { updatePolice, updateColor } from '../../store/pageSlice'; 
 

export default function Controle () {

    const dispatch = useDispatch(); 
    
    const color = useSelector((state) => state.pageCommand.colorButton); 
    
    let resultColor; 
    if (color===true) {
        resultColor = "controle primaryColor"
    } else {
        resultColor = "controle secondColor"
    }

    console.log("result color:", resultColor)
    
    return (
        <div className={resultColor}>

            <button className="fontButton" onClick={()=>dispatch(updatePolice(true))}>Police Protest Strike</button>


            <input type="button" onClick={()=>dispatch(updatePolice(false))}className="fontButton" value="Police EDU SA Beginner"/>

            <input type="button" className="colorButton" value="Color Switch" onClick={()=> { 
                
                const updatedColor = !color; 

               
                console.log("le console de oncklick", updatedColor); 

               dispatch(updateColor(updatedColor))}}/>

            <input type="button" className="bannerButton" value="Banner Switch"/>

        </div>
    )
}