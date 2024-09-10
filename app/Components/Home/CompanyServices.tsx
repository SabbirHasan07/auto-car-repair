import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CompanyServices: React.FC = () => {
    return (
        <div>
            <div><h1 className='py-11 text-center font-bold text-4xl'>Services</h1></div>
            <div className='grid grid-cols-3 gap-4 p-4 items-center text-center justify-center'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/docs/images/blog/image-1.jpg"
                            alt="Technology Acquisitions 2021"
                            height={50}
                            width={50}

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
                        <Link
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/docs/images/blog/image-1.jpg"
                            alt="Technology Acquisitions 2021"
                            height={50}
                            width={50}
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
                        <Link
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/docs/images/blog/image-1.jpg"
                            alt="Technology Acquisitions 2021"
                            height={50}
                            width={50}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                BREAK AND CLUTCH
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Brake &amp; clutch service and repairs, from brake pads to clutch kits, we&apos;ve got you covered.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/docs/images/blog/image-1.jpg"
                            alt="Technology Acquisitions 2021"
                            height={50}
                            width={50}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Qualified mechanics conduct a full range of mechanical repairs, replacements, and diagnostics for all types of vehicles.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/docs/images/blog/image-1.jpg"
                            alt="Technology Acquisitions 2021"
                            height={50}
                            width={50}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            We provide complete car servicing, including logbook servicing, using the latest equipment and high-quality parts.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href="#">
                        <Image
                            className="rounded-t-lg"
                            src="/docs/images/blog/image-1.jpg"
                            alt="Technology Acquisitions 2021"
                            height={50}
                            width={50}
                        />
                    </Link>
                    <div className="p-5">
                        <Link href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            We provide complete car servicing, including logbook servicing, using the latest equipment and high-quality parts.
                        </p>
                        <Link
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyServices;

