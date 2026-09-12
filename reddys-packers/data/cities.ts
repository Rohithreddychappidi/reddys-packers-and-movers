export type CityGroup = {
  region: string;
  cities: string[];
};

// Curated, de-duplicated list built around the service area near Madanapalli.
export const cityGroups: CityGroup[] = [
  {
    region: "Near Madanapalli",
    cities: [
      "Madanapalli",
      "Punganur",
      "Palamaner",
      "Kuppam",
      "Piler",
      "Vayalpad",
      "Chittoor",
      "Puttur",
      "Nagari",
      "Rayachoty",
    ],
  },
  {
    region: "Andhra Pradesh",
    cities: [
      "Tirupati",
      "Renigunta",
      "Chandragiri",
      "Srikalahasti",
      "Kadapa",
      "Proddatur",
      "Rajampet",
      "Anantapur",
      "Hindupur",
      "Dharmavaram",
      "Kadiri",
      "Kurnool",
      "Nellore",
      "Gudur",
      "Naidupeta",
      "Venkatagiri",
      "Ongole",
      "Guntur",
      "Vijayawada",
      "Mangalagiri",
      "Machilipatnam",
      "Tenali",
      "Eluru",
      "Kakinada",
      "Vizianagaram",
      "Visakhapatnam",
    ],
  },
  {
    region: "Karnataka",
    cities: [
      "Bangalore",
      "Kolar",
      "Chikkaballapur",
      "Mysore",
      "Hubli-Dharwad",
      "Belgaum",
      "Gulbarga",
      "Mangalore",
    ],
  },
  {
    region: "Other South India",
    cities: [
      "Chennai",
      "Hosur",
      "Ambattur",
      "Coimbatore",
      "Salem",
      "Tiruchirappalli",
      "Madurai",
      "Tirunelveli",
      "Hyderabad",
      "Kochi",
      "Thiruvananthapuram",
    ],
  },
];

export const allCities: string[] = cityGroups.flatMap((g) => g.cities);

export function slugify(city: string): string {
  return city
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function unslugify(slug: string): string | undefined {
  return allCities.find((c) => slugify(c) === slug);
}
