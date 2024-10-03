"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


export default function WhoWeAre() {
 
  const textRef = useRef(null);
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const skillsRef = useRef(null);
  const domainRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(bannerRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(historyRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(visionRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(skillsRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.fromTo(domainRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });


      const texts = [
        "A propos de nous",
        "Chez MAC Consulting Burkina, nous accompagnons les entreprises dans plusieurs domaines clés pour assurer leur réussite et leur conformité.",
        "Expertise Comptable : Nous offrons des services de comptabilité adaptés, allant de la tenue des comptes à la préparation des états financiers.",
        "Audit et Contrôle : Nos audits garantissent la transparence et la fiabilité de vos informations financières, renforçant ainsi vos contrôles internes.",
        "Conseil en Gestion : Nous aidons à optimiser la performance de votre entreprise grâce à des conseils en gestion financière et en stratégie.",
        "Fiscalité et Droit des Affaires : Nos experts vous assistent dans la gestion de vos obligations fiscales et juridiques, optimisant ainsi votre conformité.",
        "Formation : Nous proposons des formations sur mesure pour renforcer les compétences de vos équipes en comptabilité, finance, et gestion.",
        "Système d'Information : Nous vous aidons à déployer des systèmes d'information efficaces et adaptés à vos besoins spécifiques.",
        "Notre engagement est de fournir des solutions sur mesure qui répondent aux exigences du marché burkinabé et soutiennent la croissance de nos clients."
      ];
  
      let index = 0;
  
      const timeline = gsap.timeline({ repeat: -1, delay: 5 });
      timeline.to(textRef.current, {
        text: texts[index],
        duration: 5,
        ease: "power2.inOut",
        onComplete: () => {
          index = (index + 1) % texts.length;
          timeline.to(textRef.current, { text: texts[index], duration: 5, ease: "power2.inOut" });
        }
      });
  
      return () => {
        timeline.kill();
      };
    }, []);
  
  
 

  return (
    <div className="container mx-auto py-12 px-6">
     <div className="relative h-96 mb-12">
        <Image 
          src="/images/MACint.jpg" 
          alt="Mission Banner" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="rounded-lg shadow-lg"
        />
        <div 
          ref={bannerRef} 
          className="absolute top-5 right-5 bg-transparent text-blue-800 p-8 rounded-lg shadow-lg transform translate-y-12 translate-x-12"
        >
          <h1 className="text-4xl font-bold">A propos de nous?</h1>
        </div>
      </div>

      {/* Section Histoire */}
      <section ref={historyRef} className="mb-12 bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <Image src="/images/expert jr.jpg" alt="Our History" width={300} height={300} className="rounded-full shadow-lg" />
          </div>
          <div className="md:w-2/3 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">NOTRE HISTOIRE</h2>
            <p className="text-gray-700 leading-relaxed">
            Le Cabinet Management Audit and Consulting en abrégé MAC Consulting est une initiative panafricaine réunissant en son sein les meilleures compétences dans les missions d'assurance, de conseils en gestion, stratégie de développement, finance d'entreprise... avec comme mécanisme d'intervention le développement de relais de proximité dans chaque pays de la zone OHADA. Véritable pôle d'excellence, MAC Consulting prône le partage d'expérience entre les experts chevronnés avec pour but ultime d'offir des services d'assurance et de conseils de haute qualité tenant compte des exigences et normes internationales d'éthique et de qualité de sorte à garantir, développer et renforcer un climat de confiance à court, moyen et long terme avec les entreprises et institutions locales et internationales.
            </p>
          </div>
        </div>
      </section>

      {/* Section Vision */}
      <section ref={visionRef} className="mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">NOTRE VISION</h2>
            <p className="text-gray-700 leading-relaxed">
            Chez MAC Consulting Burkina, notre vision est de devenir le partenaire de confiance pour les entreprises du Burkina Faso en matière d'expertise comptable, d'audit, et de conseil. Nous aspirons à être reconnus pour notre capacité à anticiper les besoins de nos clients, en leur offrant des solutions innovantes et sur-mesure qui répondent aux défis les plus complexes de leur environnement économique.

Nous croyons fermement en l'importance de l'intégrité, de la rigueur, et de l'excellence dans toutes nos interventions. 
Notre engagement est de contribuer activement au développement durable des entreprises burkinabé, en les soutenant dans leur croissance, leur conformité réglementaire, et leur efficacité opérationnelle.

Grâce à une équipe hautement qualifiée et dévouée, nous sommes déterminés à accompagner nos clients dans l'atteinte de leurs objectifs financiers et stratégiques, tout en valorisant l'impact positif de leur activité sur l'économie nationale.
 Chez MAC Consulting Burkina, nous faisons de l'excellence un standard et du succès de nos clients notre priorité.
            </p>
            <a href="#" className="text-orange-500 hover:underline mt-4 inline-block">En savoir plus...</a>
          </div>
          <div className="md:w-1/3 md:ml-8 mt-4 md:mt-0 bg-blue-900 p-6 rounded-lg shadow-lg text-center">
      <Image src="/images/logo2.jpeg" alt="MAC Logo" width={100} height={100} className="mx-auto mb-4" />
      <h3 className="text-white text-lg font-semibold mb-2"></h3>
      <p className="text-white mb-4"></p>
      <Image src="/images/hero-image.jpg" alt="Team Photo" width={300} height={200} className="rounded-lg" />
    </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section ref={skillsRef} className="mb-12 bg-blue-800 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">COMPÉTENCES DE L'ÉQUIPE</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Mission comptable</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold"> Mission d'Audit</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Mission Juridique & Fiscale</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Conseils en gestion générale</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Système d'informations</h3>
            <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '79%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Domaine d'Intervention */}
      <section ref={domainRef} className="relative h-[500px] mb-12">
      <Image
        src="/images/MACint1.jpg" // Remplacez par l'URL de votre image de fond
        alt="Domaine d'intervention"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 p-8 text-center text-white">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">DOMAINE D'INTERVENTION</h2>
        <p ref={textRef} className="text-lg leading-relaxed max-w-2xl mx-auto">
          {/* Le texte s'animera ici */}
        </p>
        <a href="#" className="text-white border border-white px-4 py-2 mt-4 inline-block hover:bg-white hover:text-black transition">
          En savoir plus...
        </a>
      </div>
    </section>
     
<section className="bg-white py-12 shadow-md mt-8 relative z-20">
 
  <div className="container mx-auto text-center mt-12">
    <a href="/contact" className="bg-red-800 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">
      Contactez-nous
    </a>
  </div>
</section>
</div>

      )}
   
