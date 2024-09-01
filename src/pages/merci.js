import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from "../components/seo"

const ThankYouPage = () => (
  <Layout>
    <div className="py-12 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Merci pour votre message !</h1>
        <p className="text-xl text-gray-600 mb-8">
          Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  </Layout>
);

export const Head = () => (
  <Seo
    title="Merci pour votre message | Électricien Pas-de-Calais"
    description="Merci d'avoir contacté votre électricien local dans le Pas-de-Calais. Nous vous répondrons rapidement pour tous vos besoins en électricité à Lens, Liévin, Arras, Béthune."
  />
);

export default ThankYouPage;
