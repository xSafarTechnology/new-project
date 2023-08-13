import React from 'react'

export default function Courses() {
  return (
    <div>
      
    <header
      class="w-full h-96 bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('img/hero-services.jpg')" }}>
      <div class="flex flex-col justify-center items-center">
          <h1 class=" text-center text-4xl text-white font-bold drop-shadow-lg">Welcome to
          <span class=" text-blue-500 ml-2">
          Courses <br/>
            </span>
          </h1>
          <p class="mt-5 text-center text-lg text-white"> Our online registration form is designed to make the admission process smooth and hassle-free for you. </p>
          <p class="text-center text-lg text-white">Here, you can take the first step towards a bright future and embark on an exciting educational journey with us.</p>
          
          <a class="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
              href="#">Get Started</a>
      </div>
  </header>
  <div class="container p-20">
      <h1 class="text-4xl">Other Content</h1>
  </div>

  </div>
  )
}
 