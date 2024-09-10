"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import ChatBot from "react-chatbotify";

gsap.registerPlugin(TextPlugin);


export default function Home() {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);

  
 

  useEffect(() => {
    if (countRef.current) {
      const updateCount = () => {
        const increment = () => {
          setCount((prevCount) => {
            if (prevCount < 100) {
              return prevCount + 1;
            } else {
              clearInterval(intervalId);
              return 100;
            }
          });
        };
        const intervalId = setInterval(increment, 20); // Adjust the speed of the count animation here
      };

      gsap.to(countRef.current, {
        duration: 1.5,
        ease: "power2.out",
        textShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
        repeat: -1,
        yoyo: true,
      });

      updateCount();
    
    const hours = new Date().getHours();
    setIsNight(hours >= 18 || hours <= 6);
    if (textRef.current) {
      const textArray = [
        "Management",
        "Audit",
        "Consulting",
        "Cabinet d'expert comptable",
      ];
  
      const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
  
      textArray.forEach((text, index) => {
        timeline.to(textRef.current, {
          duration: 2,
          text: text,
          delay: index === 0 ? 0 : 1,
        });
      });
    }
  
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          duration: 10,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        }
      );
    }
  
const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
 
}
}, []);



  return (
    <div className={isNight ? "bg-gray-900 " : "bg-white text-black"}>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex flex-col justify-center items-center text-white text-center overflow-hidden z-10">
          <h1 ref={textRef} className="text-4xl font-bold text-white font-serif z-10">
            MAC Burkina
          </h1>
          <p className="mt-4 text-red-900 font-sans z-10">
            Votre partenaire en expertise comptable et conseil
          </p>
          <div
            ref={imageRef}
            className="absolute inset-0 h-[70vh] overflow-hidden z-0"
            style={{
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: "url('/images/banner2.webp')",
            }}
          ></div>
        </section>

        {/* Chatbot */}
        <div>
        

          <div
            className={`fixed bottom-20 right-4 w-80 h-96 z-40 transition-transform duration-300 ${
              isChatOpen ? "transform translate-y-0" : "transform translate-y-full"
            }`}
          >

          </div>
        </div>

        {/* Presentation Section */}
        <section className="bg-white py-12 shadow-md mt-8 relative z-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 p-6">
              <h2 className="text-2xl font-bold mb-4">MAC CONSULTING Burkina</h2>
              <p className="text-gray-700 mb-4">
              Monsieur Jules Remi Legma est un Expert-Comptable Diplômé et Commissaire aux Comptes, avec 14 ans d'expérience acquise au sein du cabinet Fiducia au Sénégal. Tout au long de sa carrière, il a dirigé de nombreuses missions d'expertise comptable, d'audit, et de conseil, apportant son expertise à divers clients.
              </p>
              <p className="text-gray-700">
              Fort de cette riche expérience, Monsieur Ousmaila a décidé de créer son propre cabinet d'expertise comptable, MAC Consulting Burkina Faso, afin de continuer à offrir des services de haute qualité en comptabilité et audit.
              </p>
              <p className="text-gray-700 mt-4">
              Monsieur Legma est titulaire du Diplôme d’Expertise Comptable et Financière (DECOFI) et du Diplôme d’Études Supérieures en Comptabilité et Gestion Financière (DESCOGEF) de l'Union Économique et Monétaire Ouest-Africaine (UEMOA) , du Master 2 en Audit et Contrôle de gestion  de L'Université Cheick Anta Diop de Dakar et du diplôme d'état dénommé DSC (Diplôme Supérieur de comptabilité).
              </p>
            </div>
            <div className="md:w-1/3 p-6">
              <Image
                src="/images/expert.jpg"
                alt="M. Jules Remi Legma"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="text-center mt-4 text-sm font-semibold">
              M. Jules Remi Legma
              </p>
              <p className="text-center text-sm text-gray-600">
                Expert comptable diplômé, M. Jules Remi Legma est l'associé gérant du cabinet MAC
              </p>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-between bg-blue-900 p-8 rounded-lg shadow-lg text-white">
      <div className="w-1/2 relative">
        <div className="relative overflow-hidden w-full h-full">
          <Image
            src="/images/service1.jpg" // Remplacez par le chemin de votre image
            alt="Calculating"
            width={500}
            height={300}
            className="rounded-l-lg transform rotate-6"
          />
        </div>
      </div>
      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-extrabold mb-4">
          CE QUE NOUS FAISONS ?
        </h2>
        <p className="text-lg leading-relaxed">
          Le cabinet MAC intervient spécifiquement dans les missions comptables
          et audits, les missions juridiques et fiscales, ainsi que les missions de conseils.
        </p>
      </div>
    </section>
    

        {/* Remaining Sections */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Notre Localisation</h2>
            <p className="text-gray-700 mb-8">
           11 BP 1529 Ouagadougou CMS 11
           Song Naaba Cité Asecna
            </p>
            <div className="relative w-full h-64">
              <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8380818070723!2d-1.5323230000000063!3d12.326683000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebf9a751ddf45%3A0x697357c84d2ff4f8!2sMANAGEMENT%20AUDIT%20AND%20CONSULTING%20(MAC%20CONSULTING)!5e0!3m2!1sfr!2scm!4v1724075178194!5m2!1sfr!2scm"    width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/auhiAmBkvXMeC3bQA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Voir la carte en grand
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div ref={serviceRef3} className="bg-white p-6 rounded-lg shadow">
            <Image
              src="/images/service3.jpg"
              width={500}
              height={300}
              alt="Service 3"
              style={{ objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-4">Expertise Comptable</h2>
            <p className="mt-2">
              Bénéficiez de services comptables de qualité.
            </p>
          </div>
          <div ref={serviceRef1} className="bg-white p-6 rounded-lg shadow">
            <Image
              src="/images/service1.jpg"
              width={500}
              height={300}
              alt="Service 1"
              style={{ objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-4">Audit Financier</h2>
            <p className="mt-2">
              Nos services d'audit financier garantissent la transparence et la conformité.
            </p>
          </div>
          <div ref={serviceRef2} className="bg-white p-6 rounded-lg shadow">
            <Image
              src="/images/service2.jpg"
              width={500}
              height={300}
              alt="Service 2"
              style={{ objectFit: "cover" }}
            />
            <h2 className="text-2xl font-bold mt-4">Conseil Fiscal</h2>
            <p className="mt-2">
              Optimisez vos processus fiscaux avec notre expertise.
            </p>
          </div>
        
        </section>

        <div className="bg-white py-12">
        <div className="container mx-auto text-center">
      <div className="flex justify-center items-center h-full">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3
            ref={countRef}
            className="text-6xl font-extrabold text-orange-600 transition-all duration-500 text-center"
          >
            {count}%
          </h3>
          <p className="mt-2 text-lg text-gray-700">Clients Satisfaits</p>
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300"
        >
          Contactez-nous
        </a>
      </div>
    </div>
          <div className="text-center my-8">
  <h2 className="text-3xl font-serif font-bold mb-8">Nos Références</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
    <div className="flex justify-center items-center">
      <Image src="/images/partner1.png" alt="Partner 1" className="h-24 w-24 object-contain" width={96} height={96} />
    </div>
    <div className="flex justify-center items-center">
      <Image src="/images/partner2.png" alt="Partner 2" className="h-24 w-24 object-contain" width={96} height={96} />
    </div>
    
  </div>
</div>

              
            </div>
        </div>
      </div>
    
  );
}

