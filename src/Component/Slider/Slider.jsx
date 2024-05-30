import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/home/01.jpg'
import slider2 from '../../assets/home/02.jpg'
import slider3 from '../../assets/home/03.png'
import slider4 from '../../assets/home/04.jpg'
import slider5 from '../../assets/home/05.png'
import slider6 from '../../assets/home/06.png'
import './Slider.css'
const Slider = () => {
    return (
        <Carousel>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider2} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
                <div>
                    <img src={slider5} />
                </div>
                <div>
                    <img src={slider6} />
                </div>
            </Carousel>
    );
};

export default Slider;