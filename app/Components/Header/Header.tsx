import Link from "next/link";
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
            <nav className=" bg-slate-100 border-gray-200 dark:bg-gray-700">
                <div className=''>
                    <div className="flex items-center my-4 mx-2">
                        <Marquee className="bg-slate-200 px-2 py-1 text-center text-xs ">
                            <p><span className="text-red-500 text-bold">* 10% </span>off for $665 services. || For any query please, contact (555) 412-1234 || </p>
                        </Marquee>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <p className="text-4xl font-bold"><span className="text-red-800">DEMO</span>NAME</p>
                    </Link>

                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">  (555) 412-1234
                        </Link>
                        <Link href="#" className="text-xl  text-gray-800 dark:text-blue-500 hover:underline">Login</Link>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center lg:justify-center flex-row font-medium mt-0 space-x-8 lg:space-x-28 rtl:space-x-reverse text-sm">
                        <Link className="text-gray-900 font-bold dark:text-white hover:underline" aria-current="page" href={''}>
                            HOME
                        </Link>
                        <Link className="text-gray-900 font-bold dark:text-white hover:underline" aria-current="page" href={''}>
                            SERVICING
                        </Link>
                        <Link className="text-gray-900 font-bold dark:text-white hover:underline" aria-current="page" href={''}>
                            MECHANICAL
                        </Link>
                        <Link className="text-gray-900 font-bold dark:text-white hover:underline" aria-current="page" href={''}>
                            ABOUT
                        </Link>
                        <Link className="text-gray-900 font-bold dark:text-white hover:underline" aria-current="page" href={''}>
                            OFFERS
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Header;