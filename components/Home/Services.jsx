import img from '../../src/assets/image.jpg'

function Services() {
    return (
        <div className="flex flex-wrap gap-4 justify-center bg-blue-950 px-4 py-24">
            <div className="bg-gray-900 rounded-lg shadow-md p-4 max-w-sm">
                <img className="rounded-lg w-full" src={img} />
                <div className="mt-4">
                    <div className="text-xl font-bold text-sky-500">Private Villa</div>
                    <div className="mt-1 font-bold text-white">
                        <a className="hover:underline hover:text-sky-500" href="#">Relaxing All-Inclusive Resort in Cancun</a>
                    </div>
                    <div className="mt-2 text-sm text-gray-300">$299 USD per night</div>
                    <div className="text-white font-bold bg-black w-fit px-6 py-3 mt-4 rounded-2xl hover:bg-white hover:text-emerald-950">Book Now</div>
                </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md p-4 max-w-sm mt-5">
                <img className="rounded-lg w-full" src={img} />
                <div className="mt-4">
                    <div className="text-xl font-bold text-sky-500">Private Villa</div>
                    <div className="mt-1 font-bold text-white">
                        <a className="hover:underline hover:text-sky-500" href="#">Relaxing All-Inclusive Resort in Cancun</a>
                    </div>
                    <div className="mt-2 text-sm text-gray-300">$299 USD per night</div>
                    <div className="text-white font-bold bg-black w-fit px-6 py-3 mt-4 rounded-2xl hover:bg-white hover:text-emerald-950">Book Now</div>
                </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-md p-4 max-w-sm">
                <img className="rounded-lg w-full" src={img} />
                <div className="mt-4">
                    <div className="text-xl font-bold text-sky-500">Private Villa</div>
                    <div className="mt-1 font-bold text-white">
                        <a className="hover:underline hover:text-sky-500" href="#">Relaxing All-Inclusive Resort in Cancun</a>
                    </div>
                    <div className="mt-2 text-sm text-gray-300">$299 USD per night</div>
                    <div className="text-white font-bold bg-black w-fit px-6 py-3 mt-4 rounded-2xl hover:bg-white hover:text-emerald-950">Book Now</div>
                </div>
            </div>
        </div>
    )
}

export default Services