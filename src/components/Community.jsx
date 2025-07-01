import React from 'react';
import Marquee from 'react-fast-marquee';

const Community = () => {
    return (
        <div className="max-w-screen-xl md:mx-auto my-16 mx-4">

            {/* Header */}
            <h1 className="text-center text-2xl md:text-4xl font-bold text-black mb-12">
                Meet the Flavory Team
            </h1>
            {/* Marquee Content */}
            <div className="flex items-center overflow-hidden">
                <Marquee className="cursor-pointer">
                    {/* Image containers with padding and margin for spacing */}
                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/chef.jpg"
                            alt="Senior Chef"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/manager.jpg"
                            alt="manager"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/chef3.jpg"
                            alt="Assistant Chef"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/waiter6.jpg"
                            alt="waiter 6"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/waiter2.jpg"
                            alt="waiter 2"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/waiter3.jpg"
                            alt="waiter 3"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="h-16 md:h-28 w-32 md:w-40 mr-5 flex-shrink-0">
                        <img
                            src="/src/assets/waiter4.jpg"
                            alt="waiter 4"
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Community;