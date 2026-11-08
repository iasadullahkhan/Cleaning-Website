export type ServiceCategory = 
  | 'Residential Cleaning'
  | 'Deep Cleaning'
  | 'Regular House Cleaning'
  | 'Move-In Cleaning'
  | 'Move-Out Cleaning'
  | 'Kitchen Cleaning'
  | 'Bathroom Cleaning'
  | 'Apartment Cleaning';

export interface CleaningService {
  id: string;
  title: ServiceCategory;
  category: 'whole-home' | 'rooms' | 'moving';
  shortDescription: string;
  keyFeatures: string[];
  recommendedFor: string;
  imageSrc: string;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: ServiceCategory | 'General Inquiry';
  preferredDate: string;
  additionalDetails: string;
}

export interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  serviceRequired?: string;
  preferredDate?: string;
  additionalDetails?: string;
}
