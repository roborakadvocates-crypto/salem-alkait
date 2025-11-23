import { LucideIcon } from 'lucide-react';

export interface ContactLink {
  id: string;
  label: string;
  value?: string;
  url: string;
  icon: LucideIcon;
  colorClass: string; // Tailwind class for specific branding colors if needed
}

export interface ProfileData {
  name: string;
  title: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  website: string;
}