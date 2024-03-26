 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.scss';

export default function Slider() {
    const slideImages = [
        {
            id:1, 
            image: "https://images.pexels.com/photos/20629882/pexels-photo-20629882/free-photo-of-nature-soleil-couchant-coucher-de-soleil-coucher-du-soleil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
            title: "sapins dans le brouillard"
        }, 
        {
            id:2, 
            image: "https://images.pexels.com/photos/10615700/pexels-photo-10615700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            title: "rivière en Asie"
        },
        {
            id:3, 
            image: "https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "rivière iluminée"
        }
    ]
    return (
        <Carousel 
        autoPlay interval={10000}
        infiniteLoop
        showStatus={false}
        >
            {slideImages.map((slide) => (
                <div key={slide.id} className="carousel" >
                    <img src={slide.image} alt={slide.title} />
                </div>
            ))}
           
        </Carousel>
    )
}