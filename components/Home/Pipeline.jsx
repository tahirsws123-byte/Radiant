import p1 from '../../src/assets/p1.png'

function Pipeline() {
    return (
        <section className="hidden sm:block px-6 sm:px-8">
            <div className="">
                <div className="">
                    <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 text-center sm:text-left sm:text-left sm:text-6xl">A snapshot of your entire sales pipeline.</h2>
                    <div className='hidden sm:block w-full overflow-hidden object-none'>
                        <div className='p-2 rounded-lg ring-1 ring-black/5 mt-[58px] w-full xl:w-[1215px] lg:h-[768px] '>
                            <img src={p1} className="rounded-xl shadow-2xl ring-1 ring-black/10 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[768px] w-full xl:w-[1215px]" alt="pipeline" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pipeline