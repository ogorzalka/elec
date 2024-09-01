import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="relative overflow-hidden">
      {/* Formes d'arrière-plan */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400 rounded-bl-full opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500 rounded-tr-full opacity-50 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Votre Électricien Pro dans le
              <span className="text-blue-600"> Pas-de-Calais</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quels services électriques vous faut-il ? Nous créons des solutions sur mesure pour vos besoins.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                "Installation",
                "Rénovation",
                "Dépannage",
                "Mise aux normes",
                "Domotique",
                "Éclairage LED",
              ].map((service, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-md text-center hover:bg-blue-50 transition duration-300">
                  <span className="text-sm font-medium text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Demandez un devis gratuit
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 transform rotate-12" style={{ zIndex: 0 }}></div>
            <StaticImage
              src="https://picsum.photos/600/400"
              alt="Électricien professionnel au travail"
              className="rounded-lg shadow-2xl relative"
              style={{ zIndex: 10 }}
              placeholder="blurred"
              layout="constrained"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gray-100 py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marie D., Lens", text: "Service exceptionnel et travail impeccable !" },
              { name: "Pierre L., Arras", text: "Rénovation complète réalisée avec professionnalisme." },
              { name: "Sophie M., Béthune", text: "Dépannage ultra-rapide, même un dimanche. Merci !" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-blue-600">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à améliorer votre installation électrique ?</h2>
          <p className="text-xl mb-8">Contactez-nous dès aujourd'hui pour un service d'excellence dans tout le Pas-de-Calais.</p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            Contactez-nous maintenant
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Électricien Pro Pas-de-Calais | Services à Lens, Liévin, Arras, Béthune"
    description="Expert en électricité offrant des services d'installation, rénovation et dépannage dans le Pas-de-Calais. Intervention rapide à Lens, Liévin, Arras, Béthune et environs."
  />
)

export default IndexPage