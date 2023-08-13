import React from "react";
import "../App.css";
import Marquee from "./Marquee";

export default function TrainingAndPlacement() {
  return (
    <div>
      <header class="banner-img w-full h-96  bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <h1 class=" text-center text-4xl text-white font-bold drop-shadow-lg">
            Welcome to
            <span class=" text-blue-500 ml-2">
              Training And Placement <br />
            </span>
          </h1>
          <p class="mt-5 text-center text-lg text-white">
            {" "}
            Our online registration form is designed to make the admission
            process smooth and hassle-free for you.{" "}
          </p>
          <p class="text-center text-lg text-white">
            Here, you can take the first step towards a bright future and embark
            on an exciting educational journey with us.
          </p>

          <a
            class="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
            href="#"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* content Training */}
      <div className="relative bg-purple-400">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-4xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Training &
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900">Placement</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Training and Placement play a pivotal role in bridging the gap
              between academic learning and practical industry demands. In the
              modern landscape of education, the emphasis on these aspects has
              become more critical than ever before. The seamless integration of
              theoretical knowledge and practical skills is essential to produce
              well-rounded professionals who are ready to excel in their chosen
              fields.
            </p>

            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Effective training programs provide students with hands-on
              experience that complements their classroom education. These
              programs are designed to equip students with industry-specific
              skills, enhance their problem-solving abilities, and expose them
              to real-world scenarios. The importance of training lies in its
              ability to provide students with a taste of what their
              professional life will entail, preparing them for the challenges
              and opportunities ahead.
            </p>
          </div>
        </div>
      </div>

      {/* img  */}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"></div>
                <img src="https://images.pexels.com/photos/8390636/pexels-photo-8390636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"></div>
                <img src="https://images.pexels.com/photos/8390636/pexels-photo-8390636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"></div>
                <img src="https://images.pexels.com/photos/8390636/pexels-photo-8390636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content Training end */}

      {/* Placement */}
      <div class=" bg-indigo-50">
        <header>
          <h1 class=" py-6 text-center text-3xl font-bold text-gray-700">
            Desired some Successful Placement{" "}
         
          </h1>

          <hr class="w-20 h-1 mx-auto bg-gradient-to-r from-red-400 via-purple-500 to-indigo-600 border-0 rounded"></hr>
        
        </header>
        <section class="min-h-screen body-font text-gray-600 ">
          <div class="container mx-auto px-5 py-10" data-aos="fade-up">
            <div class="-m-4 flex flex-wrap">

              <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4" data-aos="fade-up">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4" data-aos="fade-up">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4" data-aos="fade-up">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
              <div class="w-full p-4 md:w-1/2 lg:w-1/4" data-aos="fade-up">
                <a class="relative block h-48 overflow-hidden rounded">
                  <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                      alt="Louvre"
                    />
                  </div>
                </a>
             
              </div>
 </div>
          </div>
          {/* partners  */}
<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-shadow-part">Our Training & Placement Partner</h1>
      <Marquee />
    </div>
{/* partners end */}
        </section>
      </div>

      {/* Placement End */}



    </div>
  );
}
