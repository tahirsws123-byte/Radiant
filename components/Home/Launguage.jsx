import img1 from '../../src/assets/l-1.svg'
import img2 from '../../src/assets/l-2.svg'
import img3 from '../../src/assets/l-3.svg'
import img4 from '../../src/assets/l-4.svg'
import img5 from '../../src/assets/l-5.svg'

function Launguage() {
    return (
        <section className="mt-10 px-6 lg:px-8">
            <div className="mx-auto">
                <div className="flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4">
                    <img className="h-9 max-sm:mx-auto sm:h-8 lg:h-12" src={img1} alt="img1" />
                    <img className="h-9 max-sm:mx-auto sm:h-8 lg:h-12" src={img2} alt="img2" />
                    <img className="h-9 max-sm:mx-auto sm:h-8 lg:h-12" src={img3} alt="img3" />
                    <img className="h-9 max-sm:mx-auto sm:h-8 lg:h-12" src={img4} alt="img4" />
                    <img className="h-9 max-sm:mx-auto sm:h-8 lg:h-12" src={img5} alt="img5" />
                </div>
            </div>
        </section>
    )
}

export default Launguage