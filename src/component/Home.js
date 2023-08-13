import React from "react";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div>
      {/* // hero start  */}

      <section class="bg-gray-800 ">
        

        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2 "
          data-aos="fade-right"
          data-aos-duration="2000">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                Where Dreams Take Flight
                <br /> Welcome to College
              </h1>

              <div class="mt-8 space-y-5">
                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="mx-2">Innovate, Educate, Elevate</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="mx-2">Where Knowledge Meets Innovation</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span class="mx-2">Transforming Dreams into Reality</span>
                </p>
              </div>
            </div>

            <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form class="flex flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="button"
                  class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Join Us
                </button>
              </form>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2 ">
            <img data-aos="fade-left"
              class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>

      {/* //hero end */}

      {/* college info  */}

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center"
          data-aos="zoom-out-right"
          data-aos-duration="3000">
            <div className="max-w-xl mb-6"
            
            >
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{" "}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                    a lazy dog
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper
                    fluke to go on account heave down.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    A business big enough that it could be listed
                  </h6>
                  <p className="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me
                    an email clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img data-aos="fade-left"
                data-aos-duration="2000"
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* college info end  */}

      {/* <message from college */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
     
      >
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
           data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img src="img/university.png" />
                </div>
                <h6 className="font-semibold leading-5">
                  MESSAGES FROM INSTITUTE
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mt-3"
              >
                <button
                  class="middle none center mr-4 rounded-lg bg-red-500 py-2 px-3  font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
          
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img src="img/admins-icon.png" />
                </div>
                <h6 className="font-semibold leading-5">
                  MESSAGE FROM ADMISSION DIRECTOR
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mt-3"
              >
                <button
                  class="middle none center mr-4 rounded-lg bg-red-500 py-2 px-3  font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
           data-aos="flip-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000"
           
           >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-white rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                  <img src="img/placement-icon.png" />
                </div>
                <h6 className="font-semibold leading-5">
                  MESSAGE FROM PLACEMENT CELL
                </h6>
              </div>
              <p className="mb-2 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mt-3"
              >
                <button
                  class="middle none center mr-4 rounded-lg bg-red-500 py-2 px-3  font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <message from college end */}

      {/* courses */}
      <div class=" bg-indigo-50">
        <div class="text-center w-full place-items-center overflow-x-scroll rounded-lg p-4 lg:overflow-visible">
          <button
            class="text-purple-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 md:text-4xl"
            type="button"
          >
            Our Most Popular Courses
          </button>
        </div>

        <section class=" body-font text-gray-600 ">
          <div class="container mx-auto px-5">
            <div class="-m-4 flex flex-wrap">
              <div class="w-full p-4 md:w-1/2 lg:w-1/4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              >
                <a class="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="hospitality"
                    class="block h-full w-full object-cover object-center cursor-pointer"
                    src="img/hospitality.jpg"
                  />
                </a>
                <div class="mt-4">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    BBA in Hospitality & Tourism Management
                  </h2>
                  <p class="mt-1 mb-3">New Batch from 2024</p>
                </div>
              </div>

              <div class="w-full p-4 md:w-1/2 lg:w-1/4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              >
                <a class="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="hospitality"
                    class="block h-full w-full object-cover object-center cursor-pointer"
                    src="img/hotel-management.jpg"
                  />
                </a>
                <div class="mt-4">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    B.sc in Hotel Management
                  </h2>
                  <p class="mt-1 mb-3">New Batch from 2024</p>
                </div>
              </div>

              <div class="w-full p-4 md:w-1/2 lg:w-1/4"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              >
                <a class="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="hospitality"
                    class="block h-full w-full object-cover object-center cursor-pointer"
                    src="img/mha.jpg"
                  />
                </a>
                <div class="mt-4">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Master in Hospital Administration (MHA)
                  </h2>
                  <p class="mt-1 mb-3">New Batch from 2024</p>
                </div>
              </div>

              <div class="w-full p-4 md:w-1/2 lg:w-1/4"
                   data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom">
                <a class="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="hospitality"
                    class="block h-full w-full object-cover object-center cursor-pointer"
                    src="img/mba-hospitality.jpg"
                  />
                </a>
                <div class="mt-4">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    MBA in Hospitality & Tourism Management
                  </h2>
                  <p class="mt-1 mb-3">New Batch from 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* courses end */}

      {/* advantages of our college  */}

      <header class="bg-white shadow-md">
        <div class="flex justify-between items-center py-2 px-5 border-b-2 border-gray-200"></div>
      </header>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Advantage @College
              </h2>

              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  JOB BOND Letter at the Time of Admission.
                </h2>
              </div>
              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  Free Study Material.
                </h2>
              </div>
              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  Separate Hostel For Girls & Boys.
                </h2>
              </div>
              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  Guidance for Education Loan.
                </h2>
              </div>
              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  Job and Training in Abroad on Special Courses.
                </h2>
              </div>
              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  Annual Excursion, Food Festival and Annual Day Celebration
                  with Cultural Function.
                </h2>
              </div>
              <div className="flex">
                <img
                  className="w-5 h-5 mt-1"
                  data-aos="fade-right"
                  src="img/circle.png"
                />
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-black ml-3">
                  Progress Report to Parents Every Six Month.
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3"data-aos="fade-down-right" >
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div className="px-3" data-aos="fade-down-left">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
        </div>
      </div>

      {/* advantages of our college End */}

      {/* award ceremony */}

      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-5 mx-auto ">
          <div class="flex flex-wrap -m-4 border-2 border-sky-500 rounded-md">
            <div class="p-4 md:w-1/3" data-aos="fade-up"
     data-aos-duration="3000">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-58 md:h-46 w-full object-cover object-center"
                  src="https://images.pexels.com/photos/17180091/pexels-photo-17180091/free-photo-of-naval-academy-students-raising-their-cups-up-during-graduation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="blog cover"
                />

                <div class="p-4 text-center">
                  {/* <h1 class="title-font text-2xl font-medium text-gray-800 mb-3">Affiliation & Collaboration</h1> */}
                  {/* <button class="rounded border-2 border-red-500 px-4 py-2  mb-3 font-medium text-red-500 transition duration-200 hover:bg-red-600/5 text-2xl ">
        Affiliation & Collaboration
                </button> */}

                  <button class="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                    Affiliation & Collaboration
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3" data-aos="fade-up"
     data-aos-duration="3000">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-58 md:h-46 w-full object-cover object-center"
                  src="https://images.pexels.com/photos/6565255/pexels-photo-6565255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="blog cover"
                />

                <div class="p-4 text-center">
                  {/* <h1 class="title-font text-2xl font-medium text-gray-800 mb-3">Affiliation & Collaboration</h1> */}
                  {/* <button class="rounded border-2 border-red-500 px-4 py-2  mb-3 font-medium text-red-500 transition duration-200 hover:bg-red-600/5 text-2xl ">
        Affiliation & Collaboration
                </button> */}

                  <button class="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                    Awards Ceremony
                  </button>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3" data-aos="fade-up"
     data-aos-duration="3000">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-58 md:h-46 w-full object-cover object-center"
                  src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="blog cover"
                />

                <div class="p-4 text-center">
                  {/* <h1 class="title-font text-2xl font-medium text-gray-800 mb-3">Affiliation & Collaboration</h1> */}
                  {/* <button class="rounded border-2 border-red-500 px-4 py-2  mb-3 font-medium text-red-500 transition duration-200 hover:bg-red-600/5 text-2xl ">
        Affiliation & Collaboration
                </button> */}

                  <button class="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                    Successful Placement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* award ceremony end */}

      {/* Gallery */}
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-20">
        {/* heading */}

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-gray-700 text-center">
          Gallery
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 text-center dark:text-gray-400">
          Some Pictures of College During placement and Classes
        </p>

        {/* heading End */}

        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2 overflow-hidden" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2 overflow-hidden" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2 overflow-hidden" data-aos="zoom-in">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2 overflow-hidden" data-aos="zoom-in">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2 overflow-hidden" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2 overflow-hidden" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Gallery End */}

      {/* news  */}
      <hr />
      <div class=" bg-gray-100 p-2 rounded-md">
        <div class="text-center w-full place-items-center overflow-x-scroll rounded-lg p-4 lg:overflow-visible">
          <button
            class="text-purple-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 md:text-4xl"
            type="button"
          >
            News & Notice
          </button>
        </div>

        <section class=" body-font text-gray-600">
          <div class="container mx-auto px-5">
            <div class="-m-4 flex flex-wrap p-10">

              {/* cards start */}
              <div class="  my-4 relative mx-auto w-full max-w-sm pb-4  p-2 rounded-md border border-sky-500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
                <p
                   
                  class=" relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                >
                  <div class="rounded-lg">
                    <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                          src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
 
                      <span class="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {" "}
                        Article{" "}
                      </span>
                    </div>

                    <div class="">
                      <div class="mt-4 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <h2
                              class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title="New York"
                            >
                             New Article
                            </h2>                            
                          </div>
                        </div>

                        <div class="flex items-center justify-end">
                          <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                           
                            <span class="text-lg">24-July-2023</span> 
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 border-t border-gray-200 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed laboriosam labore obcaecati hic fugit exercitationem
                        ad blanditiis inventore excepturi cumque!
                      </div>
<div className="text-center">  
  <button class="border border-emerald-500 rounded-md p-2 text-lg bg-emerald-500 text-gray-100 hover:bg-slate-100 hover:text-emerald-700 ">Learn More</button>

                    </div>

                    </div>
                  </div>
                </p>
              </div>
              {/* cards end  */}

              
              {/* cards start */}
              <div class="  my-4 relative mx-auto w-full max-w-sm pb-4  p-2 rounded-md border border-sky-500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
                <p
                   
                  class=" relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                >
                  <div class="rounded-lg">
                    <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                          src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
 
                      <span class="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {" "}
                        Article{" "}
                      </span>
                    </div>

                    <div class="">
                      <div class="mt-4 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <h2
                              class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title="New York"
                            >
                             New Article
                            </h2>                            
                          </div>
                        </div>

                        <div class="flex items-center justify-end">
                          <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                           
                            <span class="text-lg">24-July-2023</span> 
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 border-t border-gray-200 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed laboriosam labore obcaecati hic fugit exercitationem
                        ad blanditiis inventore excepturi cumque!
                      </div>
<div className="text-center">  
  <button class="border border-emerald-500 rounded-md p-2 text-lg bg-emerald-500 text-gray-100 hover:bg-slate-100 hover:text-emerald-700 ">Learn More</button>

                    </div>

                    </div>
                  </div>
                </p>
              </div>
              {/* cards end  */}

              
              {/* cards start */}
              <div class="  my-4 relative mx-auto w-full max-w-sm pb-4  p-2 rounded-md border border-sky-500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
                <p
                   
                  class=" relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                >
                  <div class="rounded-lg">
                    <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                          src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
 
                      <span class="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {" "}
                        Article{" "}
                      </span>
                    </div>

                    <div class="">
                      <div class="mt-4 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <h2
                              class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title="New York"
                            >
                             New Article
                            </h2>                            
                          </div>
                        </div>

                        <div class="flex items-center justify-end">
                          <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                           
                            <span class="text-lg">24-July-2023</span> 
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 border-t border-gray-200 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed laboriosam labore obcaecati hic fugit exercitationem
                        ad blanditiis inventore excepturi cumque!
                      </div>
<div className="text-center">  
  <button class="border border-emerald-500 rounded-md p-2 text-lg bg-emerald-500 text-gray-100 hover:bg-slate-100 hover:text-emerald-700 ">Learn More</button>

                    </div>

                    </div>
                  </div>
                </p>
              </div>
              {/* cards end  */}

              
              {/* cards start */}
              <div class="  my-4 relative mx-auto w-full max-w-sm pb-4  p-2 rounded-md border border-sky-500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
                <p
                   
                  class=" relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                >
                  <div class="rounded-lg">
                    <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                          src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
 
                      <span class="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {" "}
                        Article{" "}
                      </span>
                    </div>

                    <div class="">
                      <div class="mt-4 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <h2
                              class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title="New York"
                            >
                             New Article
                            </h2>                            
                          </div>
                        </div>

                        <div class="flex items-center justify-end">
                          <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                           
                            <span class="text-lg">24-July-2023</span> 
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 border-t border-gray-200 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed laboriosam labore obcaecati hic fugit exercitationem
                        ad blanditiis inventore excepturi cumque!
                      </div>
<div className="text-center">  
  <button class="border border-emerald-500 rounded-md p-2 text-lg bg-emerald-500 text-gray-100 hover:bg-slate-100 hover:text-emerald-700 ">Learn More</button>

                    </div>

                    </div>
                  </div>
                </p>
              </div>
              {/* cards end  */}

              
              {/* cards start */}
              <div class="  my-4 relative mx-auto w-full max-w-sm pb-4  p-2 rounded-md border border-sky-500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
                <p
                   
                  class=" relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                >
                  <div class="rounded-lg">
                    <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                          src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
 
                      <span class="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {" "}
                        Article{" "}
                      </span>
                    </div>

                    <div class="">
                      <div class="mt-4 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <h2
                              class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title="New York"
                            >
                             New Article
                            </h2>                            
                          </div>
                        </div>

                        <div class="flex items-center justify-end">
                          <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                           
                            <span class="text-lg">24-July-2023</span> 
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 border-t border-gray-200 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed laboriosam labore obcaecati hic fugit exercitationem
                        ad blanditiis inventore excepturi cumque!
                      </div>
<div className="text-center">  
  <button class="border border-emerald-500 rounded-md p-2 text-lg bg-emerald-500 text-gray-100 hover:bg-slate-100 hover:text-emerald-700 ">Learn More</button>

                    </div>

                    </div>
                  </div>
                </p>
              </div>
              {/* cards end  */}

              
              {/* cards start */}
              <div class="  my-4 relative mx-auto w-full max-w-sm pb-4  p-2 rounded-md border border-sky-500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
                <p
                   
                  class=" relative inline-block w-full transform transition-transform duration-300 ease-in-out"
                >
                  <div class="rounded-lg">
                    <div class="relative flex h-60 justify-center overflow-hidden rounded-lg">
                      <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                        <img
                          src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
 
                      <span class="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                        {" "}
                        Article{" "}
                      </span>
                    </div>

                    <div class="">
                      <div class="mt-4 grid grid-cols-2">
                        <div class="flex items-center">
                          <div class="relative">
                            <h2
                              class="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                              title="New York"
                            >
                             New Article
                            </h2>                            
                          </div>
                        </div>

                        <div class="flex items-center justify-end">
                          <p class="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                           
                            <span class="text-lg">24-July-2023</span> 
                          </p>
                        </div>
                      </div>

                      <div class="mt-2 border-t border-gray-200 pt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed laboriosam labore obcaecati hic fugit exercitationem
                        ad blanditiis inventore excepturi cumque!
                      </div>
<div className="text-center">  
  <button class="border border-emerald-500 rounded-md p-2 text-lg bg-emerald-500 text-gray-100 hover:bg-slate-100 hover:text-emerald-700 ">Learn More</button>

                    </div>

                    </div>
                  </div>
                </p>
              </div>
              {/* cards end  */}

              


 

            </div>
          </div>
        </section>

      </div>
      

      {/* news end */}

{/* testimonial */}
<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="items-end justify-between sm:flex">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <p className="mt-8 max-w-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          praesentium natus sapiente commodi. Aliquid sunt tempore iste
          repellendus explicabo dignissimos placeat, autem harum dolore
          reprehenderit quis! Quo totam dignissimos earum.
        </p>
      </div>

      <a
        href="#"
        className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-600 px-5 py-3 font-medium text-pink-600 hover:bg-pink-600 hover:text-white sm:mt-0 lg:mt-8"
      >
        Read all reviews

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
              ab laudantium vel.
            </p>
          </div>
        </div>

        <footer className="mt-8 text-gray-500">Eddie Murphy</footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
              ab laudantium vel.
            </p>
          </div>
        </div>

        <footer className="mt-8 text-gray-500">Eddie Murphy</footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
              ab laudantium vel.
            </p>
          </div>
        </div>

        <footer className="mt-8 text-gray-500">Eddie Murphy</footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
              ab laudantium vel.
            </p>
          </div>
        </div>

        <footer className="mt-8 text-gray-500">Eddie Murphy</footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
              ab laudantium vel.
            </p>
          </div>
        </div>

        <footer className="mt-8 text-gray-500">Eddie Murphy</footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-white p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-pink-600 sm:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              cumque recusandae dolorum porro, quasi sunt necessitatibus dolorem
              ab laudantium vel.
            </p>
          </div>
        </div>

        <footer className="mt-8 text-gray-500">Eddie Murphy</footer>
      </blockquote>
    </div>
  </div>
</section>
{/* testimonial End */}

{/* contact form  */} 

 
<section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] p-16">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap lg:justify-between">
      <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
        <div class="mb-12 max-w-[570px] lg:mb-0">
          <span class="text-primary mb-4 block text-base font-semibold">
            Contact Us
          </span>
          <h2
            class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
          >
            GET IN TOUCH WITH US
          </h2>
          <p class="text-body-color mb-9 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Our Location</h4>
              <p class="text-body-color text-base">
                99 S.t Jomblo Park Pekanbaru 28292. Indonesia
              </p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                class="fill-current"
              >
                <path
                  d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"
                />
                <path
                  d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"
                />
                <path
                  d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Phone Number</h4>
              <p class="text-body-color text-base">(+62)81 414 257 9980</p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="28"
                height="19"
                viewBox="0 0 28 19"
                class="fill-current"
              >
                <path
                  d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Email Address</h4>
              <p class="text-body-color text-base">info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div class="relative rounded-lg bg-gray-200 p-8 shadow-lg sm:p-12">
          <form>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                class="text-body-color border-[f0f0f0] focus:border-blue-700 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                class="text-body-color border-[f0f0f0] focus:border-blue-700 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                class="text-body-color border-[f0f0f0] focus:border-blue-700 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                class="text-body-color border-[f0f0f0] focus:border-blue-700 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="bg-blue-800 border-blue-800 w-full rounded border p-3 text-white transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
          <div>
            <span class="absolute -top-10 -right-9 z-[-1]">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span class="absolute -right-10 top-[90px] z-[-1]">
              <svg
                width="34"
                height="134"
                viewBox="0 0 34 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 31.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 31.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 31.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 31.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 31.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 31.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 31.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 31.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 31.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 31.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 17.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 17.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 17.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 17.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 17.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 17.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 17.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 17.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 17.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 17.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 2.66536 132)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 2.66536 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 2.66536 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 2.66536 88)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 2.66536 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 2.66536 45)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 2.66536 16)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 2.66536 59)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 2.66536 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 2.66536 1.66665)"
                  fill="#13C296"
                />
              </svg>
            </span>
            <span class="absolute -left-7 -bottom-7 z-[-1]">
              <svg
                width="107"
                height="134"
                viewBox="0 0 107 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="104.999"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 104.999 132)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 104.999 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 104.999 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 104.999 88)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 104.999 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 104.999 45)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 104.999 16)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 104.999 59)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 104.999 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="104.999"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 104.999 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 90.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 90.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 90.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 90.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 90.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 90.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 90.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 90.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 90.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="90.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 90.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 75.6654 132)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 31.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 75.6654 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 31.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 75.6654 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 31.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 75.6654 88)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 31.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 75.6654 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 31.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 75.6654 45)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 31.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 75.6654 16)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 31.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 75.6654 59)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 31.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 75.6654 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 31.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="75.6654"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 75.6654 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="31.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 31.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 60.9993 132)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 17.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 60.9993 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 17.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 60.9993 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 17.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 60.9993 88)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 17.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 60.9993 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 17.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 60.9993 45)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 17.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 60.9993 16)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 17.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 60.9993 59)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 17.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 60.9993 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 17.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="60.9993"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 60.9993 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="17.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 17.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 46.3333 132)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="132"
                  r="1.66667"
                  transform="rotate(180 2.66536 132)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 46.3333 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="117.333"
                  r="1.66667"
                  transform="rotate(180 2.66536 117.333)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 46.3333 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="102.667"
                  r="1.66667"
                  transform="rotate(180 2.66536 102.667)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 46.3333 88)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="88"
                  r="1.66667"
                  transform="rotate(180 2.66536 88)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 46.3333 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="73.3333"
                  r="1.66667"
                  transform="rotate(180 2.66536 73.3333)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 46.3333 45)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="45"
                  r="1.66667"
                  transform="rotate(180 2.66536 45)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 46.3333 16)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="16"
                  r="1.66667"
                  transform="rotate(180 2.66536 16)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 46.3333 59)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="59"
                  r="1.66667"
                  transform="rotate(180 2.66536 59)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 46.3333 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="30.6666"
                  r="1.66667"
                  transform="rotate(180 2.66536 30.6666)"
                  fill="#13C296"
                />
                <circle
                  cx="46.3333"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 46.3333 1.66665)"
                  fill="#13C296"
                />
                <circle
                  cx="2.66536"
                  cy="1.66665"
                  r="1.66667"
                  transform="rotate(180 2.66536 1.66665)"
                  fill="#13C296"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 


{/* contact form end */}

    </div>
  );
}
