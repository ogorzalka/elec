import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ServiceCard = ({ title, description, icon, features }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      title: "Installation Électrique",
      description: "Des installations sur mesure pour vos projets résidentiels et commerciaux.",
      icon: "⚡",
      features: [
        "Câblage complet pour nouvelles constructions",
        "Installation de panneaux électriques",
        "Mise en place de systèmes d'éclairage",
        "Installation de prises et interrupteurs",
      ],
    },
    {
      title: "Rénovation et Mise aux Normes",
      description: "Modernisez votre installation électrique pour plus de sécurité et d'efficacité.",
      icon: "🔧",
      features: [
        "Diagnostic de conformité",
        "Remplacement de câblages anciens",
        "Mise à niveau des tableaux électriques",
        "Installation de dispositifs de sécurité modernes",
      ],
    },
    {
      title: "Dépannage d'Urgence",
      description: "Une équipe disponible 24/7 pour résoudre vos problèmes électriques.",
      icon: "🚨",
      features: [
        "Intervention rapide",
        "Diagnostic précis des pannes",
        "Réparations durables",
        "Conseils pour prévenir les futures pannes",
      ],
    },
    {
      title: "Domotique et Maison Intelligente",
      description: "Transformez votre maison en un espace intelligent et connecté.",
      icon: "🏠",
      features: [
        "Installation de systèmes de contrôle à distance",
        "Configuration d'éclairages intelligents",
        "Mise en place de thermostats connectés",
        "Intégration de systèmes de sécurité intelligents",
      ],
    },
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nos Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Des solutions électriques pour tous vos besoins
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              De l'installation à la maintenance, en passant par la rénovation et la domotique, nous avons l'expertise pour répondre à tous vos besoins électriques.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h3>
            <p className="text-gray-600 mb-6">Nous offrons une gamme complète de services électriques. Contactez-nous pour discuter de vos besoins spécifiques.</p>
            <a href="/contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Contactez-nous pour un devis
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export const Head = () => <Seo title="Page two" />


export default ServicesPage;
