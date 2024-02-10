import "./Controle.scss"

export default function Controle () {
    return (
        <div className="controle">

            <input type="button" className="fontButton" value="Police Switch"/>

            <input type="button" className="colorButton" value="Color Switch"/>

            <inout type="button" className="bannerButton" value="Banner Switch"/>
            
        </div>
    )
}