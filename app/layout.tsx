import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <head>
        <title>MAC Burkina Faso</title>
        <meta name="description" content="MAC Sénégal - Expertise comptable et conseil à Dakar" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="bg-gray-100 text-gray-800">
        {/* Header */}
        <header className="bg-blue-900 shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <Link href="/" legacyBehavior>
              <a>
                <Image src="/images/logo2.jpeg" alt="Logo MAC Sénégal" width={150} height={40} />
              </a>
            </Link>
            <nav className='relative font-roboto text-sm bg-blue shadow-lg transform transition-transform duration-300 hover:scale-105'>
  <ul className="flex space-x-6 text-base"> {/* Reduced the text size */}
    <li>
      <Link href="/" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Accueil</a>
      </Link>
    </li>
    
    <li className="relative group z-50"> {/* Ensure high z-index for visibility */}
      <a href="/nos-missions" className="text-white hover:text-blue-800">Nos missions</a>
      <ul className="absolute left-0 mt-2 w-48 bg-blue-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-roboto text-sm shadow-lg z-50">
        <li className="p-1 hover:bg-blue-700"><a href="/mission-comptable">Missions comptables</a></li>
        <li className="p-1 hover:bg-blue-700"><a href="/missions-juridiques">Missions juridiques et fiscales</a></li>
        <li className="p-1 hover:bg-blue-700"><a href="/mission-conseil">Conseil en gestion</a></li>
        <li className="p-1 hover:bg-blue-700"><a href="#">Système d'information</a></li>
      </ul>
    </li>
    
    <li>
      <Link href="/who-are-we" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Qui sommes nous?</a>
      </Link>
      <li>
      
    </li>
    </li>
    <li>
      <Link href="/formation" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Formation</a>
      </Link>
    </li>
    
   
    <li>
      <Link href="/join-us" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Rejoignez-nous</a>
      </Link>
      <li>
      
    </li>
    </li>
    
    <li>
      <Link href="/contact" legacyBehavior>
        <a className="text-white hover:text-blue-800 transition duration-300">Contactez nous</a>
      </Link>
    </li>
  </ul>
</nav>

          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-800 text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Section A Propos de Nous */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-orange-500">A PROPOS DE NOUS</h3>
      <p className="text-sm">
        Le cabinet compte actuellement des auditeurs seniors et des consultants de haut niveau qu'il déploie dans le cadre de ses prestations.
      </p>
    </div>
    
    {/* Section Liens Utiles */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-orange-500">LIENS UTILES</h3>
      <ul className="space-y-2">
        <li>
          <a href="/contact" className="text-white hover:text-orange-300 transition-colors duration-300">
            Contactez-nous
          </a>
        </li>
        <li>
          <a href="/nos-missions" className="text-white hover:text-orange-300 transition-colors duration-300">
            Nos missions
          </a>
        </li>
        <li>
          <a href="/nos-realisations" className="text-white hover:text-orange-300 transition-colors duration-300">
            Nos réalisations
          </a>
        </li>
      </ul>
    </div>
    
    {/* Section Réseaux Sociaux */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-orange-500">RÉSEAUX SOCIAUX</h3>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" className="text-white hover:text-orange-300 transition-transform duration-300 transform hover:scale-110">
        <img src="/images/facebook.png" alt="X" className="h-6 w-6"/> Facebook
        </a>
        <a href="https://www.twitter.com" className="text-white hover:text-orange-300 transition-transform duration-300 transform hover:scale-110">
        
                <img src="/images/twitter.png" alt="X" className="h-6 w-6"/> X
              </a>
         
      
      </div>
    </div>
  </div>
</footer>

         
      </body>
    </html>
  );
}
