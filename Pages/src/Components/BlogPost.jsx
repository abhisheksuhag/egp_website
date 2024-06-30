const BlogPost = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="relative flex">
                {/* Text Background Container */}
                <div
                    className="text-background-container w-[42%] ml-10 h-[80vh] bg-[#E7EEEC] shadow-lg z-0"
                    style={{ zIndex: 0 }}
                >
                    {/* Text Container */}
                    <div className="text-container p-[65px] flex flex-col justify-center items-center text-balance w-full relative z-10">
                        <div className="left-0 right-0  mr-20 h-full w-11/12  ">
                            <div className="text-sm text-gray-500 mt-24 mb-10">
                                <h2>Resource management and circular economy</h2>
                            </div>
                            <div className="text-3xl font-bold mt-8 mb-10">
                                Garbage in – energy out: what you need to know when developing waste-to-energy projects
                            </div>
                            <div className="mt-4 text-gray-700 text-s" >
                                <p>
                                    Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
                                    Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
                                    Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
                                    While this is clearly a challenge given that the region’s population is expected to
                                    rise from about 686.825 million to 724.664 million...
                                </p>
                            </div>
                            <div className="mt-24">
                                <button className="p-4 text-lg text-gray-800 transition-transform duration-300 
                    ease-in-out transform hover:translate-x-0 hover:translate-y-2">
                                    &gt; Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Container */}
                <div
                    className="image-container w-500px h-[62vh] bg-gray-100 z-20"

                >
                    <img
                        src="sec1.jpg"
                        alt="Building"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Top Right Button */}
            <div className="absolute top-4 right-8 flex space-x-8">
                <button className="p-4 text-lg text-blue-600 transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:translate-y-2">
                    &gt; View All
                </button>
            </div>

            {/* Bottom Right Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-4">
                <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-500">
                    {/* Add left arrow icon here */}
                </button>
                <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-500">
                    {/* Add right arrow icon here */}
                </button>
            </div>
        </div>
    );
};

export default BlogPost;