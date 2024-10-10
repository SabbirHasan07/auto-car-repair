import Image from "next/image";

const WelcomeText = () => {
    return (
        <div className="my-4">
            
            <div className="text-center text-4xl font-bold pb-11 lg:py-24">Welcome to Car Repair</div>
            <div className="lg:flex grid gap-4 p-4">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Image
                            height={50}
                            width={50}
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                            alt="Gallery Image 1"
                        />
                    </div>
                    <div>
                        <Image
                            height={50}
                            width={50}
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                            alt="Gallery Image 2"
                        />
                    </div>
                    <div>
                        <Image
                            height={50}
                            width={50}
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                            alt="Gallery Image 3"
                        />
                    </div>
                    <div>
                        <Image
                            height={50}
                            width={50}
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                            alt="Gallery Image 4"
                        />
                    </div>
                    <div>
                        <Image
                            height={50}
                            width={50}
                            className="h-auto max-w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                            alt="Gallery Image 5"
                        />
                    </div>
                </div>
                <div>
                    <p className="text-xl">
                        &quot;Welcome to Car Repair, your trusted destination for all your car repair and maintenance needs! Whether you&apos;re dealing with routine tune-ups, complex engine diagnostics, or unexpected breakdowns, our skilled technicians are here to provide top-quality service with honesty and efficiency. We understand how essential your vehicle is to your daily life, and our goal is to keep you safely on the road with reliable repairs and expert care. With years of experience and a commitment to customer satisfaction, CARRE PAIR ensures that your car is in the best hands. Visit us today for fast, dependable, and friendly service!&quot;
                    </p>
                </div>

            </div>

        </div>
    )
}
export default WelcomeText;
