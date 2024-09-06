import React from "react"

const testimonials = [
  {
    quote: "Dépannage ultra-rapide, même un dimanche. Merci !",
    name: "Sophie M.",
    location: "Béthune",
  },
  {
    quote: "Installation impeccable et conseils précieux pour optimiser notre consommation.",
    name: "Pierre L.",
    location: "Arras",
  },
  {
    quote: "Rénovation complète de notre installation, travail professionnel et soigné.",
    name: "Marie D.",
    location: "Lens",
  }
];

const TestimonialsSection = () => (
  <section className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-14 lg:py-14 rounded-3xl my-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xl lg:text-3xl font-extrabold text-white text-center mb-12">
        Nos clients le diront mieux que nous
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="overflow-hidden">
            <div className="px-6 py-4 lg:py-8">
              <div className="relative mb-4">
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-md lg:text-lg font-medium text-white pl-8">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-300">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
