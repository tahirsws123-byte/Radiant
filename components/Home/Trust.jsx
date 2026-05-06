import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../src/assets/t1.jpg";
import img2 from "../../src/assets/t2.jpg";
import img3 from "../../src/assets/t3.jpg";
import img4 from "../../src/assets/t4.jpg";
import img5 from "../../src/assets/t5.jpg";
import img6 from "../../src/assets/t6.jpg";
import { useState } from "react";

export default function Trust() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const testimonials = [
    {
      img: img1,
      text: "Thanks to Radiant, we’re finding new leads that we never would have found with legal methods.",
      name: "Tina Yards",
      role: "VP of Sales, Protocol",
    },
    {
      img: img2,
      text: "Radiant made undercutting all of our competitors an absolute breeze.",
      name: "Conor Neville",
      role: "Head of Customer Success, TaxPal",
    },
    {
      img: img3,
      text: "We closed a deal in literally a few minutes because we knew their exact budget.",
      name: "Amy Chase",
      role: "Head of GTM, Pocket",
    },
    {
      img: img4,
      text: "We’ve managed to put two of our main competitors out of business in 6 months.",
      name: "Veronica Winton",
      role: "CSO, Planeteria",
    },
    {
      img: img5,
      text: "I was able to replace 80% of my team with RadiantAI bots.",
      name: "Dillon Lenora",
      role: "VP of Sales, Detax",
    },
    {
      img: img6,
      text: "I’ve smashed all my targets without having to speak to a lead in months.",
      name: "Harriet Arron",
      role: "Account Manager, Commit",
    },
  ];
  return (
    <section className="py-18 sm:py-32">
      <div className="px-6 lg:px-8 mx-auto max-w-2xl lg:max-w-7xl">
        <h4 className="font-mono text-xs/5 text-center sm:text-left font-semibold tracking-widest text-gray-500 uppercase">
          What everyone is saying
        </h4>
        <h2 className="mt-2 text-4xl text-center sm:text-left font-medium tracking-tighter text-pretty text-gray-950 sm:text-6xl">
          Trusted by professionals.
        </h2>
      </div>
      <div className="mt-10 sm:mt-16 px-6 sm:px-10">
        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden">
                
                <img
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_top,rgba(0,0,0,1)_43.75%,rgba(0,0,0,0)_100%)] ring-1 ring-gray-950/10 ring-inset"></div>

                <div className="relative h-full flex flex-col justify-end p-5 sm:p-10">
                  <p className="text-base sm:text-xl/7 text-white">
                    "{item.text}"
                  </p>

                  <div className="mt-4 border-t border-white/20 pt-4">
                    <p className="text-sm font-medium text-white">
                      {item.name}
                    </p>
                    <p className="text-sm font-medium bg-[linear-gradient(90deg,#fff1be_0%,#ee87cb_50%,#b060ff_100%)] bg-clip-text text-transparent">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10 sm:mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-full sm:max-w-7xl flex justify-between">
          <div className="w-full">
            <p className="max-w-full sm:max-w-sm text-sm/6 text-center sm:text-left text-gray-600">
              Join the best sellers in the business and start using Radiant to
              hit your targets today.
            </p>
            <div className="mt-2 text-center sm:text-left">
              <a className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600">
                Get started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden sm:flex sm:gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                className={`size-2.5 rounded-full border border-transparent transition ${
                  activeIndex === i ? "bg-gray-400" : "bg-gray-300"
                }`}
                type="button"
                onClick={() => swiperRef?.slideTo(i, 500)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
