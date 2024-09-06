import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TestimonialsSection from "../components/testimonials"
import Fire from "../images/svg/fire.svg"
import Sparkles from "../images/svg/sparkles.svg"
import Home from "../images/svg/home.svg"
import Bolt from "../images/svg/bolt.svg"

const IndexPage = () => (
  <Layout>
    {/* Hero Section */}
    <div className="relative bg-blue-600 overflow-hidden rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <StaticImage
          src="https://picsum.photos/1600/900"
          alt="Électricien au travail dans le Pas-de-Calais"
          className="absolute inset-0 opacity-40 w-full h-full object-cover"
          placeholder="blurred"
        />
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Votre Électricien Pro dans le
                </span>{" "}
                <span className="block text-yellow-400 xl:inline">
                  Pas-de-Calais
                </span>
              </h1>
              <p className="mt-3 text-base text-blue-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Solutions électriques innovantes pour votre confort et votre
                sécurité à Lens, Liévin, Arras et Béthune
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10"
                  >
                    Obtenir un devis gratuit
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="py-12 my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Nos Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Solutions électriques complètes
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                icon: <Bolt />,
                title: "Installation",
                description:
                  "Installations électriques pour particuliers et professionnels",
              },
              {
                icon: <Sparkles />,
                title: "Rénovation",
                description:
                  "Mise aux normes et modernisation de vos installations",
              },
              {
                icon: <Fire />,
                title: "Dépannage",
                description:
                  "Intervention rapide 24/7 pour tous vos problèmes électriques",
              },
              {
                icon: <Home />,
                title: "Domotique",
                description:
                  "Solutions intelligentes pour votre maison connectée",
              },
            ].map(service => (
              <div key={service.title} className="relative rounded-2xl shadow-2xl px-6 py-6">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white p-2">
                    {service.icon || ""}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {service.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {service.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <section className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern
              id=":S6:"
              width="128"
              height="128"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
            >
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S6:)"></rect>
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px rounded-lg sm:rounded-3xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <StaticImage
              src="https://picsum.photos/576/576"
              alt="Notre équipe d'électriciens qualifiés dans le Pas-de-Calais"
              className="absolute inset-0 h-full w-full object-cover"
              placeholder="blurred"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-24">
            <p className="mt-8 font-display text-3xl lg:text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Pourquoi</span> nous
              choisir&nbsp;?
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "15+ ans d'expertise dans le Pas-de-Calais",
                "Équipe certifiée intervenant à Lens, Liévin, Arras et Béthune",
                "Technologie de pointe pour des installations durables",
                "Satisfaction client garantie sur tous nos travaux",
                "Devis transparents et sans engagement",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-md lg:text-lg">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    className="h-8 w-8 flex-none fill-blue-500"
                  >
                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
                  </svg>
                  <span class="ml-4">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-16 lg:px-2 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">
                  Prêt à améliorer votre installation électrique ?
                </span>
                <span className="block text-blue-600">
                  Contactez-nous dès aujourd'hui.
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Demandez un devis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection />
  </Layout>
)

export const Head = () => (
  <Seo
    title="Électricien Pro Pas-de-Calais | Services à Lens, Liévin, Arras, Béthune"
    description="Expert en électricité offrant des services d'installation, rénovation et dépannage dans le Pas-de-Calais. Intervention rapide à Lens, Liévin, Arras, Béthune et environs."
  />
)

export default IndexPage
