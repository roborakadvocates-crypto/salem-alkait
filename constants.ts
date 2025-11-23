import { ProfileData } from './types';

// IMPORTANT: Ensure 'profile.jpg' and 'logo.png' are placed in the public/root folder relative to index.html
// If using a bundler like Vite/Webpack, these might need to be in the 'public' folder.

export const LAWYER_DATA: ProfileData = {
  name: "المحامي سالم الكيت",
  title: "محامٍ ومستشار قانوني",
  phone: "+971527862750",
  whatsapp: "971527862750",
  instagram: "lawyer_salemalkait",
  website: "www.rakadvocates.com"
};

export const LINKS = {
  PHONE: "tel:+971527862750",
  WHATSAPP: "https://api.whatsapp.com/send/?phone=971527862750",
  INSTAGRAM: "https://www.instagram.com/lawyer_salemalkait/reels/?hl=ar",
  WEBSITE: "https://www.rakadvocates.com/",
  LOCATION: "https://maps.google.com/?q=Ras+Al+Khaimah+Advocates" // Optional fallback or future use
};