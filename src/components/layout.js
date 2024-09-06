/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react';
//import { Link } from 'gatsby';
import Header from "./header";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-4 pt-28 pb-8">
        {children}
    </main>
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 text-center">
        © {new Date().getFullYear()} Électricien Pro. Tous droits réservés.
      </div>
    </footer>
  </div>
);

export default Layout;
