import img1 from "../../src/assets/r2.svg";
import img2 from "../../src/assets/r3.svg";
import img3 from "../../src/assets/r4.svg";
import img4 from "../../src/assets/r5.svg";
import img5 from "../../src/assets/r6.svg";
import img6 from "../../src/assets/r7.svg";
import img7 from "../../src/assets/r8.svg";
import img8 from "../../src/assets/r9.svg";
import img9 from "../../src/assets/r10.svg";
import img10 from "../../src/assets/r11.svg";
import img11 from "../../src/assets/r12.svg";
import img12 from "../../src/assets/r13.svg";
import img13 from "../../src/assets/r14.jpg";
import img14 from "../../src/assets/r15.jpg";
import img15 from "../../src/assets/r1.png";
import img16 from "../../src/assets/r16.png";

export default function Reach() {
  const circles = Array.from({ length: 42 }, (_, i) => 4 + i * 14);
  return (
    <section className="mx-2 mt-2 rounded-4xl bg-gray-900 py-12 sm:py-32">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h4 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
            Outreach
          </h4>
          <h2 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 dark:text-white sm:text-6xl">
            Customer outreach has never been easier.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl rounded-lg bg-white shadow-xs ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15">
              <div className="relative h-80 shrink-0">
                <div style={{ backgroundImage: `url(${img15})` }} className="h-80 bg-size-[851px_344px] bg-no-repeat"></div>
                <div className="absolute inset-0 bg-linear-to-b from-white to 50% dark:from-gray-800 dark:from-[-25%]"></div>
              </div>
              <div className="relative p-10">
                <h3
                  data-dark="true"
                  className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400"
                >
                  Networking
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 dark:text-white">
                  Sell at the speed of light
                </p>
                <p className="mt-2 max-w-150 text-sm/6 text-gray-600 dark:text-gray-400">
                  Our RadiantAI chat assistants analyze the sentiment of your
                  conversations in real time, ensuring you're always one step
                  ahead.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 lg:rounded-tr-4xl relative group rounded-lg bg-white shadow-xs ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15">
              <div className="relative h-80 shrink-0">
                <div
                  aria-hidden="true"
                  className="relative h-full overflow-hidden"
                >
                  <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
                    <div
                      className="absolute inset-0 backdrop-blur-md"
                      style={{
                        maskImage:
                          'url(\'data:image/svg+xml,%3Csvg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="96" height="96" rx="12" fill="black"/%3E%3C/svg%3E\')',
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                      }}
                    ></div>
                    <div className="relative flex size-24 items-center justify-center rounded-xl bg-linear-to-t from-white/5 to-white/25 shadow-sm ring-1 ring-white/10 outline outline-offset-[-5px] outline-white/5 ring-inset">
                      <svg
                        viewBox="0 0 34 34"
                        fill="none"
                        className="h-9 fill-white"
                      >
                        <path d="M19.598 18.5C18.7696 19.9349 16.9348 20.4265 15.4999 19.5981C14.065 18.7696 13.5734 16.9349 14.4018 15.5C15.2303 14.0651 17.065 13.5735 18.4999 14.4019C19.9348 15.2303 20.4264 17.0651 19.598 18.5Z"></path>
                        <path d="M23.232 10.2058C22.6797 11.1623 21.4565 11.4901 20.4999 10.9378C19.5433 10.3855 19.2156 9.16235 19.7679 8.20576C20.3201 7.24918 21.5433 6.92143 22.4999 7.47371C23.4565 8.026 23.7842 9.24918 23.232 10.2058Z"></path>
                        <path d="M19.7679 25.7944C19.2156 24.8378 19.5433 23.6146 20.4999 23.0623C21.4565 22.51 22.6797 22.8378 23.232 23.7944C23.7843 24.7509 23.4565 25.9741 22.4999 26.5264C21.5433 27.0787 20.3202 26.7509 19.7679 25.7944Z"></path>
                        <path d="M25.9999 19.0001C24.8953 19.0001 23.9999 18.1047 23.9999 17.0001C23.9999 15.8956 24.8953 15.0001 25.9999 15.0001C27.1045 15.0001 27.9999 15.8956 27.9999 17.0001C27.9999 18.1047 27.1045 19.0001 25.9999 19.0001Z"></path>
                        <path d="M14.232 25.7942C13.6797 26.7508 12.4565 27.0786 11.4999 26.5263C10.5433 25.974 10.2156 24.7508 10.7679 23.7942C11.3201 22.8376 12.5433 22.5099 13.4999 23.0622C14.4565 23.6145 14.7842 24.8376 14.232 25.7942Z"></path>
                        <path d="M10.7679 10.2059C10.2157 9.24936 10.5434 8.02618 11.5 7.4739C12.4566 6.92161 13.6798 7.24936 14.232 8.20595C14.7843 9.16253 14.4566 10.3857 13.5 10.938C12.5434 11.4903 11.3202 11.1625 10.7679 10.2059Z"></path>
                        <path d="M7.99999 19.0002C6.89542 19.0002 5.99999 18.1047 5.99999 17.0002C5.99999 15.8956 6.89542 15.0002 7.99999 15.0002C9.10456 15.0002 9.99999 15.8956 9.99999 17.0002C9.99999 18.1047 9.10456 19.0002 7.99999 19.0002Z"></path>
                        <path d="M25.8659 3.64359C25.5898 4.12188 24.9782 4.28575 24.4999 4.00961C24.0216 3.73347 23.8577 3.12188 24.1339 2.64359C24.41 2.16529 25.0216 2.00142 25.4999 2.27756C25.9782 2.5537 26.1421 3.16529 25.8659 3.64359Z"></path>
                        <path d="M33.0001 18.0002C32.4478 18.0002 32.0001 17.5524 32.0001 17.0002C32.0001 16.4479 32.4478 16.0002 33.0001 16.0002C33.5523 16.0002 34.0001 16.4479 34.0001 17.0002C34.0001 17.5524 33.5523 18.0002 33.0001 18.0002Z"></path>
                        <path d="M31.3561 9.86594C30.8778 10.1421 30.2663 9.97821 29.9901 9.49992C29.714 9.02162 29.8778 8.41003 30.3561 8.13389C30.8344 7.85775 31.446 8.02162 31.7222 8.49992C31.9983 8.97821 31.8344 9.5898 31.3561 9.86594Z"></path>
                        <path d="M30.3563 25.866C29.878 25.5899 29.7141 24.9783 29.9903 24.5C30.2664 24.0217 30.878 23.8578 31.3563 24.134C31.8346 24.4101 31.9985 25.0217 31.7223 25.5C31.4462 25.9783 30.8346 26.1422 30.3563 25.866Z"></path>
                        <path d="M16.0001 33.0001C16.0001 32.4478 16.4478 32.0001 17.0001 32.0001C17.5524 32.0001 18.0001 32.4478 18.0001 33.0001C18.0001 33.5524 17.5524 34.0001 17.0001 34.0001C16.4478 34.0001 16.0001 33.5524 16.0001 33.0001Z"></path>
                        <path d="M24.134 31.3566C23.8579 30.8783 24.0218 30.2667 24.5001 29.9905C24.9784 29.7144 25.59 29.8783 25.8661 30.3566C26.1422 30.8349 25.9784 31.4464 25.5001 31.7226C25.0218 31.9987 24.4102 31.8349 24.134 31.3566Z"></path>
                        <path d="M9.86593 31.3564C9.58978 31.8347 8.97819 31.9986 8.4999 31.7224C8.02161 31.4463 7.85773 30.8347 8.13388 30.3564C8.41002 29.8781 9.02161 29.7142 9.4999 29.9904C9.97819 30.2665 10.1421 30.8781 9.86593 31.3564Z"></path>
                        <path d="M1 18.0001C0.447715 18.0001 -3.44684e-08 17.5524 0 17.0001C3.44684e-08 16.4478 0.447715 16.0001 1 16.0001C1.55228 16.0001 2 16.4478 2 17.0001C2 17.5524 1.55228 18.0001 1 18.0001Z"></path>
                        <path d="M3.64329 25.866C3.16499 26.1422 2.5534 25.9783 2.27726 25.5C2.00112 25.0217 2.16499 24.4101 2.64329 24.134C3.12158 23.8578 3.73317 24.0217 4.00931 24.5C4.28545 24.9783 4.12158 25.5899 3.64329 25.866Z"></path>
                        <path d="M2.6435 9.86602C2.1652 9.58987 2.00133 8.97828 2.27747 8.49999C2.55361 8.0217 3.1652 7.85782 3.6435 8.13397C4.12179 8.41011 4.28566 9.0217 4.00952 9.49999C3.73338 9.97828 3.12179 10.1422 2.6435 9.86602Z"></path>
                        <path d="M16.0001 1C16.0001 0.447715 16.4478 -4.87226e-08 17.0001 0C17.5524 4.87226e-08 18.0001 0.447715 18.0001 1C18.0001 1.55228 17.5524 2 17.0001 2C16.4478 2 16.0001 1.55228 16.0001 1Z"></path>
                        <path d="M8.13398 3.64371C7.85783 3.16542 8.02171 2.55383 8.5 2.27768C8.97829 2.00154 9.58988 2.16542 9.86603 2.64371C10.1422 3.122 9.97829 3.73359 9.5 4.00973C9.02171 4.28588 8.41012 4.122 8.13398 3.64371Z"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="@container absolute inset-0 grid grid-cols-1 pt-8">
                    {[
                      {
                        items: [
                          { src: img1, name: "Loom", delay: "-26s" },
                          { src: img2, name: "Gmail", delay: "-8s" },
                        ],
                        duration: "30s",
                      },
                      {
                        items: [
                          { src: img3, name: "Asana", delay: "-40s" },
                          { src: img4, name: "Microsoft Teams", delay: "-20s" },
                        ],
                        duration: "40s",
                      },
                      {
                        items: [
                          { src: img5, name: "Google Calendar", delay: "-10s" },
                          { src: img6, name: "Google Drive", delay: "-32s" },
                        ],
                        duration: "40s",
                      },
                      {
                        items: [
                          { src: img7, name: "Basecamp", delay: "-45s" },
                          { src: img8, name: "Discord", delay: "-23s" },
                        ],
                        duration: "45s",
                      },
                      {
                        items: [
                          { src: img9, name: "Hubspot", delay: "-55s" },
                          { src: img10, name: "Slack", delay: "-20s" },
                        ],
                        duration: "60s",
                      },
                      {
                        items: [
                          {
                            src: img11,
                            name: "Adobe Creative Cloud",
                            delay: "-9s",
                          },
                          { src: img12, name: "Zoom", delay: "-28s" },
                        ],
                        duration: "40s",
                      },
                    ].map((row, idx) => (
                      <div key={idx} className="group relative">
                       
                        <div
                          className="absolute inset-x-0 top-1/2 h-px"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px)",
                          }}
                        ></div>

                        
                        <div
                          className="absolute inset-x-0 bottom-0 h-px group-last:hidden"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 12px)",
                          }}
                        ></div>

                        {row.items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              animationDelay: item.delay,
                              animationDuration: row.duration,
                            }}
                            className="absolute top-2 grid grid-cols-[1rem_1fr] items-center gap-2 px-3 py-1 whitespace-nowrap rounded-full bg-linear-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset [--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]"
                          >
                            <img alt="" src={item.src} className="size-4" />
                            <span className="text-sm/6 font-medium text-white">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                  Integrations
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 dark:text-white">
                  Meet leads where they are
                </p>
                <p className="mt-2 max-w-150 text-sm/6 text-gray-600 dark:text-gray-400">
                  With thousands of integrations, no one will be able to escape
                  your cold outreach.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 lg:rounded-bl-4xl relative group rounded-lg bg-white shadow-xs ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15">
              <div className="relative h-80 shrink-0">
                <div
                  aria-hidden="true"
                  className="isolate mx-auto grid h-full grid-cols-1"
                >
                
                  <svg
                    viewBox="0 0 500 500"
                    fill="none"
                    className="col-start-1 row-start-1 size-full mask-[linear-gradient(to_bottom,black_90%,transparent),radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] mask-intersect"
                  >
                    {circles.map((radius, i) => (
                      <circle
                        key={radius}
                        cx="250"
                        cy="250"
                        r={radius}
                        className="stroke-white animate-ripple" 
                        fill="none"
                        style={{
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </svg>

                
                  <div className="z-10 col-start-1 row-start-1">
                    <div className="mx-auto flex size-full max-w-md items-center justify-around">
                      <img
                        alt="Customer"
                        src={img13}
                        className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
                      />
                      <img
                        alt="Manager"
                        src={img14}
                        className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
                      />
                    </div>
                  </div>

                 
                  <div className="z-30 col-start-1 row-start-1 flex items-center justify-center">
                    <div
                      className="flex size-6 items-center justify-center rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] ring-2 ring-white/20"
                      style={{
                        background: "linear-gradient(to top, #22c55e, #86efac)", // Explicit gradient for visibility
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-4 fill-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative p-10">
                <h3
                  data-dark="true"
                  className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400"
                >
                  Meetings
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 dark:text-white">
                  Smart call scheduling
                </p>
                <p className="mt-2 max-w-150 text-sm/6 text-gray-600 dark:text-gray-400">
                  Automatically insert intro calls into your leads' calendars
                  without their consent.
                </p>
              </div>
            </div>
            <div className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl group relative flex flex-col rounded-lg bg-white shadow-xs ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/15">
              <div className="relative h-80 shrink-0">
                <div style={{ backgroundImage: `url(${img16})` }} className="h-80 bg-size-[851px_344px] bg-no-repeat"></div>
                <div className="absolute inset-0 bg-linear-to-b from-white to-50% dark:from-gray-800 dark:from-[-25%]"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                  Engagement
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 dark:text-white">
                  Become a thought leader
                </p>
                <p className="mt-2 max-w-150 text-sm/6 text-gray-600 dark:text-gray-400">
                  RadiantAI automatically writes LinkedIn posts that relate
                  current events to B2B sales, helping you build a reputation as
                  a thought leader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
