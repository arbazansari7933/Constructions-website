export const projectAreas = [
  "Bura Bazar",
  "Girish Park",
  "Kalighat",
  "Shyambazar",
  "Marquis Square",
];

export const projects = projectAreas.map((location, index) => ({
  id: index + 1,
  name: `${location} — Project Work`,
  location,
  description: `Ejaz Constructions has completed project work in ${location}, Kolkata. The exact project scope and client details can be added when the business provides them.`,
}));
