import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fire from "../images/svg/fire.svg"
import Sparkles from "../images/svg/sparkles.svg"
import Home from "../images/svg/home.svg"
import Bolt from "../images/svg/bolt.svg"

const ServiceCard = ({ title, description, icon, features, id }) => (
  <div
    id={id}
    className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
  >
    <div className="p-8">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white p-2 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-6 w-6 mr-2 flex-none fill-blue-500"
            >
              <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const ServicesPage = () => {
  const services = [
    {
      id: "installation",
      title: "Installation Électrique",
      description:
        "Des installations sur mesure pour vos projets résidentiels et commerciaux dans le Pas-de-Calais.",
      icon: <Bolt />,
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
      description:
        "Modernisez votre installation électrique pour plus de sécurité et d'efficacité à Arras et ses environs.",
      icon: <Sparkles />,
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
      description:
        "Une équipe disponible 24/7 pour résoudre vos problèmes électriques à Béthune et dans tout le Pas-de-Calais.",
      icon: <Fire />,
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
      description:
        "Transformez votre maison en un espace intelligent et connecté, adapté au climat du Nord.",
      icon: <Home />,
      features: [
        "Installation de systèmes de contrôle à distance sécurisés",
        "Configuration d'éclairages intelligents à basse consommation",
        "Mise en place de thermostats connectés pour économies d'énergie",
        "Intégration de systèmes de sécurité intelligents dernière génération",
      ],
    },
  ]

  return (
    <Layout>
      <div className="py-10 sm:py-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-3xl relative overflow-hidden">
        <StaticImage
          src="https://picsum.photos/1600/900"
          alt="Électricien au travail dans le Pas-de-Calais"
          className="absolute inset-0 opacity-40 w-full h-full object-cover"
          placeholder="blurred"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
              Services d'Électricien Professionnel dans le Pas-de-Calais
            </h1>
            <p className="mt-4 text-md sm:text-xl text-blue-200 max-w-3xl mx-auto">
              De l'installation à la maintenance, en passant par la rénovation
              et la domotique, notre expertise est à votre service à Lens,
              Liévin, Arras, Béthune et dans tout le Pas-de-Calais.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="mt-16 lg:flex lg:items-center lg:justify-between bg-blue-600 rounded-3xl px-6 py-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl mb-4">
                Besoin d'un Service Sur Mesure ?
              </h2>
              <p className="text-md sm:text-xl text-white mb-8 max-w-2xl mx-auto">
                Notre gamme de services s'étend au-delà de cette liste. Que vous
                soyez à Lens, Liévin, Arras ou Béthune, contactez-nous pour
                discuter de vos besoins spécifiques en électricité.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
                >
                  Demandez un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Services d'Électricien Expert | Pas-de-Calais, Lens, Liévin, Arras, Béthune"
    description="Installation, rénovation, dépannage et domotique par votre électricien local dans le Pas-de-Calais. Expertise professionnelle à Lens, Liévin, Arras et Béthune. Devis gratuit !"
  />
);

export default ServicesPage;
