import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
    return (
        <div className="max-w-4xl mx-auto mt-6">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src="/src/assets/img1.jpg" alt="Image 1" className="h-[400px] object-cover" />
                    
                </div>
                <div>
                    <img src="/src/assets/img2.jpg" alt="Image 2" className="h-[400px] object-cover" />
                    
                </div>
                <div>
                    <img src="/src/assets/img3.jpg" alt="Image 3" className="h-[400px] object-cover" />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Header;
