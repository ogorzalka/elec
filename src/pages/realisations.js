import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const RealisationsPage = () => (
  <Layout>
    <div className="py-10 sm:py-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-3xl relative overflow-hidden">
      <StaticImage
        src="https://picsum.photos/1600/900"
        alt="Électricien au travail dans le Pas-de-Calais"
        className="absolute inset-0 opacity-40 w-full h-full object-cover"
        placeholder="blurred"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
          Nos Réalisations Électriques dans le Pas-de-Calais
        </h1>
        <p className="mt-4 text-md sm:text-xl text-blue-200 max-w-3xl mx-auto">
          Découvrez bientôt nos projets d'installation, rénovation et dépannage
          électrique à Lens, Liévin, Arras, Béthune et dans tout le
          Pas-de-Calais.
        </p>
      </div>
    </div>

    <div className="py-10 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-lg p-8 md:p-12 text-center">
          <svg
            className="mx-auto h-24 w-24 text-yellow-400 mb-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>

          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Notre Galerie de Réalisations : Bientôt Disponible !
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            En tant que nouvel entrepreneur passionné dans le Pas-de-Calais,
            nous travaillons actuellement sur des projets innovants à Lens,
            Liévin, Arras et Béthune. Notre galerie de réalisations sera bientôt
            mise en ligne pour vous montrer l'étendue de notre savoir-faire en
            électricité.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              En attendant, découvrez nos services :
            </h3>
            <ul className="text-left text-gray-700 space-y-3">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Installation électrique pour particuliers et professionnels
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Rénovation et mise aux normes d'installations existantes
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dépannage électrique 24/7 dans tout le Pas-de-Calais
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Solutions de domotique et maison intelligente
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="https://www.facebook.com/votre-page-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.7188 0H1.28125C0.572754 0 0 0.572754 0 1.28125V22.7188C0 23.4272 0.572754 24 1.28125 24H12.8164V14.7095H9.69238V11.085H12.8164V8.41288C12.8164 5.31335 14.7124 3.62405 17.4785 3.62405C18.8012 3.62405 19.9409 3.72214 20.2735 3.76564V7.00752L18.3542 7.00837C16.8516 7.00837 16.5602 7.72214 16.5602 8.77172V11.085H20.1465L19.6805 14.7095H16.5602V24H22.7188C23.4272 24 24 23.4272 24 22.7188V1.28125C24 0.572754 23.4272 0 22.7188 0Z" />
              </svg>
              Suivez nos projets sur Facebook
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-yellow-400 hover:bg-yellow-300 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Demandez un devis gratuit
            </Link>
          </div>

          <p className="mt-8 text-gray-600">
            N'hésitez pas à nous contacter pour en savoir plus sur nos services
            et nos projets en cours dans le Pas-de-Calais !
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Réalisations électriques | Électricien Pas-de-Calais - Lens, Liévin, Arras, Béthune"
    description="Découvrez bientôt nos réalisations en électricité : projets résidentiels et commerciaux à Lens, Liévin, Arras, Béthune et dans tout le Pas-de-Calais. Qualité et expertise garanties."
  />
)

export default RealisationsPage;
