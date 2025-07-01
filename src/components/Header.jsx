import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
    return (
        <div className="w-11/12 mx-auto mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left side: Carousel */}
            <div>
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                    <div>
                        <img src="/interior5.jpg" alt="Image 1" className="h-[400px] w-full object-cover rounded-lg" />
                    </div>
                    <div>
                        <img src="/interior4.jpg" alt="Image 2" className="h-[400px] w-full object-cover rounded-lg" />
                    </div>
                    <div>
                        <img src="/interior (3).jpg" alt="Image 3" className="h-[400px] w-full object-cover rounded-lg" />
                    </div>
                </Carousel>
            </div>

            {/* Right side: Two stacked images */}
            <div className="flex flex-col gap-6">
                <img src="/interior (1).jpg" alt="Right Image 1" className="h-[195px] w-full object-cover rounded-lg" />
                <img src="/interior (2).jpg" alt="Right Image 2" className="h-[195px] w-full object-cover rounded-lg" />
            </div>
        </div>
    );
};

export default Header;
