import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentWork from "@/components/RecentWork";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { business } from "@/data/business";
import { allCities } from "@/data/cities";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: business.name,
    image: `https://${business.domain}/logo.png`,
    url: `https://${business.domain}`,
    telephone: `+${business.phoneRaw}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    areaServed: allCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    description:
      "Home relocation, office shifting, packing, loading and vehicle transport across Andhra Pradesh and South India.",
  };

  return (
    <main>
      <JsonLd data={structuredData} />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <RecentWork />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
