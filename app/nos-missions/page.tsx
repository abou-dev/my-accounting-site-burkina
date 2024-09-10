"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function NosMissions() {
  const missionsRef = useRef<(HTMLDivElement | null)[]>(Array.from({ length: 6 }, () => null));
  const bannerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(missionsRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
 }, []
);


  return (
    <div className="container mx-auto py-12 px-6 relative z-10">
      <div className="relative inset-0 h-[70vh] overflow-hidden z-0">
        <Image 
          src="/images/banner3.webp" 
          alt="Mission Banner" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="rounded-lg shadow-lg z-10"
        />
        <div 
          ref={bannerRef} 
          className="absolute top-0 right-0 bg-blue-800 text-white p-8 rounded-lg shadow-lg transform translate-y-12 translate-x-12 z-20"
        >
          <h1 className="text-4xl font-extrabold text-center mb-12 text-white">Nos Missions au Burkina Faso</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          {
            title: "Missions comptables",
            content: [
              "Expertise-conseil",
              "Participation à l'établissement des comptes",
              "Révisions, Certifications et Attestations",
              "etc ..."
            ],
            bgColor: "bg-white",
            textColor: "text-blue-900",
            linkColor: "text-red-500",
            borderColor: "border-blue-900"
          },
          {
            title: "Missions juridiques",
            content: [
              "Assistance à toute opération de constitution",
              "Droit des sociétés",
              "etc ..."
            ],
            bgColor: "bg-red-500",
            textColor: "text-white",
            linkColor: "text-white",
            borderColor: "border-red-500"
          },
          {
            title: "Missions fiscales",
            content: [
              "Études et consultations sur les problèmes d'ordre fiscal",
              "Participation à l'établissement des déclarations fiscales",
              "etc ..."
            ],
            bgColor: "bg-blue-900",
            textColor: "text-white",
            linkColor: "text-white",
            borderColor: "border-blue-900"
          },
          {
            title: "Missions d'audit",
            content: [
              "Audits spécialisés",
              "Révision des procédures de contrôle interne",
              "Audit contractuel des comptes",
              "etc ..."
            ],
            bgColor: "bg-white",
            textColor: "text-blue-900",
            linkColor: "text-red-500",
            borderColor: "border-blue-900"
          },
          {
            title: "Système d'information",
            content: [
              "Audit du système d'information de gestion",
              "Conception des applications de gestion",
              "Formation aux logiciels métier",
              "etc ..."
            ],
            bgColor: "bg-red-500",
            textColor: "text-white",
            linkColor: "text-white",
            borderColor: "border-red-500"
          },
          {
            title: "Missions de conseil",
            content:[
              "Conseils en gestion (Missions générales)",
              "Elaboration des procédures",
              "Elaboration des cartographies des risques",
              "etc ..."
            ],
            bgColor: "bg-blue-900",
            textColor: "text-white",
            linkColor: "text-white",
            borderColor: "border-blue-900"
          }
        ].map((mission, index) => (
          <div
            key={index}
            className={`${mission.bgColor} ${mission.textColor} p-6 rounded-lg shadow-lg border-t-4 ${mission.borderColor}`}
            ref={(el) => {
              
            missionsRef.current[index] = el;
            }}
          >
            <h2 className="text-xl font-bold mb-4">{mission.title}</h2>
            <ul className="list-disc list-inside">
              {mission.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="/mission-comptable" className={`${mission.linkColor} mt-4 inline-block`}>En savoir plus...</a>
          </div>
        ))}
      </div>
    </div>
  );
}
