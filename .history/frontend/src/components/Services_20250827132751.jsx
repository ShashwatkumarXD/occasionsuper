import React from "react";
import ServiceCard from "./ServiceCard";
import {Image1,Image2,Image3,Image4,Image5,Image6} from "../assets"
function Services() {
  const services = [
    {
      image: Image1,
      title: "Weddings",
      subtitle: "By OccasionSuper",
      description:
        "Your dream wedding, perfectly planned. From grand celebrations to intimate ceremonies, find everything you need.",
    },
    {
      image: Image2,
      title: "Birthday",
      subtitle: "By OccasionSuper",
      description:
        "Celebrate another year of joy! Discover vendors for cakes, decor, entertainment, and venues for all ages.",
    },
    {
      image: Image3,
      title: "Corporate",
      subtitle: "By OccasionSuper",
      description:
        "Professional events made easy. Book venues, catering, and AV services for conferences, seminars, and team-building.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="bg-orange-50 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
          ✨ Premium Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Curated Event Experiences
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Every service is handpicked and managed by OccasionSuper to ensure
          exceptional quality and seamless execution
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
