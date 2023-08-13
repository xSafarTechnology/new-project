import React from "react";
import SocialProof from "./SocialProof";
import "aos/dist/aos.css";

export default function About() {
  return (
    <div>
      {/* hero start  */}

      <section class="relative py-10 lg:py-36 bg-white">
        <div class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 lg:flex-row gap-10 lg:gap-12 flex flex-col-reverse">
          <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
          </div>
          <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
          <div
            class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
            data-aos="fade-right"
     data-aos-duration="2000"
          >
            <h1
              class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
            >
              Welcome to{" "} <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 mb-2">
             College Name <br/>
              </span>
              
            </h1>

            
            <h5
              class="leading-tight sm:text-xl md:text-xl xl:text-xl
            font-bold text-gray-900 mt-3"
            >
            Building a Brighter 
              <span class="text-transparent bg-clip-text bg-gradient-to-tl from-purple-700 via-fuchsia-800 to-pink-900 ml-1">
               Future Together
              </span>
              
            </h5>


            <p class="mt-8 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              repellat perspiciatis aspernatur quis voluptatum porro incidunt,
              libero sequi quos eos velit
            </p>
            <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div class="flex sm:flex-row flex-col gap-5 w-full">
             
              </div>
            </div>
          </div>

          <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl" data-aos="fade-left"
                data-aos-duration="2000">
            <img
              src="https://agencex-astro.vercel.app/images/image1.webp"
              alt="Hero image"
              width="2350"
              height="2359"
              class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </section>

      {/* hero end */}


{/* About us  */} 
<section class="text-gray-600 bg-gray-100 body-font p-10 shadow-md">
  <div class="container px-5 py-10 mx-auto flex flex-wrap items-center">

  <div class="
  lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"
  data-aos="fade-right"
     data-aos-duration="2000">
    <img src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="shadow-lg shadow-gray-500"/> 
    </div>
    
    <div class="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
    data-aos="fade-left"
    data-aos-duration="2000">
      <h1 class="title-font  text-3xl text-info-600 font-bold">About College</h1>
      
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
       

      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
       

      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
       

      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
       
 </div>
   
    
 
  </div>
</section>

{/* About us End */}

<hr
  class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

{/* what we do  */} 
 
 
<section class="text-gray-600 bg-gray-100 body-font p-10 shadow-md">
  <div class="container px-5 py-10 mx-auto flex flex-wrap items-center"
  data-aos="fade-right"
  data-aos-duration="2000">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Who We Are ?</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>

      <h1 class="title-font font-medium pt-3 text-3xl text-gray-900">What we Will Do ?</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
 </div>
   
    
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
    data-aos="fade-left"
    data-aos-duration="2000">
    <img src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="shadow-lg shadow-gray-500"/> 
    </div>
  </div>
</section>
{/* what we do End */}

<hr class="w-120 h-1 mx-auto my-1 bg-gradient-to-r from-red-400 via-purple-500 to-indigo-600 border-0 rounded md:my-1 dark:bg-gradient-to-r from-red-400 via-purple-500 to-indigo-600"></hr>

{/* mission vision */}

<section class="text-gray-600 bg-gray-100 body-font p-10 shadow-md">
  <div class="container px-5 py-10 mx-auto flex flex-wrap items-center">

  <div class="
  lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"
  data-aos="fade-right"
     data-aos-duration="2000">
    <img src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="shadow-lg shadow-gray-500"/> 
    </div>
    
    <div class="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0"
    data-aos="fade-left"
    data-aos-duration="2000">
      <h1 class="title-font  text-3xl text-info-600 font-bold">Our Mission</h1>
      
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
       
      <h1 class="title-font  text-3xl text-info-600 font-bold">Our Vision</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
       
 </div>
   
    
 
  </div>
</section>

{/* mission vision end */}

{/* director say */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10" data-aos="fade-right"
     data-aos-duration="2000">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-4xl font-extrabold leading-none">
          From the Desk of  
  
            <span className="inline-block text-blue-500">
            Admission  Director
            </span>
          </h5>
          <p className="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-end space-x-4">
             <p className="text-end" >Director Name</p>
          </div>
        </div>
        <div data-aos="fade-left"
     data-aos-duration="2000">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
{/* director say end */}

<hr class="w-120 h-1 mx-auto my-1 bg-gradient-to-r from-red-400 via-purple-500 to-indigo-600 border-0 rounded md:my-1 dark:bg-gradient-to-r from-red-400 via-purple-500 to-indigo-600"></hr>







{/* social Proof */}
<SocialProof/>
 {/* social Proof end */}
</div>
  );
}
