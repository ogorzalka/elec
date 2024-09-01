import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaOrg = ({
                     companyName,
                     address,
                     city,
                     region,
                     postalCode,
                     country,
                     latitude,
                     longitude,
                     phone,
                     website,
                     servicesArea
                   }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": companyName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "addressRegion": region,
      "postalCode": postalCode,
      "addressCountry": country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "url": website,
    "telephone": phone,
    "areaServed": servicesArea,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "geoRadius": "30000"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
