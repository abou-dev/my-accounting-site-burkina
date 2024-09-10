"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';


export default function Contact() {
  const bannerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(formRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(infoRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="relative h-96 mb-12">
        <Image 
          src="/images/hero-image.jpg" 
          alt="Contact Banner" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="rounded-lg shadow-lg"
        />
        <div 
          ref={bannerRef} 
          className="absolute top-0 right-0 bg-blue-800 text-white p-8 rounded-lg shadow-lg transform translate-y-12 translate-x-12"
        >
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </div>

      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">NOUS AIMERIONS RECEVOIR DE VOS NOUVELLES</h2>
        <p className="text-gray-600 mb-8">RESTEZ CONNECTÉ</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div ref={formRef} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Laissez nous un message</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Votre nom" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Message" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                ENVOYEZ LE MESSAGE
              </button>
            </form>
          </div>

          <div ref={infoRef} className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <p className="mb-4">
            11 BP 1529 Ouagadougou CMS 11
            Song Naaba Cité Asecna<br />
              <a href="mailto:contact@mac-bf.com" className="text-blue-600 hover:underline"> contact@mac-bf.com</a><br />
              <a href="mailto:jlegma@mac-bf.com" className="text-blue-600 hover:underline"> jlegma@mac-bf.com</a><br />           
              <a href="tel:+22670564770" className="text-blue-600 hover:underline">+226 70 56 47 70</a><br />  
              <a href="tel:+22679470554" className="text-blue-600 hover:underline">+226 79 47 05 54</a><br />
              <a href="tel:+22674448442" className="text-blue-600 hover:underline">+226 74 44 84 42</a><br />  


            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6"/>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6"/>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
