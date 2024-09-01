import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative min-h-40 flex items-center overflow-hidden">
      <StaticImage
        src="https://picsum.photos/1600/900"
        alt="Électricien au travail dans le Pas-de-Calais"
        className="absolute inset-0 w-full h-full object-cover"
        placeholder="blurred"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-80"></div>
      <div className="relative z-10 text-white text-center mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Électricien Pro dans le <span className="text-yellow-400">Pas-de-Calais</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light">
          Solutions électriques innovantes pour votre confort et sécurité à Lens, Liévin, Arras et Béthune
        </p>
        <Link to="/contact" className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Obtenir un devis gratuit
        </Link>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Nos Services d'Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Installation Électrique", icon: "⚡", description: "Installations de pointe pour particuliers et professionnels à Lens et Liévin", link: "/services#installation" },
            { title: "Rénovation et Mise aux Normes", icon: "🔧", description: "Modernisation experte de vos systèmes électriques à Arras et environs", link: "/services#renovation" },
            { title: "Dépannage d'Urgence", icon: "🚨", description: "Intervention ultra-rapide 24/7 pour tous vos problèmes électriques à Béthune", link: "/services#depannage" },
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to={service.link} className="text-yellow-500 hover:text-yellow-600 font-semibold">En savoir plus →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pourquoi nous choisir */}
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Pourquoi Nous Choisir ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <StaticImage
              src="https://picsum.photos/600/400"
              alt="Notre équipe d'électriciens qualifiés dans le Pas-de-Calais"
              className="rounded-lg shadow-xl"
              placeholder="blurred"
            />
          </div>
          <div>
            <ul className="space-y-6">
              {[
                "15+ ans d'expertise dans le Pas-de-Calais",
                "Équipe certifiée intervenant à Lens, Liévin, Arras et Béthune",
                "Technologie de pointe pour des installations durables",
                "Satisfaction client garantie sur tous nos travaux",
                "Devis transparents et sans engagement",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-lg">
                  <svg className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Témoignages */}
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Paroles de Clients Satisfaits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Marie D., Lens", text: "Service exceptionnel ! Installation impeccable et conseils précieux." },
            { name: "Pierre L., Arras", text: "Rénovation complète réalisée avec professionnalisme. Résultat bluffant !" },
            { name: "Sophie M., Béthune", text: "Dépannage ultra-rapide un dimanche. Disponibilité et efficacité au top !" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-blue-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Installation Électrique ?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Contactez l'expert en électricité du Pas-de-Calais. De Lens à Béthune, nous sommes là pour concrétiser vos projets électriques.
        </p>
        <Link to="/contact" className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-300 transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Contactez-nous maintenant
        </Link>
      </div>
    </section>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Électricien Pro Pas-de-Calais | Services à Lens, Liévin, Arras, Béthune"
    description="Expert en électricité offrant des services d'installation, rénovation et dépannage dans le Pas-de-Calais. Intervention rapide à Lens, Liévin, Arras, Béthune et environs."
  />
);

export default IndexPage
