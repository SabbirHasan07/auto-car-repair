import Image from 'next/image';
import React from 'react';

const about: React.FC = () => {
    const images = [
        { src: "/assets/customer.jpg", caption: "Customer Satisfaction" },
        { src: "/assets/confident.jpg", caption: "Confident" },
        { src: "/assets/all-time-connected.jpg", caption: "All-Time Connected" },
        { src: "/assets/responsibilites.jpg", caption: "Responsibilities" },
    ];

    return (
        <div>
            <h1 className='text-4xl font-bold mb-5 text-center pt-6'>ABOUT</h1>
            <hr />
            <div className='lg:flex gap-4 pt-2 m-6'>
                <div className="relative group overflow-hidden">
                    <Image
                        className='rounded transition-transform duration-300 ease-in-out group-hover:scale-110'
                        src={'/assets/AdobeStock_434099016.jpeg'}
                        height={1240}
                        width={1240}
                        alt=''
                    />
                </div>
                <div className='lg:flex  flex-col-1 gap-2 mt-16'>
                    <h1 className='text-2xl font-bold'>
                        <span className='text-2xl'>C</span>ar repair services are essential for maintaining the longevity and performance of your vehicle...
                    </h1>
                    <h1 className='text-2xl font-bold'>
                        Modern vehicles are equipped with complex computer systems that require specialized diagnostic tools to identify issues...
                    </h1>
                    
                </div>
            </div>
            <hr />
            <div className='m-6 texl-xl'>
                <h1>Car repair services are essential for maintaining the longevity, safety, and performance of vehicles. Regular maintenance and timely repairs can prevent small issues from escalating into costly, more complex problems. A well-maintained car runs efficiently, ensuring smoother rides, better fuel economy, and fewer unexpected breakdowns, all of which contribute to an improved driving experience.

                    In today’s fast-paced world, reliable transportation is crucial for daily routines, whether it’s commuting to work, attending family events, or running errands. When a vehicle malfunctions, it disrupts the flow of everyday life. This makes professional repair services vital, as they provide the expertise and tools needed to diagnose and resolve problems quickly and accurately.

                    Furthermore, staying on top of regular maintenance, such as oil changes, brake checks, and tire rotations, not only enhances vehicle performance but also ensures the safety of drivers and passengers. Proper care reduces the likelihood of accidents caused by worn-out parts or system failures.

                    Investing in car repairs and maintenance is a smart decision for long-term vehicle health. It extends the life of the car, maintains its value, and provides peace of mind knowing the vehicle is in optimal condition for any journey.</h1>
            </div>
            <div>
                <h1 className='m-5 text-center font-bold text-4xl'>WE PROVIDE</h1>
                <hr />
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-2  m-6">
                {images.map((image, index) => (
                    <div key={index} className="relative group">
                        <Image
                            height={700}
                            width={700}
                            className="h-auto max-w-full rounded-lg mb-6"
                            src={image.src}
                            alt={`Image ${index + 1}`}
                        />
                        {/* Caption on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">{image.caption}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default about;
