import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';

const carouselComponent = () => {
    return (
        <Carousel autoPlay infiniteLoop> 
        
        <div>
            <img src="https://images-submarino.b2w.io/produtos/01/00/img/2903078/7/2903078765_1GG.jpg" alt="" />
        </div>

        <div>
            <img src="https://images-submarino.b2w.io/produtos/01/00/img/2903078/7/2903078765_1GG.jpg" alt="" />
        </div>

        <div>
            <img src="https://images-submarino.b2w.io/produtos/01/00/img/2903078/7/2903078765_1GG.jpg" alt="" />
        </div>

        <div>
            <img src="https://images-submarino.b2w.io/produtos/01/00/img/2903078/7/2903078765_1GG.jpg" alt="" />
        </div>

        <div>
            <img src="https://images-submarino.b2w.io/produtos/01/00/img/2903078/7/2903078765_1GG.jpg" alt="" />
        </div>

      
        
        </Carousel>
    )
}

export default carouselComponent;