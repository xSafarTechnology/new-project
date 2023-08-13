import React from 'react'
import '../App.css'

export default function Gallery() {
  return (
    <div>
      
      <header
        class="banner-img w-full h-96 bg-cover bg-center flex justify-center items-center" >
        <div class="flex flex-col justify-center items-center">
            <h1 class=" text-center text-4xl text-white font-bold drop-shadow-lg">Welcome to
            <span class=" text-blue-500 ml-2">
            Gallery <br/>
              </span>
            </h1>
            <p class="mt-5 text-center text-lg text-white"> Our online registration form is designed to make the admission process smooth and hassle-free for you. </p>
            <p class="text-center text-lg text-white">Here, you can take the first step towards a bright future and embark on an exciting educational journey with us.</p>
            
            <a class="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                href="#">Get Started</a>
        </div>
    </header>
   
   {/* detail img  */} 
   <div class="bg-gray-200 md:overflow-hidden">
  <div class="px-4 py-2">
    <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
      <h1
        class="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight  pt-8"
      >
        College Gallery 
      </h1>

      <p class="text-gray-600 md:text-xl md:px-18 mt-3">
       
Positioned for an Exceptional Tomorrow, Bright Horizons Institute is at the forefront of educational innovation, driven by unwavering devotion to shaping the prosperous destinies of our students. Our institution presents an unparalleled learning journey meticulously crafted to amplify cognitive advancement and foster active involvement. Enthusiastic individuals considering enrollment are cordially invited to explore our campus at their convenience.
      </p>

      <div
        class="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48"
        data-aos="zoom-in"
        data-aos-duration="3000"
      ></div>

      <div
        class="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-16"
      ></div>
    </div>
  </div>

  <svg
    class="fill-current bg-gray-200 text-white hidden md:block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill-opacity="1"
      d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-4">
  
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7713520/pexels-photo-7713520.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7713550/pexels-photo-7713550.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7713550/pexels-photo-7713550.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/12289463/pexels-photo-12289463.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7972464/pexels-photo-7972464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7944038/pexels-photo-7944038.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7713321/pexels-photo-7713321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7944236/pexels-photo-7944236.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/2513989/pexels-photo-2513989.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/4459755/pexels-photo-4459755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1628095/pexels-photo-1628095.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" data-aos="zoom-out" data-aos-duration="3000" />
        </div>
    </div>
</div>

   {/* detail img end */}

    </div>
  )
}
 