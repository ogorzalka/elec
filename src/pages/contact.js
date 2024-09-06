import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": form.getAttribute("name"),
        ...formState,
      }).toString(),
    })
      .then(() => navigate("/merci/"))
      .catch(error => alert(error))
  }

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
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto">
            Contactez Votre Électricien Local dans le Pas-de-Calais
          </h1>
          <p className="mt-4 text-md sm:text-xl text-blue-200 max-w-3xl mx-auto">
            Besoin d'un service électrique à Lens, Liévin, Arras ou Béthune ?
            Nous sommes là pour vous aider. Contactez-nous pour un devis gratuit
            ou une intervention rapide.
          </p>
        </div>
      </div>

      <div className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white shadow-2xl rounded-lg p-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Envoyez-nous un message
              </h2>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-blue-600 font-bold py-4 px-6 rounded-md hover:bg-yellow-300 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Envoyer votre message
                </button>
              </form>
            </div>

            {/* Informations de contact et carte */}
            <div className="space-y-8">
              <div className="bg-white shadow-xl rounded-lg p-8">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Nos coordonnées
                </h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-yellow-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    123 Rue de l'Électricité, 62300 Lens
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-yellow-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    03 21 XX XX XX
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-yellow-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    contact@electricien-pro-pdc.fr
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 text-yellow-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Lun-Ven: 8h-18h, Sam: 9h-12h
                  </li>
                </ul>
              </div>

              {/* Carte Google Maps */}
              <div className="bg-white shadow-xl rounded-lg p-8">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                  Notre zone d'intervention
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161244.07733962207!2d2.691047158799985!3d50.43480951729641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3a1c1f0dc473%3A0x50adaf2daa9ddfb0!2sLens%2C%20France!5e0!3m2!1sfr!2sfr!4v1651499618576!5m2!1sfr!2sfr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="mt-4 text-gray-600">
                  Nous intervenons à Lens, Liévin, Arras, Béthune et dans tout
                  le Pas-de-Calais.
                </p>
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
    title="Contactez votre électricien local | Pas-de-Calais, Lens, Liévin, Arras, Béthune"
    description="Besoin d'un électricien dans le Pas-de-Calais ? Contactez-nous pour un devis gratuit. Services rapides et professionnels à Lens, Liévin, Arras, Béthune et alentours."
  />
)

export default ContactPage;
