import "./Banner.scss"
import { useSelector } from "react-redux"
import { updateBanner } from '../../store/pageSlice'


export default function Banner() {
    const banner = useSelector((state) => state.pageCommand.bannerButton); 

    let updatedBanner; 
    if(banner === true) {
        updatedBanner="banner"
    } else {
        updatedBanner="banner plantesBleues"
    }; 

    return (
        <div className={updatedBanner}>
            <h1>Dudux Zénitude...</h1>
            
        </div>
    )
}

