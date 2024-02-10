import "./Controle.scss"
import { useDispatch, useSelector } from "react-redux"; 
import { updatePolice, updateColor, updateBanner } from '../../store/pageSlice'; 
//useDispatch : envoyer des actions
//useSelector : lire et se servir des données du store

export default function Controle () {

    const dispatch = useDispatch(); 
    
    const color = useSelector((state) => state.pageCommand.colorButton); 
    
    let resultColor; 
    if (color===true) {
        resultColor = "controle primaryColor"
    } else {
        resultColor = "controle secondColor"
    }

    const banner = useSelector((state) => state.pageCommand.bannerButton)
    
    // const police = useSelector((state) => state.pageCommand.fontButton)
    // console.log(police)

    function switchPolice(event) {
    const selectedPolice = event.target.value
       dispatch(updatePolice(selectedPolice))
    }

    // onChange={switchPolice} value={selectedPolice}
    
    return (
        <div className={resultColor}>

            <div className="menuPolice">
            <label htmlFor="font-select">Choisis ta police Bébé :</label>
            <select name="font" id="" onChange={switchPolice}  >
                <option value="Protest Revolution">Protest Revolution</option>
                <option value="Edu SA Beginner">Edu SA Beginner</option>
            </select>
            </div>

            {/* <button className="fontButton" onClick={()=>dispatch(updatePolice(true))}>Police Protest Strike</button>


            <input type="button" onClick={()=>dispatch(updatePolice(false))}className="fontButton" value="Police EDU SA Beginner"/> */}

            <input type="button" className="colorButton" value="Color Switch" onClick={()=> { 
                
                const updatedColor = !color; 
                
               dispatch(updateColor(updatedColor))}}/>

            <input type="button" className="bannerButton" value="Banner Switch" onClick={() => {
                const updatedBanner = !banner; 

                dispatch(updateBanner(updatedBanner))
            }}/>

        </div>
    )
}