import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServiceCard = ({ title, description, icon, features, id }) => (
  <div id={id} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="p-8">
      <div className="text-5xl mb-6 text-blue-600">{icon}</div>
      <h3 className="text-2xl font-bold mb-4 text-blue-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="h-5 w-5 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      id: "installation",
      title: "Installation Électrique",
      description: "Des installations sur mesure pour vos projets résidentiels et commerciaux dans le Pas-de-Calais.",
      icon: "⚡",
      features: [
        "Câblage complet pour nouvelles constructions à Lens et Liévin",
        "Installation de panneaux électriques dernière génération",
        "Mise en place de systèmes d'éclairage économiques",
        "Installation de prises et interrupteurs design",
      ],
    },
    {
      id: "renovation",
      title: "Rénovation et Mise aux Normes",
      description: "Modernisez votre installation électrique pour plus de sécurité et d'efficacité à Arras et ses environs.",
      icon: "🔧",
      features: [
        "Diagnostic de conformité aux normes NF C 15-100",
        "Remplacement de câblages anciens par des solutions modernes",
        "Mise à niveau des tableaux électriques pour une meilleure sécurité",
        "Installation de dispositifs de protection contre la foudre",
      ],
    },
    {
      id: "depannage",
      title: "Dépannage d'Urgence",
      description: "Une équipe disponible 24/7 pour résoudre vos problèmes électriques à Béthune et dans tout le Pas-de-Calais.",
      icon: "🚨",
      features: [
        "Intervention rapide en moins de 1 heure sur Béthune",
        "Diagnostic précis des pannes avec équipement de pointe",
        "Réparations durables garanties",
        "Conseils personnalisés pour prévenir les futures pannes",
      ],
    },
    {
      id: "domotique",
      title: "Domotique et Maison Intelligente",
      description: "Transformez votre maison en un espace intelligent et connecté, adapté au climat du Nord.",
      icon: "🏠",
      features: [
        "Installation de systèmes de contrôle à distance sécurisés",
        "Configuration d'éclairages intelligents à basse consommation",
        "Mise en place de thermostats connectés pour économies d'énergie",
        "Intégration de systèmes de sécurité intelligents dernière génération",
      ],
    },
  ];

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Services d'Électricien Professionnel dans le Pas-de-Calais
            </h1>
            <p className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto">
              De l'installation à la maintenance, en passant par la rénovation et la domotique, notre expertise est à votre service à Lens, Liévin, Arras, Béthune et dans tout le Pas-de-Calais.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-6 text-blue-900">Besoin d'un Service Sur Mesure ?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre gamme de services s'étend au-delà de cette liste. Que vous soyez à Lens, Liévin, Arras ou Béthune, contactez-nous pour discuter de vos besoins spécifiques en électricité.
            </p>
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Demandez un Devis Gratuit
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Services d'Électricien Expert | Pas-de-Calais, Lens, Liévin, Arras, Béthune"
    description="Installation, rénovation, dépannage et domotique par votre électricien local dans le Pas-de-Calais. Expertise professionnelle à Lens, Liévin, Arras et Béthune. Devis gratuit !"
  />
);

export default ServicesPage;
