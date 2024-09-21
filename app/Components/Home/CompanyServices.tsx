
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const CompanyServices: React.FC = () => {

    return (
        <div>
            <div><h1 className='py-11 text-center font-bold text-4xl'>Services</h1></div>
            <div className='ml-11  lg:grid   lg:grid-cols-3 gap-4 p-4 items-center text-center justify-center'>
                <div className="relative mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/log.jpg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                LOG BOOK SERVICE
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            We provide complete car servicing, including logbook servicing, using the latest equipment and high-quality parts.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/mechanical.jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                MECHANICAL REPAIRS
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Qualified mechanics conduct a full range of mechanical repairs, replacements, and diagnostics for all types of vehicles.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/images (1).jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                CLUTCH & BREAKS
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Brake &amp; clutch service and repairs, from brake pads to clutch kits, we&apos;ve got you covered.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative mb-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/AdobeStock_434099016.jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                DIAGNOSTICS
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Discover the most impactful technology takeovers and mergers of 2021, which are influencing the enterprise market.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative max-w-sm mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/car-front-suspension-blog-images-2022-05-may-tiresplus-web-bsro.jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                SUSPENSIONS
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Our team provides complete suspension inspection, service, and repair services.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative max-w-sm mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/what-to-consider-before-buying-a-new-car-battery.jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                BATTERIES
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Keep your car running with AutoPlus battery replacement and testing services.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative max-w-sm mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/fuelinjection.jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                FUEL INJECTION SERVICE
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Keep your car running with AutoPlus battery replacement and testing services.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative max-w-sm mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/cooling.jpeg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                COOLING SYSTEM
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            A properly operating cooling system helps keep your engine running at its best.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>
                <div className="relative max-w-sm mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/assets/depositphotos_250171020-stock-photo-rack-with-variety-of-new.jpg"
                            alt="Technology Acquisitions 2021"
                            height={500}
                            width={500}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                TYRES
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Regular EFI servicing helps your car operate at its optimum fuel efficiency and power.
                        </p>

                    </div>
                    <div className="absolute inset-0 flex items-center justify-center gap-6 text-white bg-gary-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity duration-300">

                        

                        <Link
                            href={'/pages/servicing'}


                        >
                            <span className="text-lg font-bold bg-red-900 px-4 py-2 rounded">BOOK NOW</span>
                        </Link>

                    </div>
                </div>








            </div>
        </div>
    );
};

export default CompanyServices;

